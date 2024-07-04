using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiffToolFramework.Controllers
{

    //[Route("DiffToolFramework/Content/libs/{*everything}")]
    public class DiffToolFrameworkController : Controller
    {
        // GET: DiffToolFramework
        public ActionResult Index()
        {
            var requestPath = Request.RawUrl;
            var dir = Directory.GetCurrentDirectory();
            var filepath = Path.Combine(dir, requestPath);

            // if the requested file exists in the system
            if (System.IO.File.Exists(filepath))
            {
                var mime = MimeMapping.GetMimeMapping(filepath);
                return new FilePathResult(filepath, mime);
            }
            return new HttpStatusCodeResult(404);
        }
    }
}