



(function(window){

    var database={
    "k":{
    name:"King",
    movementData: {
    type:"step",
    left:2,
    right:2,
    up:2,
    down:2,
    upleft:2,
    upright:2,
    downleft:2,
    downright:2

  },
  promote:null



    },

    "p":{
    name:"Pawn",
    movementData: {
    type:"step",
    left:0,
    right:0,
    up:1,
    down:0,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0

  },
    promote:"g"



    },

    "ea":{
    name:"Earth General",
    movementData: {
    type:"step",
    left:0,
    right:0,
    up:1,
    down:1,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0

  },
    promote:"we"



    },

    "gb":{
    name:"Go Between",
    movementData: {
    type:"step",
    left:0,
    right:0,
    up:1,
    down:1,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0

  },
    promote:"de"



    },

    "sg":{
    name:"Stone General",
    movementData: {
    type:"step",
    left:0,
    right:0,
    up:0,
    down:0,
    upleft:1,
    upright:1,
    downleft:0,
    downright:0

  },
    promote:"we"



    },

    "r":{
    name:"Rook",
    movementData: {
    type:"step",
    left:1000,
    right:1000,
    up:1000,
    down:1000,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0

  },
    promote:"dk"



    },


        "b":{
        name:"Bishop",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:0,
        down:0,
        upleft:1000,
        upright:1000,
        downleft:1000,
        downright:1000

      },
        promote:"dh"



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
