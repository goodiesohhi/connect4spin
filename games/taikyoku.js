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

const positionJson=require("../public/javascripts/positions.json")
const positions=positionJson


coordInt=function(strx) {
  x=0
  var str=strx.split(";")
  if(str[0]=="a") {
  x=1
  }
  else if (str[0]=="b") {
  x=2
  }
  else if (str[0]=="c") {
  x=3
  }
  else if (str[0]=="d") {
  x=4
  }else if (str[0]=="e") {
  x=5
  }else if (str[0]=="f") {
  x=6
  }else if (str[0]=="g") {
  x=7
  }else if (str[0]=="h") {
  x=8
  }else if (str[0]=="i") {
  x=9
  }else if (str[0]=="j") {
  x=10
  }else if (str[0]=="k") {
  x=11
  }else if (str[0]=="l") {
  x=12
  }else if (str[0]=="m") {
  x=13
  }else if (str[0]=="n") {
  x=14
  }else if (str[0]=="o") {
  x=15
  }else if (str[0]=="p") {
  x=16
  }else if (str[0]=="q") {
  x=17
  }else if (str[0]=="r") {
  x=18
  }else if (str[0]=="s") {
  x=19
  }else if (str[0]=="t") {
  x=20
  }else if (str[0]=="u") {
  x=21
  }else if (str[0]=="v") {
  x=22
  }else if (str[0]=="w") {
  x=23
  }else if (str[0]=="x") {
  x=24
  }else if (str[0]=="y") {
  x=25
  }else if (str[0]=="z") {
  x=26
  }else if (str[0]=="aa") {
  x=27
  }else if (str[0]=="bb") {
  x=28
  }else if (str[0]=="cc") {
  x=29
  }else if (str[0]=="dd") {
  x=30
  }else if (str[0]=="ee") {
  x=31
  }else if (str[0]=="ff") {
  x=32
  }else if (str[0]=="gg") {
  x=33
  }else if (str[0]=="hh") {
  x=34
  }else if (str[0]=="ii") {
  x=35
  }else if (str[0]=="jj") {
  x=36
  }

return x;

}
coordStr=function(x) {
  str=0;
  if(x==1) {
    str="a"
  } else if(x==2) {
    str="b"
  }
  else if(x==3) {
    str="c"
  }

  else if(x==4) {
    str="d"
  }

  else if(x==5) {
    str="e"
  }

  else if(x==6) {
    str="f"
  }

  else if(x==7) {
    str="g"
  }

  else if(x==8) {
    str="h"
  }
  else if(x==9) {
    str="i"
  }
  else if(x==10) {
    str="j"
  }
  else if(x==11) {
    str="k"
  }
  else if(x==12) {
    str="l"
  }
  else if(x==13) {
    str="m"
  }
  else if(x==14) {
    str="n"
  }
  else if(x==15) {
    str="o"
  }
  else if(x==16) {
    str="p"
  }
  else if(x==17) {
    str="q"
  }
  else if(x==18) {
    str="r"
  }
  else if(x==19) {
    str="s"
  }
  else if(x==20) {
    str="t"
  }
  else if(x==21) {
    str="u"
  }
  else if(x==22) {
    str="v"
  }
  else if(x==23) {
    str="w"
  }
  else if(x==24) {
    str="x"
  }
  else if(x==25) {
    str="y"
  }
  else if(x==26) {
    str="z"
  }
  else if(x==27) {
    str="aa"
  }
  else if(x==28) {
    str="bb"
  }
  else if(x==29) {
    str="cc"
  }
  else if(x==30) {
    str="dd"
  }
  else if(x==31) {
    str="ee"
  }
  else if(x==32) {
    str="ff"
  }
  else if(x==33) {
    str="gg"
  }
  else if(x==34) {
    str="hh"
  }
  else if(x==35) {
    str="ii"
  }
  else if(x==36) {
    str="jj"
  }

return str;
}

getY= function(x) {
return x.split(";")[0];

}
getX= function(x) {
return parseInt(x.split(";")[1]);

}

getRoyals =function(player,board) {
count=0
  for(x in board) {
    if(board[x]!=null) {
    if((board[x].pID=="cp"||board[x].pID=="k")&&board[x].owner==player) {
      count++;
    }
  }
  }

  return count;

}


