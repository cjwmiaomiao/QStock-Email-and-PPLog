
namespace QStock.PPLog.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PPLog.InfoRecordEntry")]
    [BasedOnRow(typeof(Entities.InfoRecordEntryRow), CheckNames = true)]
    public class InfoRecordEntryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String ProductNumber { get; set; }
        public String Vendor { get; set; }
    }
}