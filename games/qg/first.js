room={}
room.name="Cave of Beginnings (Pronounced Beh-gennings (stressed first syllable))"
room.getTXT={

  "a;1": "You awake on the cold damp floor. You're in a cave. ",
  "a;2": "Yes I know it's cliche but it's 2am right now for me just go along with it",
  "a;3": "You awake in a cave. ",
  "a;4":"You take a look through the hole. It's very dark and you can't see anything at all!"

}
room.getIMG={
"a;1":"cave1.png",
"a;2":"2am.png",
"a;3":"cave2.png",
"a;4":"hole.png"
}
room.getCHOICE={
  "a;1":[[  "Take note of the cliche", "n"]],


  "a;2":[[  "Go along with it", "n"]],
  "a;3":[["The hole","n"]],



}

room.isMap={

  "a;3": `<map id="map" name="map">
    <area target="" id="0" class="mclick" alt="Hole" title="Hole" href="#" coords="694,204,780,174,883,226,883,348,826,428,746,317" shape="poly">
  </map>`

}
//room.
module.exports=room;
