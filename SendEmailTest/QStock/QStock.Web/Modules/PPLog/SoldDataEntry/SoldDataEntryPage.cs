
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/SoldDataEntry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SoldDataEntryRow))]
    public class SoldDataEntryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/SoldDataEntry/SoldDataEntryIndex.cshtml");
        }
    }
}