checkPromo =function(piece) {
Y=getY(piece.tile)
if(piece.promoted){
   return false;
 } else {
if(piece.owner=="p1") {

  if(Y=="g"||Y=="f"||Y=="e"||Y=="d"||Y=="c"||Y=="b"||Y=="a") {
    return true
  } else {
    return false
  }

} else {

  if(Y=="dd"||Y=="ee"||Y=="ff"||Y=="gg"||Y=="hh"||Y=="ii"||Y=="jj") {
    return true
  } else {
    return false
  }


}

 }

}
checkSpace =function(space,board) {

var re=null
    for(var key in board) {
        var value = board[key];
        if(value==null) {

        } else {
        if(value.tile==space){
          re=value

        }
      }
    }

return re;
}

getValidJumps=function(o) {

    jumps=[]
    x=0;
    y=0;

  for (var i in o.movementData.jumps) {


      if(o.owner=="p1") {
   x=-o.movementData.jumps[i].x
   y=-o.movementData.jumps[i].y
  } else {
    x=o.movementData.jumps[i].x
    y=o.movementData.jumps[i].y
  }


  z=(getX(o.tile)+x)

   var destination= coordStr( coordInt(o.tile)+y) +";"+ z;

   test=checkSpace(destination, tai.app.lib.rooms[o.roomID].gamestate.board);

   if(test==null) {
      jumps.push(destination)
   } else {

  if(test.owner==o.owner) {

  } else {
   jumps.push(destination)
  }
  }
  }



  return jumps;

}

getValidMoves=function(o) {


   if(o.movementData.type=="h") {
     results=[]
  for (var u in o.movementData.fusion) {
     k={}
     k=o.movementData.fusion[u]
     k.owner=o.owner;
     k.roomID=o.roomID

     k.tile=o.tile;
    if(k.movementData.type=="jump") {

   results=results.concat(getValidJumps(k))



  } else if (k.movementData.type=="step") {


  results=results.concat(getValidSteps(k))
    }

  }

  return results;

   } else {
   if(o.movementData.type=="jump") {

  return getValidJumps(o)



  } else if (o.movementData.type=="step") {


  return getValidSteps(o)
   }
  }


}


