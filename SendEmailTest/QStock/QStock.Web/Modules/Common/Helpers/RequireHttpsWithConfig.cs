using System.Configuration;
using System.Web.Mvc;

namespace Serenity
{
    public class RequireHttpsWithConfig : RequireHttpsAttribute
    {
        static bool? requireHttps;

        public RequireHttpsWithConfig()
        {
        }

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (requireHttps == false)
                return;

            if (requireHttps == null)
            {
                var setting = ConfigurationManager.AppSettings["RequireHttps"];
                if (setting == null)
                    requireHttps = false;
                else
                {
                    setting = setting.ToLowerInvariant();
                    requireHttps = setting == "true" || setting == "1";
                }
            }

            if (filterContext == null ||
                filterContext.HttpContext.Request.IsSecureConnection)
                return;

            if (requireHttps == true)
                HandleNonHttpsRequest(filterContext);
        }
    }
}