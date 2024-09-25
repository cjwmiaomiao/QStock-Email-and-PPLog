
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/StockEntry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StockEntryRow))]
    public class StockEntryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/StockEntry/StockEntryIndex.cshtml");
        }
    }
}