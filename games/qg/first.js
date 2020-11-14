room={}
room.name="Cave of Beginnings (Pronounced Beh-gennings (stressed first syllable))"
room.grant=function (socket,qg,then) {

qg.grantBattle(socket,then);

}

room.script={
"a;5":room.grant,
"a;6":["gib","sword.js",1]

}


room.getTXT={

  "a;1": "You awake on the cold damp floor. You're in a cave. ",
  "a;2": "Yes I know it's cliche but it's 2am right now for me just go along with it.",
  "a;3": "You awake in a cave. ",
  "a;4":"You take a look through the hole. It's very dark and you can't see anything at all!",
  "a;5":"Upon closer inspection however, you make out a glimmer in the dark.",
  "a;6":`Phewph. That could have been bad. You put your hand into questionable hole and have been rewarded with a sword.
  Its terrible genericness befits the fact that it will soon be replaced and promptly forgotten.`,

  "a;7":`It's probably no big surprise that you will now be railroaded into a scripted encounter you can't possibly lose. That is, unless you forget to equip that sword. Better go do that. Look left.`

}
room.getIMG={
"a;1":"cave1.png",
"a;2":"2am.png",
"a;3":"cave2.png",
"a;4":"hole.png",
"a;5":"hole2.png",
"a;6":"getsword.png"
}
room.getCHOICE={
  "a;1":[[  "Take note of the cliche", "n"]],


  "a;2":[[  "Go along with it", "n"]],
  "a;3":[["The hole","n"]],
  "a;4":[["Look Closer","n"]],
  "a;5":[["Put hand in questionable hole","n"]],
  "a;6":[["Take a deep breath for impending bullflummery","n"]],
  "a;7":[["Choo Choo!","b","minorannoyance.js"]]



}

room.isMap={

  "a;3": `<map id="map" name="map">
    <area target="" id="0" class="mclick" alt="Hole" title="Hole" href="#" coords="694,204,780,174,883,226,883,348,826,428,746,317" shape="poly">
  </map>`

}
//room.
module.exports=room;
