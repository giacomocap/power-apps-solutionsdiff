
using System.Web.Mvc;
using System.Web.Routing;

namespace DiffToolFramework
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "DefaultApi",
                url: "api/{controller}/{action}/{id}",
                defaults: new { id = UrlParameter.Optional }
            );

            routes.MapRoute(
               name: "DiffToolFrameworkFiles",
               url: "DiffToolFramework/Content/libs/{*anything}",
               defaults: new { controller = "DiffToolFramework", action = "Index" }
           );

            routes.MapRoute(
                name: "Default",
                url: "{*anything}",
                defaults: new { controller = "Home", action = "Index" }
            );
            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);
        }
    }
}
