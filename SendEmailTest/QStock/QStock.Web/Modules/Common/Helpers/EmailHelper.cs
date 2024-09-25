using Serenity;
using Serenity.Data;
using QStock.Common.Entities;
using QStock.Common.Services;
using System.IO;
using System.Net.Mail;
using System.Web.Hosting;

namespace QStock.Common
{
    public static class EmailHelper
    {
        public static void Send(string subject, string body, string address, string displayName = "")
        {
            var message = new MailMessage();
            message.To.Add(new MailAddress(address, ""));
            message.Subject = subject;
            message.Body = body;
            message.IsBodyHtml = true;
            Send(message);
        }

        public static void Send(MailMessage message)
        {
            var settings = Config.Get<MailingServiceSettings>();
            var client = new SmtpClient().SetupPickupPath();

            //if (settings.AutoUse)
            //{
            //    using (var connection = SqlConnections.NewFor<MailRow>())
            //        new MailingService().Enqueue(connection, message);
            //}
            //else
                //client.Send(message);
        }

        public static void SendHasAttachment(MailMessageModel message)
        {
            var settings = Config.Get<MailingServiceSettings>();
            var client = new SmtpClient().SetupPickupPath();

            if (settings.AutoUse)
            {
                using (var connection = SqlConnections.NewFor<MailRow>())
                {
                    new MailingService().EnqueueHasAttachment(connection, message);
                }

            }
            else {
                client.Send(message);
            }
         
        }

        public static SmtpClient SetupPickupPath(this SmtpClient client)
        {
            if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                string.IsNullOrEmpty(client.PickupDirectoryLocation))
            {
                var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                pickupPath = Path.Combine(pickupPath, "Mail");
                Directory.CreateDirectory(pickupPath);
                client.PickupDirectoryLocation = pickupPath;
            }

            return client;
        }
    }
}