define([
  "jquery",
  "kendo",
  "mylibs/utils"
], function ($, kendo, utils) {
    

        // this function is private and not available to sliders or utils
        // function to handle the pallete color selection
        var setColor = function (e) {
            // the color object contains all the hex, rgba, and hsl
            // conversions and utilities
            var color = e.sender.color().toBytes();

            // set the color
            utils.setBackground(e.value);
        };

        // select and create the color pallete
        var colors = $("#colors").kendoFlatColorPicker({
            change: setColor,
            value: "#fff"
        }).getKendoFlatColorPicker();

        // just return the entire widget instance
        return colors;
        
});