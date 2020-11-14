const tools=require("../tools.js");
//const app =require('../app.js')
//const server = require('http').Server(app);
//server.listen(80)


const app = require("../app.js")


var fs = require('fs');
const c4={}

  console.log(c4);



c4.first=function(value) {
  value.startedRun=true;
}


c4.update=function(value) {


  if(!app.testing) {
    if(value.players["p2"]==null) {

      if(value.started)
      {
        value.started=false
        value.gamestate =  app.lib.games["connect4"].makeroom(value.id);
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


//winning code here

for(var i=0; i<7; i++) {
for(var o=0; o<7; o++) {
  if(value.gamestate.board[i]!=null&&value.gamestate.board[i]!==undefined) {
if(value.gamestate.board[i][o]!=null&&value.gamestate.board[i][o]!==undefined) {
var x=0;
var owner=value.gamestate.board[i][o].owner;

  for(var n=0;n<4;n++) {
    if(value.gamestate.board[i][o+n]!=null) {
      if(value.gamestate.board[i][o+n].owner==owner) {
      x++;
    }
    }
  }



  if(x<4) {
    x=0;
  }

  for(var n=0;n<4;n++) {
    if(value.gamestate.board[i+n]!=null) {
    if(value.gamestate.board[i+n][o]!=null) {
      if(value.gamestate.board[i+n][o].owner==owner) {
      x++;
    }
  }
    }
  }



  if(x<4) {
    x=0;
  }
  for(var n=0;n<4;n++) {
    if(value.gamestate.board[i+n]!=null) {
    if(value.gamestate.board[i+n][o+n]!=null) {
      if(value.gamestate.board[i+n][o+n].owner==owner) {
      x++;
    }
  }
    }
  }



  if(x<4) {
    x=0;
  }


  if(x>=4) {

    value.winner=owner;
console.log("winner");
    }


}


  }
}
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

         app.lib.rooms[value.id].gamestate=app.lib.games["connect4"].makeroom(value.id);
           app.lib.rooms[value.id].started=false;
          value.winner=null;


    }
      }
    }



      //c4.app.lib.io.to(value.id).emit('update', { state:value.gamestate
      ////console.log(value.gamestate.board)



      app.lib.io.to(value.id).emit('update', { state:JSON.stringify(value)
      });


}



c4.makeroom=function(theID) {
  var board={}
  board.id=theID;
  board.players=[];
  board.turn=1;
  board.turnOwner="p1";
  board.turnSwitch=-50;
  board.board=new Array(7);

  for (var i=0;i<7;i++) {

    board.board[i]=new Array(0);
  }
  board.movelog=[];





  return board;

}






start=function(app) {
  c4.app=app;





//  roomTemp=c4.app.lib.roomstuff.createRoom("c4kyoku")
  //c4.app.lib.rooms[roomTemp.id]=roomTemp
  //console.log(c4.app.lib.rooms)

  c4.app.lib.io.on('connection', (socket) => {

  socket.on('endTurn', (data) => {
    if (c4.app.lib.rooms[data.room]!=null) {
    if(data.player==c4.app.lib.rooms[data.room].gamestate.turnOwner) {
    c4.app.lib.rooms[data.room].gamestate.turnSwitch=7;

  }}
  })




  socket.on('makeMove', (data) => {
  if (c4.app.lib.rooms[data.room]!=null) {


if(c4.app.lib.rooms[data.room].winner!=null&&c4.app.lib.rooms[data.room].gamestate.turn<3) {
  c4.app.lib.rooms[data.room].winner=null;
}
if(c4.app.lib.rooms[data.room]!=null) {
    if(c4.app.lib.rooms[data.room].gamestate.turnSwitch==-50) {

if(data.player==  c4.app.lib.rooms[data.room].gamestate.turnOwner||app.testing) {






  if(app.testing) {
    var p="p1";

    if(c4.app.lib.rooms[data.room].gamestate.turn%2==0&&c4.app.lib.rooms[data.room].gamestate.turn>1) {
      p="p2";
    }
    c4.app.lib.rooms[data.room].gamestate.board[data.location].push(
      {
        owner:p,
        y:c4.app.lib.rooms[data.room].gamestate.board[data.location].length,
      }
    );


   } else {
  c4.app.lib.rooms[data.room].gamestate.board[data.location].push(
    {
      owner:data.player,
      y:c4.app.lib.rooms[data.room].gamestate.board[data.location].length,
    }
  );
  }


  c4.app.lib.rooms[data.room].gamestate.turnSwitch=7;



}
}}


}
});

  });



  return c4;


}



module.exports=start;



/*
socket.emit('chatMessage', { username:msg.username,
message:msg.message


});
*/
//io.set('origins', '*:*');


// app.use/routes/etc...


//const nsp = io.of('/c4kyoku')


/*
nsp.on('connection', function(socket){
  console.log('someone connected');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});
*/
