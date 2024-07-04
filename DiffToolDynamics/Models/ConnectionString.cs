namespace DiffToolDynamics.Models
{
    public class XrmConnectionString
    {
        public XrmConnectionString()
        {

        }

        public XrmConnectionString(ConnectionStringRequest req)
        {
            OrganizationUrl = req.Url;
            ClientId = req.Client;
            Secret = req.Secret;
            Id = req.Id;
        }

        public string OrganizationUrl { get; set; }
        public string ClientId { get; set; }
        public string Secret { get; set; }
        public bool Save { get; set; }
        public string IpAddress { get; set; }
        public string Name { get; set; }
        public string Id { get; set; }
    }

    public class ConnectionStringRequest
    {
        public string Url { get; set; }
        public string Client { get; set; }
        public string Secret { get; set; }
        public string Id { get; set; }
    }

    public class Ids
    {
        public IEnumerable<ConnectionStringRequest> ConnectionStrings { get; set; }

    }
}
