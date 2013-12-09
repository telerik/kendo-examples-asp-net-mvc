using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace JsonProxy.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> Proxy(string url)
        {
            var query = HttpUtility.ParseQueryString(Request.Url.Query);

            query.Remove("url");

            var uri = new UriBuilder(url);

            uri.Query = query.ToString();

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("user-agent", Request.UserAgent);

                var response = await client.GetAsync(uri.Uri);

                Response.StatusCode = (int)response.StatusCode;

                return Content(await response.Content.ReadAsStringAsync());
            }
        }
    }
}
