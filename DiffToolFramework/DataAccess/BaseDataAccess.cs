using DiffToolFramework.Models;
using ServiceFramework.DataAccess;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DiffToolFramework.DataAccess
{
    public class BaseDataAccess : SqlBaseDataManager
    {
        public async Task<IEnumerable<T>> ExecuteSql<T>(string sql, string connectionString, CancellationToken cancellationToken) where T : new()
        {
            var nodes= await ExecuteSqlAsync<T>(sql, connectionString, cancellationToken);
            return nodes;
        }

        public async Task<IEnumerable<T>> ExecuteSqlOnXrm<T>(string sql, string connectionString, CancellationToken cancellationToken) where T : new()
        {
            var nodes = await ExecuteSqlOnXrmQuery<T>(sql, connectionString, cancellationToken);
            return nodes;
        }

        protected string GetOrgServiceConnectionString(XrmConnectionString xrmConnectionString)
        {
            string connectionString = "AuthType=ClientSecret;Url=https://{0}/; ClientId={1};ClientSecret={2}";
            return string.Format(connectionString, xrmConnectionString.OrganizationUrl, xrmConnectionString.ClientId, xrmConnectionString.Secret);
        }
    }
}
