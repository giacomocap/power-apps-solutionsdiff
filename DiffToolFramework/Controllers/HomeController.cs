using System.IO;
using System.Web;
using System.Web.Mvc;

namespace DiffToolFramework.Controllers
{
    public class HomeController : Controller
    {
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
            else
            {
                return View();
            }
        }
    }
}