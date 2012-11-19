namespace Kendo.Mvc.Grid.CRUD.Models
{
    /// <summay>
    /// This class is used fo JSON seialization and deseialization. It is mapped to and fom the Poduct entity class
    /// </summay>
    public class ProductViewModel
    {
        public int? ProductID { get; set; }
        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
        public short? UnitsInStock { get; set; }
        public bool Discontinued { get; set; }
    }
}