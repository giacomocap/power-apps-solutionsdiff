namespace DiffToolDynamics.Models
{
    public class Solution
    {
        public string UniqueName { get; set; }
        public string Version { get; set; }
        public string VersionNumber { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public bool IsManaged { get; set; }
    }

    public class SolutionsForConnectionString
    {
        public IEnumerable<Solution> Solutions { get; set; }
        public string ConnectionStringId { get; set; }
        public string Url { get; set; }
    }

    public class SolutionDetailsForConnectionString
    {
        public IEnumerable<SolutionDetail> SolutionDetails { get; set; }
        public string ConnectionStringId { get; set; }
        public string Url { get; set; }
    }

    public class ElementDetailsForSolution
    {
        public IEnumerable<SolutionDetail> SolutionDetails { get; set; }
        public string SolutionName { get; set; }
    }


    public class SolutionDetail
    {
        public SolutionDetail()
        {

        }

        public SolutionDetail(SolutionDetailExpand model)
        {
            LogicalName = model.LogicalName;
            Version = model.Version;
            ModifiedOn = model.ModifiedOn;
            DisplayName = model.DisplayName;
            EntityReference = model.EntityReference;
        }

        public string LogicalName { get; set; }
        public string Version { get; set; }
        public DateTime ModifiedOn { get; set; }
        public string DisplayName { get; set; }
        public string EntityReference { get; set; }
    }

    public class SolutionDetailExpand
    {
        public string LogicalName { get; set; }
        public string Version { get; set; }
        public DateTime ModifiedOn { get; set; }
        public string DisplayName { get; set; }
        public string EntityReference { get; set; }
        public string SolName { get; set; }
    }

    public class SolutionDetailsForConnectionStringRequest
    {
        public IEnumerable<ConnectionStringRequest> ConnectionStrings { get; set; }
        public string Name { get; set; }
    }

    public class SolutionsDetailsRequest
    {
        public ConnectionStringRequest ConnectionString { get; set; }
        public IEnumerable<string> Names { get; set; }
    }
}