getValidSteps=function(o) {
var amounts=1;
var initJump;

var initJumpUp;
var initJumpDown;
var initJumpLeft;
var initJumpRight;
var initJumpUpRight
var initJumpUpLeft;
var initJumpDownLeft;
var initJumpDownRight;
    if(o.movementData.initJump==null) {
initJump=1


initJumpUp = initJump;
initJumpDown = initJump;
initJumpLeft = initJump;
initJumpRight = initJump;
initJumpUpRight = initJump
initJumpUpLeft = initJump;
initJumpDownLeft = initJump;
initJumpDownRight = initJump;
} else{

  initJump=o.movementData.initJump
  if(o.movementData.upto!=null) {
  amounts=initJump;
  }
}

if(o.movementData.initJumpUp==null) {
initJumpUp=1
} else{
  initJumpUp=o.movementData.initJump
}
if(o.movementData.initJumpDown==null) {
initJumpDown=1
} else{
  initJumpDown=o.movementData.initJump
}
if(o.movementData.initJumpLeft==null) {
initJumpLeft=1
} else{
  initJumpLeft=o.movementData.initJump
}
if(o.movementData.initJumpRight==null) {
initJumpRight=1
} else{
  initJumpRight=o.movementData.initJump
}
if(o.movementData.initJumpDownLeft==null) {
initJumpDownLeft=1
} else{
  initJumpDownLeft=o.movementData.initJump
}
if(o.movementData.initJumpUpLeft==null) {
initJumpUpLeft=1
} else{
  initJumpUpLeft=o.movementData.initJump
}
if(o.movementData.initJumpUpRight==null) {
initJumpUpRight=1
} else{
  initJumpUpRight=o.movementData.initJump
}
if(o.movementData.initJumpDownRight==null) {
initJumpDownRight=1
} else{
  initJumpDownRight=o.movementData.initJump
}

if(o.movementData.initJump==null) {
initJump=1

} else{
  initJumpUp = initJump;
  initJumpDown = initJump;
  initJumpLeft = initJump;
  initJumpRight = initJump;
  initJumpUpRight = initJump
  initJumpUpLeft = initJump;
  initJumpDownLeft = initJump;
  initJumpDownRight = initJump;


}

    var validMoves=[]
   var travelled=[]
  if(o.movementData.upto!=null) {
   if(o.owner=="p2") {
    for(i=0;i<initJumpUp;i++){
    travelled[0+10*i]=traverse(o,o.movementData.up,0,1,initJumpUp-i)}
        for(i=0;i<initJumpDown;i++){
      travelled[1+10*i]=traverse(o,o.movementData.down,0,-1,initJumpDown-i)}
          for(i=0;i<initJumpLeft;i++){
        travelled[2+10*i]=traverse(o,o.movementData.left,-1,0,initJumpLeft-i)}
            for(i=0;i<initJumpRight;i++){
          travelled[3+10*i]=traverse(o,o.movementData.right,1,0,initJumpRight-i)}
              for(i=0;i<initJumpDownLeft;i++){
            travelled[4+10*i]=traverse(o,o.movementData.downleft,-1,-1,initJumpDownLeft-i)}
                for(i=0;i<initJumpDownRight;i++){
              travelled[5+10*i]=traverse(o,o.movementData.downright,1,-1,initJumpDownRight-i)}
                  for(i=0;i<initJumpUpLeft;i++){
                travelled[6+10*i]=traverse(o,o.movementData.upleft,-1,1,initJumpUpLeft-i)
              }
                    for(i=0;i<initJumpUpRight;i++){
                  travelled[7+10*i]=traverse(o,o.movementData.upright,1,1,initJumpUpRight-i)
                }
                } else {

                  for(i=0;i<initJumpUp;i++){
                  travelled[0+10*i]=traverse(o,o.movementData.up,0,-1,initJumpUp-i)}
                      for(i=0;i<initJumpDown;i++){
                    travelled[1+10*i]=traverse(o,o.movementData.down,0,1,initJumpDown-i)}
                        for(i=0;i<initJumpLeft;i++){
                      travelled[2+10*i]=traverse(o,o.movementData.left,1,0,initJumpLeft-i)}
                          for(i=0;i<initJumpRight;i++){
                        travelled[3+10*i]=traverse(o,o.movementData.right,-1,0,initJumpRight-i)}
                            for(i=0;i<initJumpDownLeft;i++){
                          travelled[4+10*i]=traverse(o,o.movementData.downleft,1,1,initJumpDownLeft-i)}
                              for(i=0;i<initJumpDownRight;i++){
                            travelled[5+10*i]=traverse(o,o.movementData.downright,-1,1,initJumpDownRight-i)}
                                for(i=0;i<initJumpUpLeft;i++){
                              travelled[6+10*i]=traverse(o,o.movementData.upleft,1,-1,initJumpUpLeft-i)
                            }
                                  for(i=0;i<initJumpUpRight;i++){
                                travelled[7+10*i]=traverse(o,o.movementData.upright,-1,-1,initJumpUpRight-i)
                              }
                }
}       else {


   if(o.owner=="p2") {
    travelled[0+10]=traverse(o,o.movementData.up,0,1,initJumpUp)
      travelled[1+10]=traverse(o,o.movementData.down,0,-1,initJumpDown)
        travelled[2+10]=traverse(o,o.movementData.left,-1,0,initJumpLeft)
          travelled[3+10]=traverse(o,o.movementData.right,1,0,initJumpRight)
            travelled[4+10]=traverse(o,o.movementData.downleft,-1,-1,initJumpDownLeft)
              travelled[5+10]=traverse(o,o.movementData.downright,1,-1,initJumpDownRight)
                travelled[6+10]=traverse(o,o.movementData.upleft,-1,1,initJumpUpLeft)
                  travelled[7+10]=traverse(o,o.movementData.upright,1,1,initJumpUpRight)
                } else {

                  travelled[0+10]=traverse(o,o.movementData.up,0,-1,initJumpUp)
                    travelled[1+10]=traverse(o,o.movementData.down,0,1,initJumpDown)
                      travelled[2+10]=traverse(o,o.movementData.left,1,0,initJumpLeft)
                        travelled[3+10]=traverse(o,o.movementData.right,-1,0,initJumpRight)
                          travelled[4+10]=traverse(o,o.movementData.downleft,1,1,initJumpDownLeft)
                            travelled[5+10]=traverse(o,o.movementData.downright,-1,1,initJumpDownRight)
                              travelled[6+10]=traverse(o,o.movementData.upleft,1,-1,initJumpUpLeft)
                                travelled[7+10]=traverse(o,o.movementData.upright,-1,-1,initJumpUpRight)


                }
}



              travelled.forEach((item, i) => {
                      var value = item
                    //    console.log(value.dat)
                    var i;

                      for(i=0;i<value.path.length;i++) {
                        var value2 = value.path[i];
                          if (value2!=null){
                        possible=value.dat[value2]
                        if(possible!=null) {
                          if(o.owner==possible.owner) {


                          break
                          } else {
                          //  console.log("should take")
                            validMoves.push(value2)
                          break

                          }

                        } else {

                          validMoves.push(value2)
                        }
                      }
                    }

                    });




  return validMoves;

}

