window.consoleFix = function () {

    var pub = {};

    pub.log = function (s) {
        try {
            console.log(s)
        }
        catch (e) {
            // no console 
        }
    };

    return pub;

} ();