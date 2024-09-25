
namespace QStock.Administration.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [RoutePrefix("Administration/DataAuditLog"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DataAuditLogRow))]
    public class DataAuditLogController : Controller
    {
        public ActionResult Index()
        {

            return View("~/Modules/Administration/DataAuditLog/DataAuditLogIndex.cshtml");
        }
    }
}
