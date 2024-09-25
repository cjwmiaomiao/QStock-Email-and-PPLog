
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/InfoRecordEntry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InfoRecordEntryRow))]
    public class InfoRecordEntryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/InfoRecordEntry/InfoRecordEntryIndex.cshtml");
        }
    }
}