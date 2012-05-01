window.ds = function ($, kendo) {
    var pub = {};

    pub.init = function (model, root) {
        pub.dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: root("Home/Read")
                },
                parameterMap: function (data, type) {
                    if (type != "read") {
                        var items = {};

                        $.each(data.models, function (index, item) {
                            for (var key in item) {
                                items["[" + index + "]" + "." + key] = item[key];
                            }
                        });

                        return items;
                    }
                },
                create: {
                    url: root("Home/CreateBatch"),
                    type: "POST"
                },
                destroy: {
                    url: root("Home/DeleteBatch"),
                    type: "POST",
                    traditional: true
                },
                update: {
                    url: root("Home/UpdateBatch"),
                    type: "POST",
                    traditional: true
                }
            },
            batch: true,
            schema: {
                model: model
            },
            change: function () {
                $("#items").html(kendo.render(template, this.view()));
            }
        });
    }

    return pub;

} (jQuery, kendo);