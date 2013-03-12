(function($) {
    var kendo = window.kendo;

    var ExcelGrid = kendo.ui.Grid.extend({
        init: function (element, options) {
            var that = this;

            if (options.export) {
                // If the exportCssClass is not defined, then set a default image.
                options.export.cssClass = options.export.cssClass || "k-i-expand";

                // Add the export toolbar button.
                options.toolbar = $.merge([
                    {
                        name: "export",
                        template: kendo.format("<a class='k-button k-button-icontext k-grid-export' title='Export to Excel'><div class='{0} k-icon'></div>Export</a>", options.export.cssClass)
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

            // Define the data to be sent to the server to create the spreadsheet.
            data = {
                model: JSON.stringify(that.columns),
                data: JSON.stringify(that.dataSource.data().toJSON()),
                title: that.options.export.title
            };

            // Create the spreadsheet.
            $.post(that.options.export.createUrl, data, function () {
                // Download the spreadsheet.
                window.location.replace(kendo.format("{0}?title={1}", 
                    that.options.export.downloadUrl, 
                    that.options.export.title));
            });
        }
    });

    kendo.ui.plugin(ExcelGrid);
})(jQuery);