using DiffToolDynamics.DataAccess;
using DiffToolDynamics.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiffToolDynamics.Controllers
{
    //[Route("[controller]")]
    //[ApiController]
    public class ConnectionController : ControllerBase
    {
        public string GetIp()
        {
            var ip = Request.HttpContext.Connection.RemoteIpAddress;
            if (ip != null)
                return ip.ToString();
            return "";
        }


        [HttpGet]
        [ActionName("GetAll")]
        public IEnumerable<XrmConnectionString> GetAll()
        {
            var manager = new ConnectionStringDataAccess();
            var res = manager.GetConnectionStrings(GetIp());
            return res;
        }

        //GET api/<DataController>/5
        [HttpGet]
        [ActionName("Get")]
        public XrmConnectionString Get(string id)
        {
            var manager = new ConnectionStringDataAccess();
            var res = manager.Get(id);
            return res;
        }

        // POST api/<DataController>
        [HttpPost]
        [ActionName("AddUpdate")]
        public IActionResult Post([FromBody] XrmConnectionString value)
        {
            var manager = new ConnectionStringDataAccess();
            value.IpAddress = GetIp();
            manager.AddUpdateConnectionStrings(value);
            return Ok();
        }

        // PUT api/<DataController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<DataController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
