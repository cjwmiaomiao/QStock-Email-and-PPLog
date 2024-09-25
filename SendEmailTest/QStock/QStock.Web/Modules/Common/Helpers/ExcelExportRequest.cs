
namespace QStock
{
    using Serenity.Services;
    using System;
    using System.Collections.Generic;

    public class ExcelExportRequest : ServiceRequest
    {
        public String YearMonth { get; set; }
        public List<String> Vendor { get; set; } 
        public List<String> PDCL { get; set; }
        public List<String> Type { get; set; }

    }

    public class ExcelExportResponse : ServiceResponse
    {
        public int Inserted { get; set; }
        public int Updated { get; set; }
        public bool SendThisMonth { get; set; }
        public int SpendTime { get; set; }
        public List<string> ErrorList { get; set; }
    }
}