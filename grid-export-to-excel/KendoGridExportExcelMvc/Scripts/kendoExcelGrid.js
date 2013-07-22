(function($) {
    var kendo = window.kendo;

    var ExcelGrid = kendo.ui.Grid.extend({
        init: function (element, options) {
            var that = this;
            var exportOption = options["export"];

            if (exportOption) {
                // If the exportCssClass is not defined, then set a default image.
                exportOption.cssClass = exportOption.cssClass || "k-i-expand";

                // Add the export toolbar button.
                options.toolbar = $.merge([
                    {
                        name: "export",
                        template: kendo.format("<a class='k-button k-button-icontext k-grid-export' title='Export to Excel'><div class='{0} k-icon'></div>Export</a>",
                            exportOption.cssClass)
                    }
                ], options.toolbar || []);
            }

            // Initialize the grid.
            kendo.ui.Grid.fn.init.call(that, element, options);

            // Add an event handler for the Export button.
            $(element).on("click", ".k-grid-export", { sender: that }, function (e) {
                e.data.sender.exportToExcel();
            });
        },

        options: {
            name: "ExcelGrid"
        },

        exportToExcel: function () {
            var that = this;

            var exportOption = that.options["export"];

            // Define the data to be sent to the server to create the spreadsheet.
            data = {
                model: JSON.stringify(that.columns),
                data: JSON.stringify(that.dataSource.data().toJSON()),
                title: exportOption.title
            };

            // Create the spreadsheet.
            $.post(exportOption.createUrl, data, function () {
                // Download the spreadsheet.
                window.location.replace(kendo.format("{0}?title={1}", 
                    exportOption.downloadUrl, 
                    exportOption.title));
            });
        }
    });

    kendo.ui.plugin(ExcelGrid);
})(jQuery);