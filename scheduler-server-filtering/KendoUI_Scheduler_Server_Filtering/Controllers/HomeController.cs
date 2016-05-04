using System;
using System.Linq;
using System.Web.Mvc;
using KendoUI_Scheduler_Server_Filtering.Models;

namespace KendoUI_Scheduler_Server_Filtering.Controllers
{
    public class HomeController : Controller
    {        

        private SchedulerTaskService taskService;

        public HomeController()
        {
            taskService = new SchedulerTaskService();
        }

        public ActionResult Index()
        {
            return View();
        }

        public virtual JsonResult Read(DateTime start, DateTime end)
        {     
            return Json(taskService.GetRange(start, end));
        }

        public virtual JsonResult Destroy(TaskViewModel task)
        {
            if (ModelState.IsValid)
            {
                taskService.Delete(task, ModelState);
            }

            return Json(new[] { task });
        }

        public virtual JsonResult Create(TaskViewModel task)
        {
            if (ModelState.IsValid)
            {
                taskService.Insert(task, ModelState);
            }

            return Json(new[] { task });
        }

        public virtual JsonResult Update(TaskViewModel task)
        {
            if (ModelState.IsValid)
            {
                taskService.Update(task, ModelState);
            }

            return Json(new[] { task });
        }

        protected override void Dispose(bool disposing)
        {
            taskService.Dispose();
            base.Dispose(disposing);
        }

    }
}
