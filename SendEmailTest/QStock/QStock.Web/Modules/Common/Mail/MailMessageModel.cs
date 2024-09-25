
namespace QStock.Common
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using System.Net.Mail;

    public class MailMessageModel: MailMessage
    {
        public Byte[] AttachmentData { get; set; }
        public String ModuleName { get; set; }
    }
}