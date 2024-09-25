
namespace QStock.QStockExcel.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("QStockExcel/SalesEmailMap"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SalesEmailMapRow))]
    public class SalesEmailMapController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/QStockExcel/SalesEmailMap/SalesEmailMapIndex.cshtml");
        }
    }
}