traverse=function(o,distance, x,y,initJump) {

 var result={}
    result.dat={}

 result.path=[]

 var xdir =1;
 var ydir =1;


 var xStr;
 var yStr;
 var stop=false
var cancel=false
  for (var i = initJump; i <= distance; i++) {
    cancel=false

    c=(coordInt( o.tile)+(i)*y)

    if(c<1) {
      c=900
      stop=true;
        cancel=true;
    }

    if(c>36){
      stop=true;
      cancel=true;
      c=900
    }
    if(c>0 && c<37) {
      yStr=coordStr (c);
    }

    d=getX(o.tile)+(i)*x
    if(d<1) {
      d=900
        stop=true;
          cancel=true;
    }
    if(d>36) {
      d=3900
        stop=true;
          cancel=true;
    }

    if(d>0&&d<37) {
  xStr= d

}
  var ar= yStr+";"+xStr;

  if(!cancel) {

  result.path[i-1]=ar



  space=checkSpace(ar,tai.app.lib.rooms[o.roomID].gamestate.board)

  if(space!=null) {

  result.dat[ar]=space;
} else {
  result.dat[ar]=null;
}
}
}



  return result;
}

invertPos=function(v) {
v=v.split(";")
x=parseInt(v[1])
y=v[0]
x=37-x;

if(y=="a") {
  y="jj"
} else
if(y=="b") {
  y="ii"
} else
if(y=="c") {
  y="hh"
} else
if(y=="d") {
  y="gg"
} else
if(y=="e") {
  y="ff"
} else
if(y=="f") {
  y="ee"
} else
if(y=="g") {
  y="dd"
} else
if(y=="h") {
  y="cc"
} else
if(y=="i") {
  y="bb"
} else
if(y=="j") {
  y="aa"
} else
if(y=="k") {
  y="z"
} else
if(y=="l") {
  y="y"
}

return y+";"+x

}
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxx-xxxx-4xxx-yxxx-xxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}



tai.update=function(value) {


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



      //tai.app.lib.io.to(value.id).emit('update', { state:value.gamestate
      ////console.log(value.gamestate.board)



      app.lib.io.to(value.id).emit('update', { state:JSON.stringify(value)
      });


}
tai.loadPiece=function(sho,p,player,tile) {

  var temp=cloneDeep (dat[p])
  temp.startTile=tile;
  temp.owner=player;
  temp.tile=tile;
  temp.pID=p;
  temp.pUUID=p+create_UUID()
  temp.roomID=sho.id;
  temp.promoted=false;
sho.board[temp.pUUID]=temp
return sho.board[temp.pUUID];
}

tai.makeBoard=function(shogi) {

//tai.loadPiece(shogi,"tk","p1","jj;1")


  for(x in positions.pos) {
    code=positions.pos[x].toLowerCase()
    if(code!="") {
      if(dat[code]!=null) {
        tai.loadPiece(shogi,code,"p2",x)
      }
    }

  }


    for(x in positions.pos) {
      code=positions.pos[x].toLowerCase()
      if(code!="") {
        if(dat[code]!=null) {
          tai.loadPiece(shogi,code,"p1",invertPos(x))
        }
      }

    }


}
tai.makeroom=function(theID) {
  var shogi={}
  shogi.id=theID;
  shogi.players=[];
  shogi.turn=1;
  shogi.turnOwner="p1";
  shogi.turnSwitch=-50;
  shogi.board={};
  shogi.movelog=[];
  shogi.needPromo=null;


  tai.makeBoard(shogi)

  return shogi;

}






