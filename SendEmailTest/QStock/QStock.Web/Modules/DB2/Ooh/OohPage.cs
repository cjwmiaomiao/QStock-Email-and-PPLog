
namespace QStock.DB2.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DB2/Ooh"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OohRow))]
    public class OohController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DB2/Ooh/OohIndex.cshtml");
        }
    }
}