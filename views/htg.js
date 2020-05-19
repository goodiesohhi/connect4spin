const tools=require("../tools.js");
//const app =require('../app.js')
//const server = require('http').Server(app);
//server.listen(80)
const cors = require('cors')
var cloneDeep = require('lodash.clonedeep');

const app = require("../app.js")
const htg={}

htg.makeroom=function(theID) {
  var htr={}
  htr.id=theID;
  htr.inputs={}
  return htr;

}

htg.update=function(value){
  app.lib.io.to(value.id).emit('update', { state:JSON.stringify(value)
  });
}

htg.first=function(value) {
  value.started=true;
}


start=function(app) {


  htg.app=app



//  console.log(tai.app)
//  roomTemp=tai.app.lib.roomstuff.createRoom("taikyoku")
  //tai.app.lib.rooms[roomTemp.id]=roomTemp
  //console.log(tai.app.lib.rooms)

  htg.app.lib.io.on('connection', (socket) => {

  socket.on('updateControls', (data) => {
    if(htg.app.lib.rooms[data.id].gamestate.inputs[data.player]==null) {
      htg.app.lib.rooms[data.id].gamestate.inputs[data.player]={}
    } else {
    htg.app.lib.rooms[data.id].gamestate.inputs[data.player][data.frame]=data.control

}
  })
  })





  return htg
}






module.exports=start;
