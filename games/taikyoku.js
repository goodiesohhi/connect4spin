const tools=require("../tools.js");
//const app =require('../app.js')
//const server = require('http').Server(app);
//server.listen(80)
const cors = require('cors')
var cloneDeep = require('lodash.clonedeep');

const app = require("../app.js")
const dat= require ("../public/javascripts/taidata")

var fs = require('fs');
const tai={}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxx-xxxx-4xxx-yxxx-xxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

tai.loadPiece=function(board,p,player,tile) {

  var temp=cloneDeep (dat[p])
  temp.owner=player;
  temp.tile=tile;
  temp.pID=p;
  temp.pUUID=p+create_UUID()
board[temp.pUUID]=temp
return
}
tai.makeBoard=function(shogi) {
  tai.loadPiece(shogi.board,"k","p1","a;1")
  tai.loadPiece(shogi.board,"k","p2","a;3")
  tai.loadPiece(shogi.board,"k","p2","b;4")
  tai.loadPiece(shogi.board,"k","p2","b;5")



}
tai.makeroom=function() {
  var shogi={}
  shogi.players=[];
  shogi.turn=0;
  shogi.turnOwner="p1";
  shogi.board={};


  tai.makeBoard(shogi)

  return shogi;

}






start=function(app) {
  tai.app=app




//  console.log(tai.app)
//  roomTemp=tai.app.lib.roomstuff.createRoom("taikyoku")
  //tai.app.lib.rooms[roomTemp.id]=roomTemp
  //console.log(tai.app.lib.rooms)

  tai.app.lib.io.on('connection', (socket) => {


  socket.on('makeMove', (data) => {
  console.log(data)

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

//tai.app.lib.io.emit('roomList', { state:JSON.stringify()});

  for(var key in tai.app.lib.rooms) {
  var value = tai.app.lib.rooms[key];


if(value.players["p1"]!=null && value.players["p2"]!=null) {



}
    //tai.app.lib.io.to(value.id).emit('update', { state:value.gamestate
    //console.log(value.gamestate.board)


    tai.app.lib.io.to(value.id).emit('update', { state:JSON.stringify(value)
    });
}



  }, 500);
