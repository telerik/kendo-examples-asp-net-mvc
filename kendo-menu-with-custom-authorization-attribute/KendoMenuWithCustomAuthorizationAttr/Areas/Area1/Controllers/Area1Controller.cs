using KendoMenuWithCustomAuthorizationAttr.AuthorizationAttributes;
using System.Web.Mvc;

namespace KendoMenuWithCustomAuthorizationAttr.Areas.Area1.Controllers
{
    public class Area1Controller : Controller
    {
        //
        // GET: /Area1/Area1/
        [GroupAuthorize(Roles = "Admin")]
        public ActionResult Index()
        {
            return View();
        }

    }
}
