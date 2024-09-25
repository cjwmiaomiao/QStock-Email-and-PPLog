
namespace QStock.QStockExcel.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("QStockExcel/Ooh"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OohRow))]
    public class OohController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/QStockExcel/Ooh/OohIndex.cshtml");
        }
    }
}