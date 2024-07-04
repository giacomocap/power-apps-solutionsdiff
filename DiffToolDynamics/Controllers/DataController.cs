using DiffToolDynamics.DataAccess;
using DiffToolDynamics.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DiffToolDynamics.Controllers
{
    //[Route("api/[controller]")]
    public class DataController : Controller
    {
        [HttpPost]
        public async Task<IEnumerable<SolutionsForConnectionString>> GetSolutionsForConnectionStrings([FromBody] Ids ids, CancellationToken cancellationToken)
        {
            if (ids != null && ids.ConnectionStrings != null)
            {
                //CancellationToken disconnectedToken = Request.;
                //var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetSolutionsForConnections(ids.ConnectionStrings, cancellationToken);
                return res;
            }
            return null;
        }

        [HttpPost]
        public async Task<IEnumerable<SolutionDetailsForConnectionString>> GetSolutionsDetailsForConnections([FromBody] SolutionDetailsForConnectionStringRequest request, CancellationToken cancellationToken)
        {
            if (request != null && request.ConnectionStrings != null)
            {
                //CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
                //var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetSolutionsDetailsForConnections(request.ConnectionStrings, request.Name, cancellationToken);
                return res;
            }
            return null;
        }
         
        [HttpPost]
        public async Task<IEnumerable<ElementDetailsForSolution>> GetSolutionsDetails([FromBody] SolutionsDetailsRequest request, CancellationToken cancellationToken)
        {
            if (request != null && request.ConnectionString != null)
            {
                //CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
                //var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken);

                var manager = new DataDataAccess();
                var res = await manager.GetSolutionsDetails(request.ConnectionString, request.Names, cancellationToken);
                return res;
            }
            return null;
        }
    }
}