start=function(app) {
  tai.app=app
 tai.getRoyals=getRoyals




//  roomTemp=tai.app.lib.roomstuff.createRoom("taikyoku")
  //tai.app.lib.rooms[roomTemp.id]=roomTemp
  //console.log(tai.app.lib.rooms)

  tai.app.lib.io.on('connection', (socket) => {

  socket.on('endTurn', (data) => {
    if(data.player==tai.app.lib.rooms[data.room].gamestate.turnOwner) {
    tai.app.lib.rooms[data.room].gamestate.turnSwitch=7;
      tai.app.lib.rooms[data.room].gamestate.needPromo=null;
  }
  })


  socket.on('yesPromote', (data) => {

if(data.player==tai.app.lib.rooms[data.room].gamestate.turnOwner) {



    if(tai.app.lib.rooms[data.room].gamestate.board[tai.app.lib.rooms[data.room].gamestate.needPromo]!=null) {

      if(dat[tai.app.lib.rooms[data.room].gamestate.board[tai.app.lib.rooms[data.room].gamestate.needPromo].promote]!=null) {
      var temp=cloneDeep(tai.app.lib.rooms[data.room].gamestate.board[tai.app.lib.rooms[data.room].gamestate.needPromo])
      var temp2=cloneDeep (dat[tai.app.lib.rooms[data.room].gamestate.board[tai.app.lib.rooms[data.room].gamestate.needPromo].promote])
      temp2.startTile=temp.startTile;
      temp2.owner=temp.owner;
      temp2.tile=temp.tile;
      temp2.pID=tai.app.lib.rooms[data.room].gamestate.board[tai.app.lib.rooms[data.room].gamestate.needPromo].promote;
      temp2.pUUID=temp.pUUID;
      temp2.roomID=temp.roomID;
      temp2.promoted=true;
      temp2.promote=null;

      tai.app.lib.rooms[data.room].gamestate.board[tai.app.lib.rooms[data.room].gamestate.needPromo]=temp2;

      socket.emit('upDatePiece', { piece:  tai.app.lib.rooms[data.room].gamestate.needPromo,state:  tai.app.lib.rooms[data.room].gamestate });
      tai.app.lib.rooms[data.room].gamestate.needPromo=null;
      tai.app.lib.rooms[data.room].gamestate.turnSwitch=7;


    } else {


      tai.app.lib.rooms[data.room].gamestate.needPromo=null;
      tai.app.lib.rooms[data.room].gamestate.turnSwitch=7;
    }

    }}
  })

  socket.on('makeMove', (data) => {

    if(tai.app.lib.rooms[data.room].gamestate.needPromo==null) {

if(tai.app.lib.rooms[data.room].winner!=null&&tai.app.lib.rooms[data.room].gamestate.turn<3) {
  tai.app.lib.rooms[data.room].winner=null;
}
if(tai.app.lib.rooms[data.room]!=null) {
    if(tai.app.lib.rooms[data.room].gamestate.turnSwitch==-50) {

if(data.player==  tai.app.lib.rooms[data.room].gamestate.turnOwner) {

  if(tai.app.lib.rooms[data.room].gamestate.board[data.piece].owner==data.player) {

      var valid=getValidMoves(tai.app.lib.rooms[data.room].gamestate.board[data.piece])

      if(valid.includes(data.location)) {

var K=checkSpace(data.location,  tai.app.lib.rooms[data.room].gamestate.board)

if(K!=null) {
  tai.app.lib.rooms[data.room].gamestate.board[K.pUUID]=null;
  p=tai.app.lib.rooms[data.room].gamestate.board[K.pUUID];
 //console.log("take "+ data.location)
 //console.log(p)
 delete p;
}

  tai.app.lib.rooms[data.room].gamestate.movelog.push(tai.app.lib.rooms[data.room].gamestate.board[data.piece].owner+"'s " +tai.app.lib.rooms[data.room].gamestate.board[data.piece].name+" moves "+tai.app.lib.rooms[data.room].gamestate.board[data.piece].tile+" --> "+data.location)
  tai.app.lib.rooms[data.room].gamestate.board[data.piece].tile=data.location;

if(checkPromo(tai.app.lib.rooms[data.room].gamestate.board[data.piece])) {
tai.app.lib.rooms[data.room].gamestate.needPromo=data.piece;
} else {
  tai.app.lib.rooms[data.room].gamestate.turnSwitch=7;
}


}}
}}
}

}
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
