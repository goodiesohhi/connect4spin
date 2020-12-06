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
const PORT=process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", hbs({
    helpers: {

        inGame: function (id, g) {
          console.log("g: "+g)
          console.log(id)
          if(id==undefined) {
            return false
          }
          if(id[g]!="") {
          return true
          } else {
            return false
          }
        },

        rooms: function (gameN) {
          rooms=[]
          for (var x in app.lib.rooms) {
            y=app.lib.rooms[x]
            if (y.gamename==gameN) {
              rooms.push(y)
            }
          }

          return rooms;
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









mongoose=require('./shared/middleware/mongoose')()
.then(() => {

  app.lib.io = require('socket.io')(server);
  app.lib.io.set('origins', '*:*');
 
  server.listen(PORT, () => console.log(`Server running on ${PORT}.`));





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
            room=obj.roomlock.get(data.game)
            obj.roomlock.set(data.game,"");
            if(app.lib.rooms[room]!=null){
              if(app.lib.rooms[room].players[data.p]!=null) {

              delete app.lib.rooms[room].players[data.p];
              socket.leave(room)
            }

            }

            obj.save();

             socket.emit('reload', {id:"3"});
          })



        });
        socket.on('connectZ', function (username) {
            if(username.username!="") {
          socket.username=username.username

         var doc = db.User.findOne({username: socket.username}, function(err,obj) {


            if(obj.roomlock!=null) {
              for (let keys of obj.roomlock.keys()){

              if(app.lib.rooms[obj.roomlock.get(keys)]!=null) {

              socket.join(obj.roomlock.get(keys))

            } else {

              obj.roomlock.set(keys,"");

            }
          }

} else {

  obj.roomlock=new Map()
}
obj.save();

           });

          //console.log("Connected "+socket.username)
        }

         })
      socket.join('public')

        socket.on('createRoom', (j) => {

          var lock

          console.log("Hey1! "+app.lib);
        console.log("Hey! "+app.lib.roomstuff);
        tRoom=  addRoom( app.lib.roomstuff.createRoom(j.roomName,j.game));
        tRoom.players["p1"]= {
        name: socket.username,

        }
        tRoom.playerNames["p1"]= {
          name: socket.username,

          }






  var doc = db.User.findOne({username: socket.username}, function(err,obj) {


     obj.roomlock.set(j.game,tRoom.id);
     //console.log("yes "+socket.username)
     //console.log(obj.roomlock.get(j.game))

     socket.join(tRoom.id)
     //console.log("joined"+tRoom.id);
     socket.emit('reload', {id:"1"});
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


               obj.roomlock.set(j.game,tRoom.id);

               socket.join(j.roomName)
               socket.to(tRoom.id).emit('reload', {id:"6"});
               obj.save()

              });


        } else {
          var doc = db.User.findOne({username: socket.username}, function(err,obj) {



            obj.roomlock.set(j.game,tRoom.id);

             socket.join(j.roomName)
             socket.to(tRoom.id).emit('reload', {id:"2"});
             tRoom.spectators[socket.username]=socket.username

               socket.join(j.roomName)
             obj.save()

            });

        }
      } else {
        //console.log("Invalid Room")
      }



})
  socket.on('chatMessage', (msg) => {

    app.lib.io.to('public').emit('chatMessage', { username:msg.username,
message:msg.message


   });


  });
});

console.log("c4 check")
var connect4=require("./games/connect4.js")(app);
console.log("c4 good")






var games={
connect4:connect4,



}


var roomstuff=require('./roomstuff')(app)
app.lib.roomstuff=roomstuff;



app.lib.games=games;


setInterval(function(){

//tai.app.lib.io.emit('roomList', { state:JSON.stringify()});

  for(var key in app.lib.rooms) {

  var value = app.lib.rooms[key];


  if(value.players["p1"]==null) {

console.log(value.players["p1"])
 delete app.lib.rooms[value.id];
 //app.lib.io.to(value.id).emit('reload', {});


  }
if(value.gamename=="connect4") {
  if(!value.startedRun) {
    app.lib.games["connect4"].first(value)
  }
  app.lib.games["connect4"].update(value)
}


}


}, 17);




})
.catch(err => {
  // an error occurred connecting to mongo!
  // log the error and exit
  //console.error('Unable to connect to mongo.')
  //console.error(err);
});


module.exports= app;
