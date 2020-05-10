const roomstuff={}

const app = require("../app")
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

roomstuff.createRoom=function(name) {
var gs=null;
if(name=="taikyoku" ) {
gs=app.games[0].makeroom();
}
var room={
  id:name+":"+create_UUID(),
  gamename:name,
  players: [],
  gamestate:gs,
  spectators:[]



}

return room

}
