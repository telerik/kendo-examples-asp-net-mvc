window.app = (function ($, kendo, console, tl) {
    var pub = {};

    pub.root;
    pub.dataSource;
    pub.template;
    pub.mode = "single";

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
                    },
                    update: {
                        url: pub.root("Home/Update"),
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
        });

        $(document).bind("LOG_ENTRY_TEMPLATE_LOADED", function (e, data) {

            // attach event listeners for all ajax requests
            $("#log").ajaxSend(function (event, xhr, options) {
                logEntry(options.url, "client", options.data, options.type, this);
            });

            $("#log").ajaxComplete(function (event, xhr, options) {
                logEntry(options.url, "server", xhr.responseText, options.type, this);
            });

            function logEntry(url, sender, data, method, el) {
                var logEntry = kendo.template($("#logEntryTemplate").html());

                $(el).append(logEntry({
                    url: url,
                    sender: sender,
                    data: data,
                    method: method
                }));
            }
        });

        tl.loadExtTemplate(pub.root("Content/Template/Todo.htm"), "TODO_ITEM_TEMPLATE_LOADED");
        tl.loadExtTemplate(pub.root("Content/Template/LogEntry.htm"), "LOG_ENTRY_TEMPLATE_LOADED");
    };

    return pub;

})(jQuery, kendo, console, templateLoader);
        