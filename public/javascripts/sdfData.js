
(function(window){

    var database={


  0: {
    name:"Square"

  },
  1: {
    name:"Circle"

  },
}


    if (typeof module === "object" && module && typeof module.exports === "object") {

        // Expose jQuery as module.exports in loaders that implement the Node
        // module pattern (including browserify). Do not create the global, since
        // the user will be storing it themselves locally, and globals are frowned
        // upon in the Node module world.
        module.exports = database;
    }
    else {
        // Otherwise expose jQuery to the global object as usual
        window.database = window.$ = database;

        // Register as a named AMD module, since jQuery can be concatenated with other
        // files that may use define, but not via a proper concatenation script that
        // understands anonymous AMD modules. A named AMD is safest and most robust
        // way to register. Lowercase jquery is used because AMD module names are
        // derived from file names, and jQuery is normally delivered in a lowercase
        // file name. Do this after creating the global so that if an AMD module wants
        // to call noConflict to hide this version of jQuery, it will work.
        if (typeof define === "function" && define.amd) {
            define("database", [], function () { return database; });
        }
    }
})(this)
