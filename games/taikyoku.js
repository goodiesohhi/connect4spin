
//const app =require('../app.js')
//const server = require('http').Server(app);
//server.listen(80)
const cors = require('cors')


const app = require("../app.js")
const dat= require ("../public/javascripts/taidata")
var fs = require('fs');
const tai={}
tai.makeroom=function() {
  var shogi={}
  shogi.players=[];

  shogi.board={};

console.log(dat["k"])
console.log(dat["k"])
console.log(dat)
  shogi.board["wK"]=dat["k"]

  return shogi;

}

start=function(app) {
  tai.app=app

//  console.log(tai.app)
  roomTemp=tai.app.lib.roomstuff.createRoom("taikyoku",tai)
  tai.app.lib.rooms[roomTemp.id]=roomTemp
  //console.log(tai.app.lib.rooms)

  tai.app.lib.io.on('connection', (socket) => {
  socket.join("test")
  socket.on('joinRoom', (room) => {
  socket.join(room)

  });
  });
  return tai


}




module.exports=start;



/*
socket.emit('chatMessage', { username:msg.username,
message:msg.message


});
*/
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

  for(var key in tai.app.lib.rooms) {
  var value = tai.app.lib.rooms[key];

    //tai.app.lib.io.to(value.id).emit('update', { state:value.gamestate
    //console.log(value.gamestate.board)
    tai.app.lib.io.to("test").emit('update', { state:JSON.stringify(value)
    });
}



  }, 500);
