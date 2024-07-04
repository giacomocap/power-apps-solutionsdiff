using DiffToolFramework.DataAccess;
using DiffToolFramework.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace DiffToolFramework.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        [HttpPost]
        public async Task<string> GetSolutionsForConnectionStrings(Ids ids, CancellationToken cancellationToken)
        {
            if (ids != null && ids.ConnectionStrings != null)
            {
                CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
                var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetSolutionsForConnections(ids.ConnectionStrings, source.Token);
                return JsonConvert.SerializeObject(res);
            }
            return null;
        }

        [HttpPost]
        [AsyncTimeout(600000)]
        public async Task<string> GetSolutionsDetailsForConnections(SolutionDetailsForConnectionStringRequest request, CancellationToken cancellationToken)
        {
            if (request != null && request.ConnectionStrings != null)
            {
                CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
                var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetSolutionsDetailsForConnections(request.ConnectionStrings, request.Name, source.Token);
                return JsonConvert.SerializeObject(res);
            }
            return null;
        }

        [HttpPost]
        [AsyncTimeout(600000)]
        public async Task<string> GetSolutionsDetails(SolutionsDetailsRequest request, CancellationToken cancellationToken)
        {
            if (request != null && request.ConnectionString != null)
            {
                CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
                var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetSolutionsDetails(request.ConnectionString, request.Names, source.Token);
                return JsonConvert.SerializeObject(res);
            }
            return null;
        }

        [HttpPost]
        [AsyncTimeout(600000)]
        public async Task<string> GetEntityDetailsBySolution(SolutionDetailsForConnectionStringRequest request, CancellationToken cancellationToken)
        {
            if (request != null && request.ConnectionStrings != null)
            {
                CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
                var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetEntityModelsForConnections(request.ConnectionStrings, request.Name, source.Token);
                return JsonConvert.SerializeObject(res);
            }
            return null;
        }

        [HttpPost]
        [AsyncTimeout(600000)]
        public async Task<string> GetEntityDetailsForConnectionStrings(SolutionDetailsForConnectionStringRequest request, CancellationToken cancellationToken)
        {
            if (request != null && request.ConnectionStrings != null)
            {
                CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
                var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetEntityModelsForConnections(request.ConnectionStrings, request.Name, source.Token);
                return JsonConvert.SerializeObject(res);
            }
            return null;
        }
    }
}