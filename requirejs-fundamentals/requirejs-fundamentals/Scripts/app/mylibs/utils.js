define([], function () {
    return {
        // declare the function to change the background color
        setBackground: function (color) {
            $(document.body).css("background-color", color);
        }
    };
});


