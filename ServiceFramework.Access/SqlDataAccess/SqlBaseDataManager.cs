using Microsoft.Crm.Sdk.Messages;
using System.Configuration;
using MarkMpn.Sql4Cds.Engine;
using Microsoft.Xrm.Sdk;
using System.Collections.Generic;
using System;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Data.SqlClient;
using System.Threading.Tasks;
using MarkMpn.Sql4Cds.Engine.ExecutionPlan;
using Microsoft.Xrm.Sdk.Query;
using System.Linq;
using Microsoft.Xrm.Sdk.Metadata;
using System.Threading;
using Newtonsoft.Json;
using System.Data;

namespace ServiceFramework.DataAccess
{
    public class SqlBaseDataManager
    {
        class DataTableCache
        {
            public string Rows { get; set; }
            public DateTime CacheEntry { get; set; }
        }

        private Dictionary<Guid, SqlConnection> _connections = new Dictionary<Guid, SqlConnection>();
        private static readonly IDictionary<string, AttributeMetadataCache> _metadata = new Dictionary<string, AttributeMetadataCache>();
        private static readonly IDictionary<string, TableSizeCache> _tableSize = new Dictionary<string, TableSizeCache>();
        private static readonly IDictionary<string, IOrganizationService> _service = new Dictionary<string, IOrganizationService>();
        private static readonly IDictionary<string, DataTableCache> _cache = new Dictionary<string, DataTableCache>();

        public (IOrganizationService, AttributeMetadataCache, TableSizeCache) GetXrmConnection(string con)
        {
            IOrganizationService service;
            AttributeMetadataCache metadata;
            TableSizeCache tableSizeCache;

            if (!(_service.ContainsKey(con) && ((CrmServiceClient)_service[con]).IsReady))
            {
                service = new CrmServiceClient(con);
                _service[con] = service;
            }
            else
            {
                service = _service[con];
            }

            if (!_metadata.ContainsKey(con))
            {
                metadata = new AttributeMetadataCache(service);
                _metadata[con] = metadata;
            }
            else
            {
                metadata = _metadata[con];
            }

            if (!_tableSize.ContainsKey(con))
            {
                tableSizeCache = new TableSizeCache(service, metadata);
                _tableSize[con] = tableSizeCache;
            }
            else
            {
                tableSizeCache = _tableSize[con];
            }

            return (service, metadata, tableSizeCache);
        }

        public async Task<IEnumerable<T>> ExecuteSqlOnXrmQuery<T>(string sql, string con, CancellationToken cancellationToken) where T : new()
        {
            var cacheKey = GetSqlKey(sql, con);
            var cached = GetFromCache<T>(cacheKey);
            if (cached != null)
                return cached;
            if (cancellationToken.IsCancellationRequested)
                return new List<T>();
            var connectionData = GetXrmConnection(con);
            var Service = connectionData.Item1;
            var Metadata = connectionData.Item2;
            var Tablesize = connectionData.Item3;
            var options = new QueryOptions(Service);
            var converter = new ExecutionPlanBuilder(Metadata, Tablesize, options);
            //WhoAmIRequest request = new WhoAmIRequest();
            //WhoAmIResponse response = (WhoAmIResponse)Service.Execute(request);
            if (cancellationToken.IsCancellationRequested)
                return new List<T>();

            var queries = converter.Build(sql);

            if (cancellationToken.IsCancellationRequested)
                return new List<T>();


            foreach (var query in queries)
            {
                if (query is IDataSetExecutionPlanNode dataQuery)
                {
                    var result = dataQuery.Execute(Service, Metadata, options, null, null);
                    if (cancellationToken.IsCancellationRequested)
                        return new List<T>();
                    var mapped = DataMapper.MapListDataTable<T>(result);
                    AddToCache(mapped, cacheKey);
                    return mapped;
                }
                //else if (query is IDmlQueryExecutionPlanNode dmlQuery)
                //{
                //    var result = dmlQuery.Execute(Service, Metadata, options, null, null);

                //}
            }
            return null;
        }

        public async Task<IEnumerable<T>> ExecuteSqlAsync<T>(string sql, string connectionString, CancellationToken cancellationToken) where T : new()
        {
            var connection = OpenConnection(connectionString);
            IDataReader drdParent = await SqlHelper.ExecuteScalarAsync(connection, CommandType.Text, sql, new SqlParameter[] { });
            if (cancellationToken.IsCancellationRequested)
                return new List<T>();
            var nodes = DataMapper.MapListData<T>(drdParent);
            CloseConnection(connection);
            return nodes;
        }

