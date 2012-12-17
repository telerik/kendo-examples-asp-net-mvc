using System.ComponentModel.DataAnnotations;
namespace KendoGridWithCascadingComboBoxes.Models
{
    public class License
    {
        public int LicenseId { get; set; }

        [UIHint("CustomerId")]
        public int CustomerId { get; set; }

        [UIHint("VendorId")]
        public int VendorId { get; set; }

        [UIHint("ProductId")]
        public int ProductId { get; set; }
    }
}