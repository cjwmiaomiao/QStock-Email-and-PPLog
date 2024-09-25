
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.InfoRecordEntry")]
    [BasedOnRow(typeof(Entities.InfoRecordEntryRow), CheckNames = true)]
    public class InfoRecordEntryForm
    {
        public String ProductNumber { get; set; }
        public String Vendor { get; set; }
    }
}