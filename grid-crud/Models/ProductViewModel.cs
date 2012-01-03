namespace Kendo.Mvc.Grid.CRUD.Models
{
    /// <summary>
    /// This class is used for JSON serialization and deserialization. It is mapped to and from the Product entity class
    /// </summary>
    public class ProductViewModel
    {
        public int? ProductID { get; set; }
        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
        public short? UnitsInStock { get; set; }
        public bool Discontinued { get; set; }
    }
}