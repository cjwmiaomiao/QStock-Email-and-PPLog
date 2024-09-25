
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/Summary"),Route("{action=index}")]
    public class SummaryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/Summary/Summary.cshtml");
        }
    }
}