using DiffToolFramework.DataAccess;
using DiffToolFramework.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace DiffToolFramework.Controllers
{
    [Route("api/[controller]")]
    public class ConnectionController : Controller
    {
        public string GetIp()
        {
            var ip = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

            if (string.IsNullOrEmpty(ip))
            {
                ip = Request.ServerVariables["REMOTE_ADDR"];
            }
            if (!string.IsNullOrEmpty(ip))
                return ip.ToString();
            return "";
        }


        [HttpGet]
        [ActionName("GetAll")]
        public async Task<string> GetAll()
        {
            var manager = new ConnectionStringDataAccess();
            var res = await manager.GetConnectionStrings(GetIp());
            return JsonConvert.SerializeObject(res);
        }

        //GET api/<DataController>/5
        [HttpGet]
        [ActionName("Get")]
        public async Task<string> Get(Guid id)
        {
            var manager = new ConnectionStringDataAccess();
            var res = await manager.Get(id);
            return JsonConvert.SerializeObject(res);
        }

        // POST api/<DataController>
        [HttpPost]
        [ActionName("AddUpdate")]
        public async Task<ActionResult> Post(XrmConnectionString value)
        {
            var manager = new ConnectionStringDataAccess();
            value.IpAddress = GetIp();
            await manager.AddUpdateConnectionStrings(value);
            return new HttpStatusCodeResult(System.Net.HttpStatusCode.OK);
        }
    }
}