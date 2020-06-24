namespace SalesApp.Models
{
    public class Product
    {
        public string Id { get; set; }
        public string ProductName { get; set; }
        public string SupplierdId { get; set; } 
        public decimal UnitPrice { get; set; }
        public string Package { get; set; }
        public string IsDiscontinued { get; set; }
    }
}