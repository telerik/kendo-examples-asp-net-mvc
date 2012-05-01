window.app = (function ($, kendo, console, tl) {
    var pub = {};

    pub.root;
    pub.dataSource;
    pub.template;

    // public functions
    pub.init = function () {
        $(document).bind("TODO_ITEM_TEMPLATE_LOADED", function (e, data) {
            console.log("Loaded Item Template");

            Item = kendo.data.Model.define({
                id: "ID"
            });

            template = kendo.template($("#template").html());

            pub.dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: pub.root("Home/Read")
                    },
                    create: {
                        url: pub.root("Home/Create"),
                        type: "POST"
                    },
                    destroy: {
                        url: pub.root("Home/Delete"),
                        type: "POST"
                    }
                },
                schema: {
                    model: Item
                },
                change: function () {
                    $("#items").html(kendo.render(template, this.view()));
                }
            });

            // initialize the events which are bound to the button click events
            events.root = pub.root;
            events.init();

            // finally read from the data source
            pub.dataSource.read();

            $(document).trigger("TODO_APP_READY");
        });

        tl.loadExtTemplate(pub.root("Templates/Todo"));
    };

    return pub;

})(jQuery, kendo, console, templateLoader);
        