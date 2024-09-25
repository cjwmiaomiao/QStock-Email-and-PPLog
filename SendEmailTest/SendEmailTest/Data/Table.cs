using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SendEmailTest.Data
{
    class Table
    {
        public String Material { get; set; }
        public float QTY { get; set; }
        public String Reason { get; set; }
        public Dictionary<string,IdEmail> Sales { get; set; }
    }
    class IdEmail
    {
        public String Id { get; set; }
        public String Email { get; set; }
    }
}
