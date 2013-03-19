using System;
using System.Web.Mvc;

namespace KendoMenuWithCustomAuthorizationAttr.AuthorizationAttributes
{
    public class CustomUnauthorizedActionResult : HttpUnauthorizedResult
    {
        public string Url { get; set; }
        public bool Permanent { get; set; }

        public CustomUnauthorizedActionResult(string url) : this(url, true)
        {
        }

        public CustomUnauthorizedActionResult(string url, bool permanent)
        {
            if (string.IsNullOrEmpty(url))
            {
                throw new ArgumentException("Url cannot be null", "url");
            }

            this.Permanent = permanent;
            this.Url = url;
        }


        public override void ExecuteResult(ControllerContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException("context");
            }
            if (context.IsChildAction)
            {
                throw new InvalidOperationException("Cannot redirect in Child Action");
            }
            string url = UrlHelper.GenerateContentUrl(this.Url, context.HttpContext);
            context.Controller.TempData.Keep();

            if (this.Permanent)
            {
                bool endResponse = false;
                context.HttpContext.Response.RedirectPermanent(url, endResponse);
            }
            else
            {
                bool flag2 = false;
                context.HttpContext.Response.Redirect(url, flag2);
            }
        }
    }
}
