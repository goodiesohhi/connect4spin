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



mongoose=require('./shared/middleware/mongoose')()
.then(() => {
  app.lib.io = require('socket.io')(server);
  // mongo is connected, so now we can start the express server.
  server.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));





    app.lib.io.on('connection', (socket) => {


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
          var lock
            var doc = db.User.findOne({username: socket.username}, function(err,obj) {
              lock=doc.roomlock

            })

            if(lock=="") {
        tRoom=  addRoom( app.lib.roomstuff.createRoom(j.roomName,j.game));
        tRoom.players["p1"]= {
        name: socket.username,

        }






  var doc = db.User.findOne({username: socket.username}, function(err,obj) {


     obj.roomlock=tRoom.id;
     obj.save()

    });


  //const update = { roomlock: tRoom.id };

  //doc.save();

      socket.join(tRoom.id)
      socket.emit('reload', {});
      console.log("please reload1")
    }
    })

    socket.on('joinRoom', (j) => {
      var lock
        var doc = db.User.findOne({username: socket.username}, function(err,obj) {
          lock=doc.roomlock

        })

        if(lock=="") {
      tRoom=app.lib.rooms[j.roomName];
      if(tRoom!=null) {
        if(tRoom.players["p2"]==null) {
            tRoom.players["p2"]={
            name: socket.username,

            }
            var doc = db.User.findOne({username: socket.username}, function(err,obj) {


               obj.roomlock=tRoom.id;
               obj.save()

              });

                socket.join(j.roomName)
                socket.emit('reload', {});
                console.log("please reload2")
        } else {
            tRoom.spectators["sp"+Object.keys(tRoom.spectators).length]=socket.username
              socket.join(j.roomName)
        }
      } else {
        console.log("Invalid Room")
      }
    }


})
  socket.on('chatMessage', (msg) => {

  socket.to('public').emit('chatMessage', { username:msg.username,
message:msg.message


   });

   socket.emit('chatMessage', { username:msg.username,
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
