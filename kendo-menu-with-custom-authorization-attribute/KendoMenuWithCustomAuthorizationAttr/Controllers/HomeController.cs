using KendoMenuWithCustomAuthorizationAttr.AuthorizationAttributes;
using System.Web.Mvc;

namespace KendoMenuWithCustomAuthorizationAttr.Controllers
{
    public class HomeController : Controller
    {
        [AllowAnonymous]
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        [GroupAuthorize(Roles = "Admin")]
        public ActionResult About()
        {
            return View();
        }
    }
}
