window.events = (function (jQuery, kendo, console) {
    var pub = {};

    // public
    pub.root;

    pub.init = function () {

        $(document).delegate(".k-button", "click", function (e) {
            var that = $(this),
                eventData = that.data("event");
            _eventHandlers[eventData](e);
        });

        $(document).delegate("input", "keydown", function (e) {
            if (e.keyCode === 13) handleEvent($(this), "event", e);
            else if (e.keyCode === 27) handleEvent($(this), "event-cancel", e);
        });


        function handleEvent(that, handler, e) {
            eventData = that.data(handler);
            _eventHandlers[eventData](e);
        }
    }

    // private
    _eventHandlers = {
        "addItem": function (event) {
            if ($.trim($("#new-item").val()) != "") {

                app.dataSource.add({ Name: $("#new-item").val() });

                app.dataSource.sync(function () { alert('sync') });

                $("#new-item").val("");

                // why do i need a separate read here?
                app.dataSource.read();
            }
        },
        "edit": function (event) {
            console.log("edit");

            var item = $(event.target).parents(".item");
            var id = item.data("id");

            item.find("h3").hide();
            item.find("input").show();

            item.find(".edit").hide();
            item.find(".delete").hide();
            item.find(".cancel").show();
            item.find(".save").show();
        },
        "delete": function (event) {
            console.log("delete");

            var item = $(event.target).parents(".item");
            var itemToDestroy = app.dataSource.get(item.data("id"));

            item.find('h3').addClass('strikethrough')

            console.log("item: " + item.data("id"));

            app.dataSource.remove(itemToDestroy);

            if (app.mode === 'single') app.dataSource.sync();

            item.find(".edit").hide();
        },
        "saveEdit": function (event) {
            console.log("Save Edit");

            // grab the model object and modify it
            var item = $(event.target).parents(".item");
            var itemToEdit = app.dataSource.get(item.data("id"));

            itemToEdit.set("Name", item.find("input").val());

            // sync the data source
            if (app.mode === 'single')
                app.dataSource.sync();

            item.find("h3").html($(event.target).val());
            item.find("h3").show();
            item.find("input").hide();

            item.find(".delete").show();
            item.find(".edit").show();
            item.find(".cancel").hide();
            item.find(".save").hide();
        },
        "cancelEdit": function (event) {
            console.log("cancel edit");

            var item = $(event.target).parents(".item");

            item.find(".delete").show();
            item.find(".edit").show();
            item.find(".cancel").hide();
            item.find(".save").hide();

            h3 = item.find("h3").show();
            item.find("input").val(h3.text()).hide();
        },
        "saveAll": function (event) {
            console.log("save all");

            app.dataSource.sync();
        },
        "singleUpdateMode": function (event) {
            window.location = app.root("Home");
        },
        "batchUpdateMode": function (event) {
            window.location = app.root("Home/Batch");
        }
    }

    return pub;

})(jQuery, kendo, consoleFix);
