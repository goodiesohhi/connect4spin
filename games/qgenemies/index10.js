
start = function() {
console.log("hey")
var normalizedPath = require("path").join(__dirname, "");

areas={}

console.log(normalizedPath)

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  console.log("yo");
  if(file!="index10.js") {
  console.log(normalizedPath+"\\" + file)
  areas[file]=require(normalizedPath+"\\" + file);

  areas[file].id=file
}
});


return areas
}


module.exports=start;
