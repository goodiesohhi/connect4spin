
//const app =require('../app.js')
//const server = require('http').Server(app);
//server.listen(80)
const cors = require('cors')


const app = require("../app.js")
var fs = require('fs');
const tai={}
tai.makeroom=function() {
  var shogi={}
  shogi.players=[];

  shogi.board=[];

  return shogi;

}


module.exports=tai;
//io.set('origins', '*:*');


// app.use/routes/etc...


//const nsp = io.of('/taikyoku')


/*
nsp.on('connection', function(socket){
  console.log('someone connected');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});
*/


setInterval(function(){
  //  console.log(app)
  }, 500);
