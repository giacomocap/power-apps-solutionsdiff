extern alias Dataverse;

using Microsoft.Data.SqlClient;
using System.Configuration;
using MarkMpn.Sql4Cds.Engine;
using Dataverse::Microsoft.PowerPlatform.Dataverse.Client;

namespace ServiceFramework.DataAccess
{
    public class SqlBaseDataManager
    {

        private Dictionary<Guid, SqlConnection> _connections = new Dictionary<Guid, SqlConnection>();
        private readonly IDictionary<string, AttributeMetadataCache> _metadata = new Dictionary<string, AttributeMetadataCache>();
        private readonly IDictionary<string, TableSizeCache> _tableSize = new Dictionary<string, TableSizeCache>();
        private readonly IDictionary<string, Microsoft.Xrm.Sdk.IOrganizationService> _service = new Dictionary<string, Microsoft.Xrm.Sdk.IOrganizationService>();

        public (Microsoft.Xrm.Sdk.IOrganizationService, AttributeMetadataCache, TableSizeCache) GetXrmConnection(string con)
        {
            if (!(_service.ContainsKey(con) && ((ServiceClient)_service[con]).IsReady))
            {
                var conn = new ServiceClient(con);
                Dataverse.Microsoft.Xrm.Sdk.IOrganizationService Service = conn;
                _service[con] = Service;
            }

            if (!_metadata.ContainsKey(con))
                _metadata[con] = new AttributeMetadataCache(_service[con]);

            if (!_tableSize.ContainsKey(con))
                _tableSize[con] = new TableSizeCache(_service[con], _metadata[con]);

            return (_service[con], _metadata[con], _tableSize[con]);
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
}
