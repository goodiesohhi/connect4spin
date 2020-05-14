



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

    "cp":{
    name:"Prince",
    movementData: {
    type:"step",
    left:1,
    right:1,
    up:1,
    down:1,
    upleft:1,
    upright:1,
    downleft:1,
    downright:1

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
    left: 40,
    right: 40,
    up: 40,
    down: 40,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0
  },
    promote:"dk"
    },

    "so":{
    name:"Soldier",
    movementData: {
    type:"step",
    left: 40,
    right: 40,
    up: 40,
    down: 40,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0
  },
    promote:"cv"
    },

    "rh":{
    name:"Running Chariot",
    movementData: {
    type:"step",
    left: 40,
    right: 40,
    up: 40,
    down: 40,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0
  },
    promote:"bh"
    },
    "sq":{
    name:"Square Mover",
    movementData: {
    type:"step",
    left: 40,
    right: 40,
    up: 40,
    down: 40,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0
  },
    promote:"sh"
    },
    "gi":{
    name:"Gliding Swallow",
    movementData: {
    type:"step",
    left: 40,
    right: 40,
    up: 40,
    down: 40,
    upleft:0,
    upright:0,
    downleft:0,
    downright:0
  },
    promote:null
    },


        "b":{
        name:"Bishop",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:0,
        down:0,
        upleft: 40,
        upright: 40,
        downleft: 40,
        downright: 40

      },
        promote:"dh"



        },

        "q":{
        name:"Queen",
        movementData: {
        type:"step",
        left: 40,
        right: 40,
        up: 40,
        down: 40,
        upleft: 40,
        upright: 40,
        downleft: 40,
        downright: 40

      },
        promote:"gg"



        },

        "i":{
        name:"Iron General",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:1,
        down:0,
        upleft:1,
        upright:1,
        downleft:0,
        downright:0

      },
        promote:"we"



        },

        "d":{
        name:"Dog",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:1,
        down:0,
        upleft:1,
        upright:1,
        downleft:0,
        downright:0

      },
        promote:"mg"



        },

        "or":{
        name:"Old Rat",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:1,
        down:0,
        upleft:0,
        upright:0,
        downleft:1,
        downright:1

      },
        promote:"bp"



        },

        "ow":{
        name:"Swooping Owl",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:1,
        down:0,
        upleft:0,
        upright:0,
        downleft:1,
        downright:1

      },
        promote:"ce"



        },

        "st":{
        name:"Strutting Crow",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:1,
        down:0,
        upleft:0,
        upright:0,
        downleft:1,
        downright:1

      },
        promote:"fa"



        },

        "si":{
        name:"Side Dragon",
        movementData: {
        type:"step",
        left: 40,
        right: 40,
        up: 40,
        down:0,
        upleft:0,
        upright:0,
        downleft:0,
        downright:0

      },
      //dr= running dragon
        promote:"dr"



        },

        "mw":{
        name:"Mountain Witch",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up:0,
        down: 40,
        upleft:0,
        upright:0,
        downleft: 40,
        downright: 40

      },

        promote:null



        },
        "wh":{
        name:"White Horse",
        movementData: {
        type:"step",
        left:0,
        right:0,
        up: 40,
        down: 40,
        upleft: 40,
        upright: 40,
        downleft:0,
        downright:0

      },
      //dr= running dragon
        promote:"gh"



        },

        "si":{
        name:"Side Dragon",
        movementData: {
        type:"step",
        left: 40,
        right: 40,
        up: 40,
        down:0,
        upleft:1,
        upright:1,
        downleft:0,
        downright:0

      },
      //dr= running dragon
        promote:"dr"



        },

        "n":{
        name:"Knight",
        movementData: {
        type:"jump",
        jumps:{},
        jumps: {
      0:{
          x:-1,
          y:2,
      },
        1:{
          x:1,
          y:2,

        }
      }


      },

        promote:"sl"



        },


                "fd":{
                name:"Flying Dragon",
                movementData: {
                type:"jump",
                jumps:{},
                jumps: {
              0:{
                  x:-2,
                  y:2,
              },
                1:{
                  x:-2,
                  y:-2,

                },
                2:{
                  x:2,
                  y:2,

                },
                3:{
                  x:2,
                  y:-2,

                },
              }


              },

                promote:"dk"



                },


                //kirin

                "kr":{
                name:"Kirin",
                movementData:{

                  type:"h",

                  fusion: {
                    0:{
                    movementData: {
                    type:"jump",
                    jumps:{},
                    jumps: {
                  0:{
                      x:-2,
                      y:0,
                  },
                    1:{
                      x:2,
                      y:0,
                    },

                  }
                },
              },
              1:{
                movementData: {
                type:"step",
                left:0,
                right:0,
                up:0,
                down:0,
                upleft:1,
                upright:1,
                downleft:1,
                downright:1

              },
            }





                  }



                },



                promote:"go"
                },

                "fp":{
                name:"Free Pup",
                movementData: {
                type:"step",
                left:2,
                right:2,
                up: 40,
                down: 40,
                upleft: 40,
                upright: 40,
                downleft:1,
                downright:1

              },
              //dd= Free Dog
                promote:"dd"



                },
                "cn":{
                name:"Center Standard",
                movementData: {
                type:"step",
                left: 40,
                right: 40,
                up: 40,
                down: 40,
                upleft:3,
                upright:3,
                downleft:3,
                downright:3

              },
              //dd= Free Dog
                promote:"sd"



                },
                "sd":{
                name:"Front Standard",
                movementData: {
                type:"step",
                left: 40,
                right: 40,
                up: 40,
                down: 40,
                upleft:3,
                upright:3,
                downleft:3,
                downright:3

              },
              //dd= Free Dog
                promote:"ge"



                },

                "rs":{
                name:"Rear Standard",
                movementData: {
                type:"step",
                left: 40,
                right: 40,
                up: 40,
                down: 40,
                upleft:2,
                upright:2,
                downleft:2,
                downright:2

              },

                promote:"cn"



                },


                                "ls":{
                                name:"Little Standard",
                                movementData: {
                                type:"step",
                                left: 40,
                                right: 40,
                                up: 40,
                                down: 40,
                                upleft:2,
                                upright:2,
                                downleft:1,
                                downright:1

                              },

                                promote:"rs"



                                },

                                "wt":{
                                name:"White Tiger",
                                movementData: {
                                type:"step",
                                left: 40,
                                right: 40,
                                up: 2,
                                down: 2,
                                upleft:40,
                                upright:0,
                                downleft:0,
                                downright:0

                              },
                               //di: divine tiger
                                promote:"di"



                                },

                                "ri":{
                                name:"Right Dragon",
                                movementData: {
                                type:"step",
                                left: 40,
                                right: 2,
                                up: 0,
                                down: 0,
                                upleft:40,
                                upright:0,
                                downleft:40,
                                downright:0

                              },

                                promote:"bl"



                                },

                                "bl":{
                                name:"Blue Dragon",
                                movementData: {
                                type:"step",
                                left: 2,
                                right: 2,
                                up: 40,
                                down: 40,
                                upleft:0,
                                upright:40,
                                downleft:00,
                                downright:0

                              },
                                //dr=divine dragon
                                promote:"dr"



                                },

                                "le":{
                                name:"Left Dragon",
                                movementData: {
                                type:"step",
                                left: 2,
                                right: 40,
                                up: 0,
                                down: 0,
                                upleft:0,
                                upright:40,
                                downleft:0,
                                downright:40

                              },

                                promote:"vi"



                                },
                                "vi":{
                                name:"Vermillion Sparrow",
                                movementData: {
                                type:"step",
                                left: 1,
                                right: 1,
                                up: 1,
                                down: 1,
                                upleft:40,
                                upright:1,
                                downleft:1,
                                downright:40

                              },

                                promote:"dp"



                                },

                "ge":{
                name:"Great Standard",
                movementData: {
                type:"step",
                left: 40,
                right: 40,
                up: 40,
                down: 40,
                upleft: 40,
                upright: 40,
                downleft:3,
                downright:3

              },
              //dd= Free Dog
                promote:"ge"



                },
                "tk":{
                name:"Teaching King",

                movementData: {

                type:"step",
                initJump:3,
                upto:true,
                left: 40,
                right: 40,
                up: 40,
                down: 40,
                upleft: 40,
                upright: 40,
                downleft:40,
                downright:40

              },
              //dd= Free Dog
                promote:null



                },

                "wf":{
                name:"Side Wolf",
                movementData: {
                type:"step",
                left: 40,
                right: 40,
                up:0,
                down:0,
                upleft:1,
                upright:0,
                downleft:0,
                downright:1

              },

//fw: free wolf
                promote:"fw"



                },

                "ld":{
                name:"Lion Dog",
                movementData:{

                  type:"h",

                  fusion: {
                    0:{
                    movementData: {
                    type:"jump",
                    jumps:{},
                    jumps: {
                  0:{
                      x:3,
                      y:3,
                  },
                    1:{
                      x:-3,
                      y:3,
                    },
                    2:{
                        x:-3,
                        y:-3,
                    },
                      3:{
                        x:3,
                        y:-3,
                      },
                      4:{
                          x:0,
                          y:3,
                      },
                        5:{
                          x:3,
                          y:0,
                        },
                        6:{
                            x:-3,
                            y:0,
                        },
                          7:{
                            x:0,
                            y:-3,
                          },




                  }
                },
              },
              1:{
                movementData: {
                type:"step",
                left: 40,
                right: 40,
                up: 40,
                down: 40,
                upleft: 40,
                upright: 40,
                downleft: 40,
                downright: 40

              },
            }





                  }



                },

                promote:"gp"
                },

                "dg":{
                name:"Roaring Dog",
                movementData:{

                  type:"h",

                  fusion: {
                    0:{
                    movementData: {
                    type:"jump",
                    jumps:{},
                    jumps: {

                      0:{
                          x:0,
                          y:3,
                      },
                        1:{
                          x:3,
                          y:0,
                        },
                        2:{
                            x:-3,
                            y:0,
                        },
                          3:{
                            x:0,
                            y:-3,
                          },




                  }
                },
              },
              1:{
                movementData: {
                type:"step",
                left: 40,
                right: 40,
                up: 40,
                down: 40,
                upleft: 40,
                upright: 40,
                downleft: 3,
                downright: 3

              },
            }





                  }



                },

                promote:"gp"
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
