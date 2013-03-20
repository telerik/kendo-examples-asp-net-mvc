using System;
using System.ComponentModel.DataAnnotations;

namespace KendoInputs_Validation.Models
{
    public class ViewModel
    {
        [Required]
        public double Number { get; set; }

        [Required]
        public string ComboBox { get; set; }

        [Required]
        public string DropDownList { get; set; }

        [Required]
        public DateTime DatePicker { get; set; }
    }
}