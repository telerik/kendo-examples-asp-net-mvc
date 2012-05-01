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

            // set a variable to the data source created in external js file
            ds.init(Item, pub.root);
            pub.dataSource = ds.dataSource;

            // initialize events
            events.init();

            // finally read from the data source
            pub.dataSource.read();
        });

        $(document).bind("LOG_ENTRY_TEMPLATE_LOADED", function (e, data) {

            // attach event listeners for all ajax requests
            $("#log").ajaxSend(function (event, xhr, options) {
                xhr.id = guidGenerator();

                var logEntry = kendo.template($("#logEntryTemplate").html());

                $(this).append(logEntry({
                    requestId: xhr.id,
                    requestUrl: options.url,
                    requestData: options.data ? unescape(options.data) : "",
                    requestMethod: options.type
                }));

                // turn all request/response captures into tab pairs
                $(".tabstrip").kendoTabStrip();
            });

            $("#log").ajaxComplete(function (event, xhr, options) {
                if (xhr.id) {
                    $("#" + xhr.id).html(xhr.responseText);
                }
            });

            function guidGenerator() {
                var S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        });

        tl.loadExtTemplate(pub.root("Content/Template/Todo.htm"), "TODO_ITEM_TEMPLATE_LOADED");
        tl.loadExtTemplate(pub.root("Content/Template/LogEntry.htm"), "LOG_ENTRY_TEMPLATE_LOADED");
    };

    return pub;

})(jQuery, kendo, consoleFix, templateLoader);
        