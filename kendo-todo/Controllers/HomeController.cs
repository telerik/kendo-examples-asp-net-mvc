using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using KendoDataSourceCRUD.Models;
using System;

namespace KendoDataSourceCRUD.Controllers
{
    [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")] 
    public class HomeController : Controller
    {
        public ActionResult Index() {
            SetItems();

            var meta = new Meta
            {
                Mode = "single",
                Title = "Single Update Mode",
                Description = "In Single Update mode, all actions are sent to the server as individual requests as soon as they are initiated in the UI.  The UI reflects the changes made on the server."
            };

            return View(meta);
        }

        public ActionResult Batch() {
            SetItems();

            var meta = new Meta
            {
                Mode = "batch",
                Title = "Batch Update Mode",
                Description = "In Batch Update mode, new items are created on the server, but edit's and delete's are made to the model and are not submitted to the server until the 'Save Changes' button is clicked.  Then they are sent in batches instead of individual calls."
            };

            return View("Index", meta);
        }

        private void SetItems() {
            var items = new List<Item>();
            items.Add(new Item { ID = 1, Name = "Download Kendo UI" });
            items.Add(new Item { ID = 2, Name = "Build Amazing Apps" });

            if (Session["Items"] == null) {
                Session.Add("Items", items);
            }
        }


        private IList<Item> Items() {
            return (IList<Item>)Session["Items"];
        }

        private void SaveItems(IList<Item> items) {
            Session["Items"] = items;
        }

        public JsonResult Read()
        {
            return this.Json(Items(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult CreateBatch(IEnumerable<Item> item) {
            var items = Items();
            var newItem = new Item { Name = item.ElementAt(0).Name, ID = 1 };

            if (items.Count > 0) {
                var nextID = (from i in items
                          select i.ID).Max() + 1;

                newItem.ID = nextID;
            }

            items.Add(newItem);

            SaveItems(items);

            return this.Json(newItem);
        }

        public JsonResult Create(string name) {
            var items = new List<Item>();
            items.Add(new Item { Name = name, ID = 1 });
            return CreateBatch(items);
        }

        public JsonResult Delete(Item item) {
            var items = Items();
            var itemToDelete = (from i in items
                                where i.ID == item.ID
                                select i).FirstOrDefault();

            if (itemToDelete != null) items.Remove(itemToDelete);

            SaveItems(items);

            return this.Json(items);
        }

        public JsonResult DeleteBatch(IEnumerable<Item> itemsToDelete) {
            
            var items = Items();

            foreach(var item in itemsToDelete) {
                var itemToDelete = (from d in items
                                   where d.ID == item.ID
                                   select d).FirstOrDefault();

                if (itemToDelete != null) items.Remove(itemToDelete);
            }

            SaveItems(items);

            return this.Json(items);
        }

        public JsonResult Update(Item item)
        {
            var items = Items();

            var itemToUpdate = (from i in items
                                where i.ID == item.ID
                                select i).FirstOrDefault();

            if (itemToUpdate != null) itemToUpdate.Name = item.Name;

            return this.Json(itemToUpdate);
        }

        public void UpdateBatch(IEnumerable<Item> itemsToUpdate)
        {
            var items = Items();

            foreach (var item in itemsToUpdate)
            {
                var itemToUpdate = (from i in items
                                    where i.ID == item.ID
                                    select i).FirstOrDefault();

                itemToUpdate.Name = item.Name;
            }

            SaveItems(items);

        }
    }
}
