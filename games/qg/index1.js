
start = function() {
console.log("hey")
var normalizedPath = require("path").join(__dirname, "");

areas={}

console.log(normalizedPath)

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  console.log("yo");
  if(file!="index1.js") {
  console.log("./" + file)
  areas[file]=require("./" + file);
  areas[file].id=file
}
});

console.log(areas)
return areas
}


module.exports=start;
