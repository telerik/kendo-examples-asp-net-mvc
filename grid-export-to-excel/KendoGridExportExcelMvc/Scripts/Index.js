var ExportExcel = ExportExcel || {};

ExportExcel.Index = function () {
    var _grid = null;

    var init = function () {
        _grid = $("#grid").kendoExcelGrid({
            dataSource: {
                data: createRandomData(500),
                pageSize: 10,
                schema: {
                    model: {
                        fields: {
                            FirstName: { type: "string" },
                            LastName: { type: "string" },
                            City: { type: "string" },
                            Title: { type: "string" },
                            BirthDate: { type: "date" },
                            Age: { type: "number" }
                        }
                    }
                }
            },
            columns: [
                {
                    field: "FirstName",
                    title: "First Name",
                    width: 100
                },
                {
                    field: "LastName",
                    title: "Last Name",
                    width: 100
                },
                {
                    field: "City",
                    width: 100
                },
                {
                    field: "Title"
                },
                {
                    field: "BirthDate",
                    title: "Birth Date",
                    template: '#= kendo.toString(BirthDate,"MM/dd/yyyy") #'
                },
                {
                    field: "Age",
                    width: 50
                }
            ],
            sortable: true,
            pageable: {
                refresh: true,
                pageSizes: true
            },
            "export": {
                cssClass: "k-grid-export-image",
                title: "people",
                createUrl: "/Home/ExportToExcel",
                downloadUrl: "/Home/GetExcelFile"
            }
        }).data("kendoExcelGrid");
    };

    return {
        init: init
    };
}();