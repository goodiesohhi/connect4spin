var createError = require('http-errors');
var express = require('express');
var path = require('path');
const flash =require('connect-flash')
const bodyparser = require('body-parser');
const morgan = require('morgan');

var cookieParser = require('cookie-parser');
var events = require('events');
var logger = require('morgan');
var http = require('http');
var secure = require('express-force-https');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const fs = require('fs');
const app = require('express')();
const db = require('./shared/models');
var hbs=require('express-handlebars');
const x=0;
app.lib = {
  io: null,
  games:null,
  rooms:{},


 };
 app.testing=false;

 var addRoom=function(r){
app.lib.rooms[r.id]=r;
return app.lib.rooms[r.id];

 }

const server = require('http').Server(app);
app.express=express;
app.use(flash());
app.use(secure)
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost/');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost/socket.io/');
    next();
});

// view engine setup
const PORT=process.env.PORT || 80

app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", hbs({
    helpers: {

        inGame: function (id) {
          if(id!="") {
          return true
          } else {
            return false
          }
        },

        rooms: function () {
          return app.lib.rooms;
        },



    },



  defaultLayout: "main" }));



app.set("view engine", "handlebars");
var handlebars = hbs.create({});

require('./passport')(app);




app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes')(app));
app.post('/send', (req, res) => {
  const click = {clickTime: new Date()};




});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.lib.io=0

app.lib.handlebars=handlebars

//Xtq2663BdpFeugE


// WARNING: app.listen(80) will NOT work here!

setInterval(function(){

//tai.app.lib.io.emit('roomList', { state:JSON.stringify()});

  for(var key in app.lib.rooms) {

  var value = app.lib.rooms[key];
  if(!runOnce) {
    runOnce=true;

  //console.log(  getValidMoves(test))



  }

  if(Object.keys(value.players).length==0) {
 delete app.lib.rooms[value.id];


  }
if(value.gamename=="taikyoku") {
if(!app.testing) {
  if(value.players["p2"]==null) {

    if(value.started)
    {
      value.started=false
      value.gamestate =  app.lib.games["tai"].makeroom(value.id);
        app.lib.io.to(value.id).emit('reload', {});
    }

  }
}

  if(value.gamestate.turnSwitch>0) {
    value.gamestate.turnSwitch-=1;
    if(value.gamestate.turnSwitch<=0) {
      value.gamestate.turnSwitch=-50;

      if(value.gamestate.turnOwner=="p1") {
        value.gamestate.turnOwner="p2"
      } else {

        value.gamestate.turnOwner="p1"
      }
      if(app.testing) {

          value.gamestate.turnOwner="p1"
      }

      p1R= app.lib.games["tai"].getRoyals("p1" ,value.gamestate.board)
      p2R= app.lib.games["tai"].getRoyals("p2" ,value.gamestate.board)
      if(p1R==0) {
        value.winner="p2"
      }
      if(p2R==0) {
        value.winner="p1"
      }

      if(value.winner==null) {
    value.gamestate.turn+=1;
  } else {

    app.lib.io.to(value.id).emit('hasWon', { winner: value.winner});
    /*app.lib.io.in(value.id).clients(function(error, clients){
         if (error) throw error;
         for(var i=0; i <clients.length; i++){
            app.lib.io.sockets.connected[clients[i]].disconnect(true)
        }
      })
      delete app.lib.rooms[value.id];
      */

       app.lib.rooms[value.id].gamestate=app.lib.games["tai"].makeroom(value.id);
         app.lib.rooms[value.id].started=false;


  }
    }
  }
}


    //tai.app.lib.io.to(value.id).emit('update', { state:value.gamestate
    //console.log(value.gamestate.board)



    app.lib.io.to(value.id).emit('update', { state:JSON.stringify(value)
    });
}



}, 200);




mongoose=require('./shared/middleware/mongoose')()
.then(() => {
  app.lib.io = require('socket.io')(server);
  // mongo is connected, so now we can start the express server.
  server.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));





    app.lib.io.on('connection', (socket) => {
      socket.on('startGame', (data) => {

    if(app.testing) {
      app.lib.rooms[data.id].started=true;

    } else {
         if(socket.username==app.lib.rooms[data.id].players["p1"].name) {

        if(app.lib.rooms[data.id].players["p1"]!=null&&app.lib.rooms[data.id].players["p2"]!=null) {

          app.lib.rooms[data.id].started=true;
        }
      }
    }
  });

      socket.on('disconnectGame',function(data) {
          room=""
          var doc = db.User.findOne({username: socket.username}, function(err,obj) {
            room=obj.roomlock;
            obj.roomlock="";
            if(app.lib.rooms[room]!=null){
              if(app.lib.rooms[room].players[data.p]!=null) {

              delete app.lib.rooms[room].players[data.p];
              socket.leave(room)
            }

            }

            obj.save();

             socket.emit('reload', {});
          })



        });
        socket.on('connectZ', function (username) {
            if(username.username!="") {
          socket.username=username.username

         var doc = db.User.findOne({username: socket.username}, function(err,obj) {


            if(obj.roomlock!="") {

              if(app.lib.rooms[obj.roomlock]!=null) {
              socket.join(obj.roomlock)
            } else {

              obj.roomlock="";
              obj.save();
            }
            }

           });

          console.log("Connected "+socket.username)
        }

         })
      socket.join('public')

        socket.on('createRoom', (j) => {
          console.log("wanna create room")
          var lock



        tRoom=  addRoom( app.lib.roomstuff.createRoom(j.roomName,j.game));
        tRoom.players["p1"]= {
        name: socket.username,

        }
        tRoom.playerNames["p1"]= {
          name: socket.username,

          }






  var doc = db.User.findOne({username: socket.username}, function(err,obj) {


     obj.roomlock=tRoom.id;

     socket.join(tRoom.id)
     socket.emit('reload', {});
      obj.save()

    });


  //const update = { roomlock: tRoom.id };

  //doc.save();




    })



    socket.on('joinRoom', (j) => {



      tRoom=app.lib.rooms[j.roomName];
      if(tRoom!=null) {
        if(tRoom.players["p2"]==null) {
            tRoom.players["p2"]={
            name: socket.username,

            }
            tRoom.playerNames["p2"]={
            name: socket.username,

            }
            var doc = db.User.findOne({username: socket.username}, function(err,obj) {


               obj.roomlock=tRoom.id;

               socket.join(j.roomName)
               socket.emit('reload', {});
               obj.save()

              });


        } else {
            tRoom.spectators["sp"+Object.keys(tRoom.spectators).length]=socket.username
              socket.join(j.roomName)
        }
      } else {
        console.log("Invalid Room")
      }



})
  socket.on('chatMessage', (msg) => {

    app.lib.io.to('public').emit('chatMessage', { username:msg.username,
message:msg.message


   });


  });
});


var taikyoku=require('./games/taikyoku.js')(app);
var games={
tai:taikyoku



}

app.lib.games=games;

var roomstuff=require('./roomstuff')(app)
app.lib.roomstuff=roomstuff;


})
.catch(err => {
  // an error occurred connecting to mongo!
  // log the error and exit
  console.error('Unable to connect to mongo.')
  console.error(err);
});


module.exports= app;
