using KendoMenuWithCustomAuthorizationAttr.AuthorizationAttributes;
using System.Web.Mvc;

namespace KendoMenuWithCustomAuthorizationAttr.Areas.Area2.Controllers
{
    public class Area2Controller : Controller
    {
        //
        // GET: /Area2/Area2/
        [GroupAuthorize(Roles = "NotAdmin")]
        public ActionResult Index()
        {
            return View();
        }

    }
}
