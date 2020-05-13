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

getX= function(x) {
return parseInt(x.split(";")[1]);

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


getValidMoves=function(o) {

  var validMoves=[]
 var travelled=[]
 if(o.owner=="p2") {
  travelled[0]=traverse(o,o.movementData.up,0,1)
    travelled[1]=traverse(o,o.movementData.down,0,-1)
      travelled[2]=traverse(o,o.movementData.left,-1,0)
        travelled[3]=traverse(o,o.movementData.right,1,0)
          travelled[4]=traverse(o,o.movementData.downleft,-1,-1)
            travelled[5]=traverse(o,o.movementData.downright,1,-1)
              travelled[6]=traverse(o,o.movementData.upleft,-1,1)
                travelled[7]=traverse(o,o.movementData.upright,1,1)
              } else {

                travelled[0]=traverse(o,o.movementData.up,0,-1)
                  travelled[1]=traverse(o,o.movementData.down,0,1)
                    travelled[2]=traverse(o,o.movementData.left,1,0)
                      travelled[3]=traverse(o,o.movementData.right,-1,0)
                        travelled[4]=traverse(o,o.movementData.downleft,1,1)
                          travelled[5]=traverse(o,o.movementData.downright,-1,1)
                            travelled[6]=traverse(o,o.movementData.upleft,1,-1)
                              travelled[7]=traverse(o,o.movementData.upright,-1,-1)


              }



            travelled.forEach((item, i) => {



                    var value = item
                  //    console.log(value.dat)
                  var i;

                    for(i=0;i<value.path.length;i++) {
                      var value2 = value.path[i];






                      //console.log(value)

                      possible=value.dat[value2]
                    //  console.log(value2)
                  //  console.log(possible)

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
                  });



return validMoves;

}

traverse=function(o,distance, x,y,board) {

 var result={}
    result.dat={}

 result.path=[]

 var xdir =1;
 var ydir =1;


 var xStr;
 var yStr;
 var stop=false
var cancel=false
  for (var i = 1; i <= distance; i++) {
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

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxx-xxxx-4xxx-yxxx-xxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

tai.loadPiece=function(sho,p,player,tile) {

  var temp=cloneDeep (dat[p])
  temp.owner=player;
  temp.tile=tile;
  temp.pID=p;
  temp.pUUID=p+create_UUID()
  temp.roomID=sho.id;
sho.board[temp.pUUID]=temp
return sho.board[temp.pUUID];
}

tai.makeBoard=function(shogi) {
 tai.loadPiece(shogi,"k","p1","jj;19")
   tai.loadPiece(shogi,"p","p1","z;1")
  tai.loadPiece(shogi,"p","p1","z;2")
  tai.loadPiece(shogi,"p","p1","z;3")
  tai.loadPiece(shogi,"p","p1","z;4")
  tai.loadPiece(shogi,"p","p1","z;5")
  tai.loadPiece(shogi,"p","p1","z;6")
  tai.loadPiece(shogi,"p","p1","z;7")
  tai.loadPiece(shogi,"p","p1","z;8")
  tai.loadPiece(shogi,"p","p1","z;9")
  tai.loadPiece(shogi,"p","p1","z;10")
  tai.loadPiece(shogi,"p","p1","z;11")
  tai.loadPiece(shogi,"p","p1","z;12")
  tai.loadPiece(shogi,"p","p1","z;13")

  tai.loadPiece(shogi,"p","p1","z;14")
  tai.loadPiece(shogi,"p","p1","z;15")
  tai.loadPiece(shogi,"p","p1","z;16")
  tai.loadPiece(shogi,"p","p1","z;17")
  tai.loadPiece(shogi,"p","p1","z;18")
  tai.loadPiece(shogi,"p","p1","z;19")
  tai.loadPiece(shogi,"p","p1","z;20")
  tai.loadPiece(shogi,"p","p1","z;21")
  tai.loadPiece(shogi,"p","p1","z;22")
  tai.loadPiece(shogi,"p","p1","z;23")
  tai.loadPiece(shogi,"p","p1","z;24")
  tai.loadPiece(shogi,"p","p1","z;25")
  tai.loadPiece(shogi,"p","p1","z;26")
  tai.loadPiece(shogi,"p","p1","z;27")
  tai.loadPiece(shogi,"p","p1","z;28")
  tai.loadPiece(shogi,"p","p1","z;29")
  tai.loadPiece(shogi,"p","p1","z;30")
  tai.loadPiece(shogi,"p","p1","z;31")
  tai.loadPiece(shogi,"p","p1","z;32")
  tai.loadPiece(shogi,"p","p1","z;33")
  tai.loadPiece(shogi,"p","p1","z;34")
  tai.loadPiece(shogi,"p","p1","z;35")
  tai.loadPiece(shogi,"p","p1","z;36")

//ea
tai.loadPiece(shogi,"ea","p1","bb;11")
tai.loadPiece(shogi,"ea","p1","bb;26")
//sg

tai.loadPiece(shogi,"sg","p1","bb;13")
tai.loadPiece(shogi,"sg","p1","bb;24")

//gb
tai.loadPiece(shogi,"gb","p1","y;11")
tai.loadPiece(shogi,"gb","p1","y;26")
//rook
tai.loadPiece(shogi,"r","p1","ff;33")
tai.loadPiece(shogi,"r","p1","ff;4")





//p2
tai.loadPiece(shogi,"k","p2","a;18")

//pawnwall

tai.loadPiece(shogi,"p","p2","k;1")
tai.loadPiece(shogi,"p","p2","k;2")
tai.loadPiece(shogi,"p","p2","k;3")
tai.loadPiece(shogi,"p","p2","k;4")
tai.loadPiece(shogi,"p","p2","k;5")
tai.loadPiece(shogi,"p","p2","k;6")
tai.loadPiece(shogi,"p","p2","k;7")
tai.loadPiece(shogi,"p","p2","k;8")
tai.loadPiece(shogi,"p","p2","k;9")
tai.loadPiece(shogi,"p","p2","k;10")
tai.loadPiece(shogi,"p","p2","k;11")
tai.loadPiece(shogi,"p","p2","k;12")
tai.loadPiece(shogi,"p","p2","k;13")

tai.loadPiece(shogi,"p","p2","k;14")
tai.loadPiece(shogi,"p","p2","k;15")
tai.loadPiece(shogi,"p","p2","k;16")
tai.loadPiece(shogi,"p","p2","k;17")
tai.loadPiece(shogi,"p","p2","k;18")
tai.loadPiece(shogi,"p","p2","k;19")
tai.loadPiece(shogi,"p","p2","k;20")
tai.loadPiece(shogi,"p","p2","k;21")
tai.loadPiece(shogi,"p","p2","k;22")
tai.loadPiece(shogi,"p","p2","k;23")
tai.loadPiece(shogi,"p","p2","k;24")
tai.loadPiece(shogi,"p","p2","k;25")
tai.loadPiece(shogi,"p","p2","k;26")
tai.loadPiece(shogi,"p","p2","k;27")
tai.loadPiece(shogi,"p","p2","k;28")
tai.loadPiece(shogi,"p","p2","k;29")
tai.loadPiece(shogi,"p","p2","k;30")
tai.loadPiece(shogi,"p","p2","k;31")
tai.loadPiece(shogi,"p","p2","k;32")
tai.loadPiece(shogi,"p","p2","k;33")
tai.loadPiece(shogi,"p","p2","k;34")
tai.loadPiece(shogi,"p","p2","k;35")
tai.loadPiece(shogi,"p","p2","k;36")

//ea

tai.loadPiece(shogi,"ea","p2","i;11")
tai.loadPiece(shogi,"ea","p2","i;26")

//sg

tai.loadPiece(shogi,"sg","p2","i;13")
tai.loadPiece(shogi,"sg","p2","i;24")

//gb

tai.loadPiece(shogi,"gb","p2","l;11")
tai.loadPiece(shogi,"gb","p2","l;26")


//Rook
tai.loadPiece(shogi,"r","p2","e;33")
tai.loadPiece(shogi,"r","p2","e;4")

//  tai.loadPiece(shogi,"k","p2","a;2")
  //  tai.loadPiece(shogi,"k","p1","c;1")
  //tai.loadPiece(shogi,"k","p2","b;3")
  //tai.loadPiece(shogi,"k","p2","b;5")







}
tai.makeroom=function(theID) {
  var shogi={}
  shogi.id=theID;
  shogi.players=[];
  shogi.turn=0;
  shogi.turnOwner="p1";
  shogi.turnSwitch=-50;
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
  tai.app.lib.rooms[data.room].gamestate.board[data.piece].tile=data.location;
  tai.app.lib.rooms[data.room].gamestate.turnSwitch=5;
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

runOnce=false
setInterval(function(){

//tai.app.lib.io.emit('roomList', { state:JSON.stringify()});

  for(var key in tai.app.lib.rooms) {

  var value = tai.app.lib.rooms[key];
  if(!runOnce) {
    runOnce=true;

  //console.log(  getValidMoves(test))



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
    }
  }

if(value.players["p1"]!=null && value.players["p2"]!=null) {



}
    //tai.app.lib.io.to(value.id).emit('update', { state:value.gamestate
    //console.log(value.gamestate.board)



    tai.app.lib.io.to(value.id).emit('update', { state:JSON.stringify(value)
    });
}



}, 200);