        protected string GetSqlKey(string sql, string con)
        {
            return sql + con;
        }

        private void AddToCache<T>(IEnumerable<T> dt, string key)
        {
            if (dt.Count() < 1001)
            {
                var toRemove = new List<string>();
                foreach (var item in _cache)
                {
                    if (item.Value.CacheEntry < DateTime.UtcNow.AddMinutes(-5))
                    {
                        toRemove.Add(item.Key);
                    }
                }
                foreach (var item in toRemove)
                {
                    _cache.Remove(item);
                }
                var toCache = new DataTableCache() { CacheEntry = DateTime.UtcNow, Rows = JsonConvert.SerializeObject(dt) };
                _cache[key] = toCache;

            }
        }

        private IEnumerable<T> GetFromCache<T>(string key) where T : new()
        {
            if (_cache.ContainsKey(key))
            {
                var cached = _cache[key];
                if (cached != null && cached.CacheEntry > DateTime.UtcNow.AddMinutes(-5))
                {
                    return JsonConvert.DeserializeObject<IEnumerable<T>>(cached.Rows);
                }
            }
            return null;
        }

        protected string GetConnectionString(string name = "Sql")
        {
            for (int i = 0; i < ConfigurationManager.ConnectionStrings.Count; i++)
            {
                ConnectionStringSettings cs = ConfigurationManager.ConnectionStrings[i];
                if (cs.Name.ToLowerInvariant() == name.ToLowerInvariant())
                {
                    return cs.ConnectionString;
                }
            }
            return "";
        }

        protected SqlConnection OpenConnection(string connectionString)
        {
            try
            {
                var conn = new SqlConnection(connectionString);
                conn.Open();
                _connections.Add(conn.ClientConnectionId, conn);
                return conn;
            }
            catch (InvalidOperationException ex)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        protected void CloseConnection(SqlConnection connection)
        {
            if (_connections.TryGetValue(connection.ClientConnectionId, out var conn))
            {
                conn.Close();
                conn = null;
                _connections.Remove(connection.ClientConnectionId);
            }
        }

        public void Log(string message)
        {

        }

        public void LogError(string errorCode, string errorMessage, Exception ex)
        {

        }

    }

    class QueryOptions : IQueryExecutionOptions
    {
        private int _localeId;
        private readonly IOrganizationService _org;
        private readonly List<JoinOperator> _joinOperators;

        public QueryOptions(IOrganizationService org)
        {
            _org = org;
            _joinOperators = new List<JoinOperator>
            {
                JoinOperator.Inner,
                JoinOperator.LeftOuter,
                JoinOperator.Any,
                JoinOperator.Exists
            };
        }


        public bool Cancelled => false;

        public bool BlockUpdateWithoutWhere => true;

        public bool BlockDeleteWithoutWhere => true;

        public bool UseBulkDelete => true;

        public int BatchSize => 100;

        public bool UseTDSEndpoint => false;

        public bool UseRetrieveTotalRecordCount => true;

        public int LocaleId
        {
            get
            {
                if (_localeId != 0)
                    return _localeId;

                var qry = new QueryExpression("usersettings");
                qry.TopCount = 1;
                qry.ColumnSet = new ColumnSet("localeid");
                qry.Criteria.AddCondition("systemuserid", ConditionOperator.EqualUserId);
                var userLink = qry.AddLink("systemuser", "systemuserid", "systemuserid");
                var orgLink = userLink.AddLink("organization", "organizationid", "organizationid");
                orgLink.EntityAlias = "org";
                orgLink.Columns = new ColumnSet("localeid");
                var locale = _org.RetrieveMultiple(qry).Entities.Single();

                if (locale.Contains("localeid"))
                    _localeId = locale.GetAttributeValue<int>("localeid");
                else
                    _localeId = (int)locale.GetAttributeValue<AliasedValue>("org.localeid").Value;

                return _localeId;
            }
        }


        public int MaxDegreeOfParallelism => 10;

        public bool ColumnComparisonAvailable => true;

        public bool UseLocalTimeZone => false;

        public List<JoinOperator> JoinOperatorsAvailable => _joinOperators;

        public bool BypassCustomPlugins => false;

        public bool ConfirmDelete(int count, EntityMetadata meta) => true;

        public bool ConfirmInsert(int count, EntityMetadata meta) => true;

        public bool ConfirmUpdate(int count, EntityMetadata meta) => true;

        public bool ContinueRetrieve(int count) => true;

        public void Progress(double? progress, string message)
        {
            return;
        }

        public void RetrievingNextPage()
        {
            return;
        }
    }


}
