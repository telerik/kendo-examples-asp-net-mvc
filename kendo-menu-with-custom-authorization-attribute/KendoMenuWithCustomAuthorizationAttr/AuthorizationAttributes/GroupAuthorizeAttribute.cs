using System;
using System.Web;
using System.Web.Mvc;

namespace KendoMenuWithCustomAuthorizationAttr.AuthorizationAttributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = false)]
    public class GroupAuthorizeAttribute : AuthorizeAttribute
    {
        public GroupAuthorizeAttribute()
            : base()
        {
        }

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext == null)
            {
                throw new ArgumentNullException("filterContext");
            }

            if (!AuthorizeMe(filterContext.HttpContext))
            {
                filterContext.Result = new CustomUnauthorizedActionResult("/Home/NotAuthorized");
            }
        }

        private bool AuthorizeMe(HttpContextBase httpContext)
        {
            if (this.Roles != null && this.Roles != String.Empty)
            {
                foreach (string s in this.Roles.Split(','))
                {
                    try
                    {
                        if (httpContext.User.IsInRole(s))
                            return true;
                        else
                            return false;
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                }

                return false;
            }

            return true; //ALLOW THE USER TO BYPASS
        }
    }
}