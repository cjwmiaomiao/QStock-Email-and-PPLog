namespace QStock
{
    using Serenity.Services;
    using System;
    using System.Collections.Generic;

    public class SendEmailRequest : ServiceRequest
    {
        public bool isContinue { get; set; }
    }

    public class SendEmailResponse : ServiceResponse
    {
        public int Inserted { get; set; }
        public int Updated { get; set; }
        public bool SendThisMonth { get; set; }
        public List<string> ErrorList { get; set; }
    }
}