using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace requirejs_fundamentals.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {

            #if DEBUG
                ViewBag.useBuild = false;
            #else
                ViewBag.useBuild = true;
            #endif

            return View();
        }

    }
}
