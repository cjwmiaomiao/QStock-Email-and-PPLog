
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/GrDataEntry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GrDataEntryRow))]
    public class GrDataEntryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/GrDataEntry/GrDataEntryIndex.cshtml");
        }
    }
}