using MarkMpn.Sql4Cds.Engine;
using MarkMpn.Sql4Cds.Engine.ExecutionPlan;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;

namespace ServiceFramework.DataAccess
{
    public static class SqlToXrmHelper
    {
        public static async Task<IEnumerable<T>> ExecuteQuery<T>(string sql, (IOrganizationService, AttributeMetadataCache, TableSizeCache) connectionData) where T : new()
        {
            var Service = connectionData.Item1;
            var Metadata = connectionData.Item2;
            var Tablesize = connectionData.Item3;
            var options = new QueryOptions(Service);
            var converter = new ExecutionPlanBuilder(Metadata, Tablesize, options);

            var queries = converter.Build(sql);


            foreach (var query in queries)
            {
                if (query is IDataSetExecutionPlanNode dataQuery)
                {
                    return DataMapper.MapListDataTable<T>(dataQuery.Execute(Service, Metadata, options, null, null));

                }
                //else if (query is IDmlQueryExecutionPlanNode dmlQuery)
                //{
                //    var result = dmlQuery.Execute(Service, Metadata, options, null, null);

                //}
            }
            return null;
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
