
namespace QStock.DB2.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DB2/EmailLog"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmailLogRow))]
    public class EmailLogController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DB2/EmailLog/EmailLogIndex.cshtml");
        }
    }
}