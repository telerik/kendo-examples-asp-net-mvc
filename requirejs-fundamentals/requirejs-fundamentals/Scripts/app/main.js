require.config({
    paths: {
        // specify a path to jquery, the second declaration is the local fallback
        jquery: [ "//ajax.googleapis.com/ajax/libs/jquery/1.9.2/jquery.min",
                   "../Scripts/jquery-1.9.1.min" ],
        kendo: [ "//cdn.kendostatic.com/2013.1.319/js/kendo.web.min",
                 "../kendo/2013.1.319/kendo.web.min" ]
    },
    // inform requirejs that kendo ui depends on jquery
    shim: {
        "kendo": {
            deps: ["jquery"]
        }
    }
});

require([
   'app'
], function(jquery, kendo, app) {

    // this loads jquery and your app file
   
});