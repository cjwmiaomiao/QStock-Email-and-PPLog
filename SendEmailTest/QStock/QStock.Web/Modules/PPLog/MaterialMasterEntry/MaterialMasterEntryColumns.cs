
namespace QStock.PPLog.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PPLog.MaterialMasterEntry")]
    [BasedOnRow(typeof(Entities.MaterialMasterEntryRow), CheckNames = true)]
    public class MaterialMasterEntryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Pdcl { get; set; }
        public String ProductNumber { get; set; }
        public String ProfitCenter { get; set; }
    }
}