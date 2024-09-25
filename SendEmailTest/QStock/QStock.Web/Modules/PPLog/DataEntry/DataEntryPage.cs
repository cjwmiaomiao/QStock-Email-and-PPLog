
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/DataEntry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DataEntryRow))]
    public class DataEntryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/DataEntry/DataEntryIndex.cshtml");
        }
    }
}