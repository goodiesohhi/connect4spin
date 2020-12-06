const mongoose = require('mongoose');

module.exports = function() {

  var MONGODB_URI = "mongodb://localhost:3000/";

  mongoose.Promise = global.Promise;

  var yes=mongoose.connect(MONGODB_URI);

  return yes;
}
