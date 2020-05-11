var createError = require('http-errors');
var express = require('express');
var path = require('path');
const flash =require('connect-flash')
const bodyparser = require('body-parser');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var cookieParser = require('cookie-parser');
var events = require('events');
var logger = require('morgan');
var http = require('http');
var secure = require('express-force-https');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const fs = require('fs');
const app = require('express')();
var roomstuff=require('./roomstuff')(app)
const x=0;
app.lib = {
  io: null,
  games:null,
  rooms:{},


 };

const server = require('http').Server(app);
app.express=express;
app.use(flash());
app.use(secure)
app.use(function (req, res, next) {
    console.log("Set CORS")
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
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require('./passport')(app);
app.lib.roomstuff=roomstuff;



app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));
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


//Xtq2663BdpFeugE


// WARNING: app.listen(80) will NOT work here!



require('./shared/middleware/mongoose')()
.then(() => {
  app.lib.io = require('socket.io')(server);
  // mongo is connected, so now we can start the express server.
  server.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));





    app.lib.io.on('connection', (socket) => {
      socket.join('public')
      socket.join('test')
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
taikyoku



}

app.lib.games=games;

})
.catch(err => {
  // an error occurred connecting to mongo!
  // log the error and exit
  console.error('Unable to connect to mongo.')
  console.error(err);
});

module.exports= app;
