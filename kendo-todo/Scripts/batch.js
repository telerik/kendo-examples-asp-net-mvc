window.app = (function ($, kendo, console, tl) {
    var pub = {};

    pub.root;
    pub.dataSource;
    pub.template;
    pub.mode = "batch";

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
                        url: pub.root("Home/CreateBatch"),
                        type: "POST"
                    },
                    destroy: {
                        url: pub.root("Home/DeleteBatch"),
                        type: "POST",
                        traditional: true
                    },
                    update: {
                        url: pub.root("Home/UpdateBatch"),
                        type: "POST",
                        traditional: true
                    }
                },
                batch: true,
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
                    data: unescape(data),
                    method: method
                }));
            }
        });

        tl.loadExtTemplate(pub.root("Content/Template/Todo.htm"), "TODO_ITEM_TEMPLATE_LOADED");
        tl.loadExtTemplate(pub.root("Content/Template/LogEntry.htm"), "LOG_ENTRY_TEMPLATE_LOADED");
    };

    return pub;

})(jQuery, kendo, console, templateLoader);
        