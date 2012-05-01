window.ds = function ($, kendo) {

    var pub = {};

    pub.init = function (model, root) {

        pub.dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: root("Home/Read")
                },
                create: {
                    url: root("Home/Create"),
                    type: "POST"
                },
                destroy: {
                    url: root("Home/Delete"),
                    type: "POST"
                },
                update: {
                    url: root("Home/Update"),
                    type: "POST"
                }
            },
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