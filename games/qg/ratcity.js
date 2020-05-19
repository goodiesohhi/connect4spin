room={}
room.name="The Rat City"
room.getTXT={

  "a;1": "You have arrived in the testing area known as rat city. This is a test map",
  "a;2": "It's a rat. Rat.",

}
room.getIMG={
"a;1":"rat.png",
}
room.getCHOICE={
  "a;1":[["Rat","n"]],


  //"a;2":[[  "Turn", "n"]]


}
room.scripts={}

room.isMap={
  "a;1":`
  <map id="map" name="map">
      <area href="#" id="0" class="mclick" target="" alt="Rat" title="Rat" href="" coords="154,458,424,579" shape="rect">
      <area target="" alt="Place" title="Place" href="" coords="688,285,879,368,815,331" shape="rect">
      <area target="" alt="Other place" title="Other place" href="" coords="279,104,120,47" shape="rect">
  </map>

  `

}
//room.
module.exports=room;
