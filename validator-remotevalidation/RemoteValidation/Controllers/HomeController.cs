using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace RemoteValidation.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Validate(string field, string value)
        {
            if (field == "userId")
            {
                if (value == "123" || value == "132")
                {
                    return Json(new { Success = true }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return new HttpStatusCodeResult(400, "Failed validation for userId");
                }
            }

            if (field == "qty")
            {
                value = value != "" ? value: "-1";
                int val = int.Parse(value);
                if (val > 0 && val < 10)
                {
                    return Json(new { Success = true }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return new HttpStatusCodeResult(400, "Failed validation for qty");
                }
            }

            if (field == "price")
            {
                value = value != "" ? value : "-1";
                int val = int.Parse(value);
                if (val > 100 && val < 1000)
                {
                    return Json(new { Success = true }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return new HttpStatusCodeResult(400, "Failed validation for price");
                }
            }
            return new HttpStatusCodeResult(400, "Validation failed");
        }
    }
}
