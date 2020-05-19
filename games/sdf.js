const tools=require("../tools.js");
//const app =require('../app.js')
//const server = require('http').Server(app);
//server.listen(80)
const cors = require('cors')
var cloneDeep = require('lodash.clonedeep');

const app = require("../app.js")
const sdf={}
const testing=true
console.log("sdf start")
sdf.makeroom=function(theID) {
  var htr={}
  htr.id=theID;
  htr.inputs={}
  htr.fighters={}
  htr.frame=0;

  return htr;

}
sdf.fighters=require("../public/javascripts/sdfData.js")

sdf.makeFighter=function(player,name,f) {
    console.log(sdf)
  console.log(sdf.fighters[f])
temp=cloneDeep(sdf.fighters[f])
temp.player=player
temp.playername=name
temp.x=0;
temp.y=0;

return temp;
}

sdf.first=function(value) {
  if(sdf.testing) {
    value.started=true;
  }
if(value.started) {
  value.startedRun=true;
  for (p in value.players) {
    var player=value.players[p];

    value.gamestate.fighters[p]=sdf.makeFighter(p,player.name,"0");
  }
}

}

sdf.update=function(value){
  if(value.gamestate.fighters["p1"]!=null) {
  console.log(value.gamestate.fighters["p1"].x+","+value.gamestate.fighters["p1"].y)


}
for(f in value.gamestate.fighters) {
var fight=value.gamestate.fighters[f];
var inp = value.gamestate.inputs[f][value.gamestate.frame];
if(inp!=null) {
if(inp.Down) {
  fight.y++;
}
if(inp.Up) {
  fight.y--;
}
if(inp.Right) {
  fight.x++;
}
if(inp.Left) {
  fight.x--;
}

}
}
  app.lib.io.to(value.id).emit('update', { state:JSON.stringify(value)
  });
}


start=function(app) {


  sdf.app=app



//  console.log(tai.app)
//  roomTemp=tai.app.lib.roomstuff.createRoom("taikyoku")
  //tai.app.lib.rooms[roomTemp.id]=roomTemp
  //console.log(tai.app.lib.rooms)

  sdf.app.lib.io.on('connection', (socket) => {

  socket.on('updateControls', (data) => {
    if(sdf.app.lib.rooms[data.id]!=null) {
    if(sdf.app.lib.rooms[data.id].gamestate.inputs[data.player]==null) {
      sdf.app.lib.rooms[data.id].gamestate.inputs[data.player]={}
    } else {
      sdf.app.lib.rooms[data.id].gamestate.frame=data.frame;
    sdf.app.lib.rooms[data.id].gamestate.inputs[data.player][data.frame]=data.control
    if(sdf.app.lib.rooms[data.id].gamestate.inputs[data.player][data.frame-300]!=null) {
      delete sdf.app.lib.rooms[data.id].gamestate.inputs[data.player][data.frame-300]
    }

}
}
  })
  })





  return sdf
}






module.exports=start;
