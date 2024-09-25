
namespace QStock.PPLog.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PPLog/ProductListEntry"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductListEntryRow))]
    public class ProductListEntryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PPLog/ProductListEntry/ProductListEntryIndex.cshtml");
        }
    }
}