
const roomstuff={}


function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

roomstuff.createRoom=function(name,game) {
var gs=null;
var theID=game+":"+create_UUID()
if(game=="taikyoku" ) {

gs=roomstuff.app.lib.games["tai"].makeroom(theID);
}
var room={
  id:theID,
  roomname:name,
  gamename:name,
  players: {},
  gamestate:gs,
  spectators:{}



}

return room

}


start=function(app) {
  roomstuff.app=app;

  return roomstuff
}
module.exports=start
