
namespace QStock.DB2.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DB2.EmailLog")]
    [BasedOnRow(typeof(Entities.EmailLogRow), CheckNames = true)]
    public class EmailLogForm
    {
        public String SalesId { get; set; }
        public String SendStatus { get; set; }
        public String FailReason { get; set; }
        public DateTime SendTime { get; set; }
    }
}