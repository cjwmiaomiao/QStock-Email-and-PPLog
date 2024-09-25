
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.MaterialMasterEntry")]
    [BasedOnRow(typeof(Entities.MaterialMasterEntryRow), CheckNames = true)]
    public class MaterialMasterEntryForm
    {
        public String Pdcl { get; set; }
        public String ProductNumber { get; set; }
        public String ProfitCenter { get; set; }
    }
}