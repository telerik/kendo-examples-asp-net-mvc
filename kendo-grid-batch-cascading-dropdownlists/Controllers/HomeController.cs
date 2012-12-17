using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using KendoGridWithCascadingComboBoxes.Models;
using System.Collections.Generic;
using System.ComponentModel;
using System.Web.Helpers;
using System.Web.Mvc;
using License = KendoGridWithCascadingComboBoxes.Models.License;
using System;

namespace KendoGridWithCascadingComboBoxes.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (!LicenseRepository.Repository.HasLicenses())
            {
                LicenseRepository.Repository.Insert(new License
                {
                    CustomerId = 1,
                    LicenseId = 1,
                    ProductId = 1,
                    VendorId = 1
                });
            }

            return View();
        }

        [HttpPost]
        public JsonResult Read([DataSourceRequest] DataSourceRequest request)
        {
            return Json(LicenseRepository.Repository.GetAll().ToDataSourceResult(request));
        }

        [HttpPost]
        public JsonResult Create([DataSourceRequest] DataSourceRequest request, [Bind(Prefix = "models")]IEnumerable<License> licenses)
        {
            var results = new List<License>();

            if (licenses != null && ModelState.IsValid)
            {
                foreach (var license in licenses)
                {
                    LicenseRepository.Repository.Insert(license);
                    results.Add(license);
                }
            }

            return Json(results.ToDataSourceResult(request, ModelState));
        }

        [HttpPost]
        public JsonResult Update([DataSourceRequest] DataSourceRequest request, [Bind(Prefix = "models")]IEnumerable<License> licenses)
        {
            if (licenses != null && ModelState.IsValid)
            {
                foreach (var license in licenses)
                {
                    LicenseRepository.Repository.Update(license);
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public JsonResult GetCustomers()
        {
            return Json(CustomerRepository.Repository.Customers, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetVendors()
        {
            var customerId = Convert.ToInt32(Request.Params["filter[filters][0][value]"]);

            return Json(VendorRepository.Repository.GetVendorsByCustomer(customerId), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProducts()
        {
            var vendorId = Convert.ToInt32(Request.Params["filter[filters][0][value]"]);

            return Json(ProductRepository.Repository.GetProductsByVendor(vendorId), JsonRequestBehavior.AllowGet);
        }
    }
}
