
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/MaterialMasterEntry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaterialMasterEntryRow))]
    public class MaterialMasterEntryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/MaterialMasterEntry/MaterialMasterEntryIndex.cshtml");
        }
    }
}