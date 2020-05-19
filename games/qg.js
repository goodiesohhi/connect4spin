const app = require("../app.js")
const db = require('../shared/models');
const qg={}
qg.areas=require("./qg/index1.js")()
function isFunction(functionToCheck) {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
qg.setFlag=function(flag,value,socket,after) {
  var doc = db.User.findOne({username: socket.username}, function(err,obj) {
    var data=obj.gamedata.get("qg")
    if(data.data.flags["global"]==null) {
      data.data.flags["global"]={}
    }
      data.data.flags["global"][flag]=value;

    obj.gamedata.set("qg",data);
    obj.markModified("gamedata");

    obj.save().then(function(){
      if(after!=null) {
      after()
    }


    })
  })


}
qg.advance=function(choice,socket) {
    var doc = db.User.findOne({username: socket.username}, function(err,obj) {
      data=obj.gamedata.get("qg")
      area=qg.areas[data.data.area];
 var index=qg.getIndex(area,socket,data);
console.log("CHOICE");
console.log(choice);
console.log(qg.areas[area.id].getCHOICE[index])


 if(qg.areas[area.id].getCHOICE[index][choice][1]=="n") {
   var splitted=index.split(";")

   var nIndex=splitted[0]+";"+(parseInt(splitted[1])+1);
   //console.log("try set",nIndex)
   qg.setIndex(area,nIndex,socket, function(){

      qg.sendRoom(area,socket)
   })

 } else {
   if(qg.areas[area.id].getCHOICE[index][choice][1].includes(".js")) {
     console.log("choice was")
    console.log( qg.areas[area.id].getCHOICE[index][choice][1]);
     qg.sendRoom(qg.areas[qg.areas[area.id].getCHOICE[index][choice][1]],socket)
   } else {
   var nIndex=qg.areas[area.id].getCHOICE[index][choice][1]
   qg.setIndex(area,nIndex,socket,function(){
     qg.sendRoom(area,socket)
   })

 }
 }
}
)}




qg.getFlag=function(flag,socket) {
  var doc = db.User.findOne({username: socket.username}, function(err,obj) {
    var data=obj.gamedata.get("qg")
    if(  data.data.flags["global"][flag]==null) {
      return false
    } else {

      return data.data.flags["global"][flag]

    }

  })


}

qg.getIndex=function(area,socket,data) {
  //console.log("getIndex ")
  return qg.getAreaFlag("index",area,socket,data)
}
qg.setIndex=function(area,index,socket,after) {
  qg.setAreaFlag("index",index,area,socket,after)
}
qg.getAreaFlag=function(flag,areaz,socket,data) {
  //console.log("sajoask");


    //console.log(data);
      //console.log(data.data);
        //console.log(data.data.area);
area=qg.areas[data.data.area]




  //console.log("datax")
  //console.log(data);
  //console.log(data.data)
  //console.log(data.data.flags)
  //console.log(data.data.flags[area.id])
  if(  data.data.flags[area.id][flag]==null) {
    return false
  } else {

    return data.data.flags[area.id][flag]

  }


}
qg.setAreaFlag=function(flag,value,area,socket, after) {
  var doc = db.User.findOne({username: socket.username}, function(err,obj) {
    var data=obj.gamedata.get("qg")
    if(data.data.flags[area.id]==null) {
      data.data.flags[area.id]={}
    }
      data.data.flags[area.id][flag]=value;

    obj.gamedata.set("qg",data);
    obj.markModified("gamedata");
    obj.save().then(function(){
      if(after!=null) {
      after()
    }


    })
  })


}

qg.grantBattle=function(socket,after) {
  var doc = db.User.findOne({username: socket.username}, function(err,obj) {
    var data=obj.gamedata.get("qg")
    if(data.character.stats==null) {
      data.character.stats={
        virl:5,
        hard:5,
        werd:5,
        thic:100,
        sexy:5,
        stam:100





      }

        if(data.character.skills==null) {
      data.character.skills={

      }
    }
    }


    obj.gamedata.set("qg",data);
    obj.markModified("gamedata");
    obj.save().then(function(){
      if(after!=null) {
      after()
    }


    })
  })


}

qg.gibItem=function (socket,item,count,thenx) {
  var doc = db.User.findOne({username: socket.username}, function(err,obj) {
    var data=obj.gamedata.get("qg")

    if(data.character.inventory[item]==null) {
      data.character.inventory[item]={
        id:item,
        count:count,
      }
    } else {

      data.character.inventory[item].count+=count;
    }
    obj.gamedata.set("qg",data)

    obj.markModified("gamedata");
    obj.save().then(function() {

    if(thenx!=null) {
      thenx();

    }
  })
  })


}

qg.sendRoom=function(areaz,socket,reload) {
var sent={}



  //console.log("c")
  //console.log(c);

console.log("cc")
console.log(areaz);

var area=areaz
console.log(area);
    var doc = db.User.findOne({username: socket.username}, function(err,obj) {
      var data=obj.gamedata.get("qg")
if(area!=null){

      if(data.data.flags[area.id]==null) {
        data.data.flags[area.id]={


        }
        data.data.flags[area.id].visted=true;
        data.data.flags[area.id].enteredSections={

        }
        data.data.flags[area.id].index="a;1";
        data.data.area=area.id;
        obj.gamedata.set("qg",data)

        //console.log("testing");
        //console.log(obj.gamedata.get("qg"))

        obj.markModified("gamedata");
        obj.save().then(function() {
          sent.index=qg.getIndex(area,socket,data);
          console.log(sent.index)
          //console.log("sentindex");
          //console.log(sent.index)
          if(area.getIMG[sent.index]!=null) {
          sent.image=area.getIMG[sent.index];
          }
          sent.text=area.getTXT[sent.index];
          sent.choice=area.getCHOICE[sent.index];
          sent.areaName=area.name;
            console.log("map1?");
            console.log(area.isMap);
          if(area.isMap!=null) {
            console.log("map?");
              console.log(area.isMap[sent.index])
            if(area.isMap[sent.index]!=null) {


              sent.map=area.isMap[sent.index]

          }
          }

          if(area.script[sent.index]!=null&&reload==null) {

            if(isFunction(area.script[sent.index])){
              area.script[sent.index](socket,qg,function(){

                socket.emit('sentArea', {area:sent});
              })
            } else {
              if(area.script[sent.index][0]=="gib") {
                qg.gibItem(socket,area.script[sent.index][1],area.script[sent.index][2],function(){
                  socket.emit('sentArea', {area:sent});

                })

              }

            }
          } else {
              socket.emit('sentArea', {area:sent});

          }




        })

      } else {

        sent.index=qg.getIndex(area,socket,data);
        //console.log("sentindex");
        //console.log(sent.index)
        if(area.getIMG[sent.index]!=null) {
        sent.image=area.getIMG[sent.index];
        }
        sent.text=area.getTXT[sent.index];
        sent.choice=area.getCHOICE[sent.index];
        sent.areaName=area.name;

        if(area.isMap!=null) {
          console.log("map?");
            console.log(area.isMap[sent.index])
          if(area.isMap[sent.index]!=null) {


            sent.map=area.isMap[sent.index]

        }
        }
        if(area.script[sent.index]!=null&&reload==null) {

          if(isFunction(area.script[sent.index])){
            area.script[sent.index](socket,qg,function(){

              socket.emit('sentArea', {area:sent});
            })
          } else {
            if(area.script[sent.index][0]=="gib") {
              qg.gibItem(socket,area.script[sent.index][1],area.script[sent.index][2],function(){
                socket.emit('sentArea', {area:sent});

              })

            }

          }
        } else {
            socket.emit('sentArea', {area:sent});

        }

      }}



    })








}


start=function(app) {


  qg.app=app



  qg.app.lib.io.on('connection', (socket) => {


  socket.on('makeCharacter', (data) => {

  })
  socket.on('select',(data) => {

    qg.advance(data.choice,socket)

  })

  socket.on('joined', (data) => {




    if(socket.username!=null && socket.username!="") {

    var doc = db.User.findOne({username: socket.username}, function(err,obj) {

      if(obj.gamedata!=null) {

    } else {


        obj.gamedata=new Map()
socket.emit('reload', {id:"qg"});
    }


    if(obj.gamedata.get("qg")==null) {

      obj.gamedata.set("qg",{
        character:{
        class:null,
        inventory:{},

      },data:{
        flags:{

        },
        area:"first.js"
      }});

      socket.emit('reload', {id:"qg"});
    }
      obj.save().then(function(){
        console.log("do send")
        qg.sendRoom(qg.areas[obj.gamedata.get("qg").data.area],socket,true)

      })




    }


  )
}

  })
  })


//  //console.log(tai.app)
//  roomTemp=tai.app.lib.roomstuff.createRoom("taikyoku")
  //tai.app.lib.rooms[roomgamedata.id]=roomTemp
  ////console.log(tai.app.lib.rooms)







  return qg
}






module.exports=start;
