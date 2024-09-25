namespace QStock.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class PortalLoginRequest : ServiceRequest
    {
        public string Username { get; set; }
        public string Token { get; set; }
    }
}