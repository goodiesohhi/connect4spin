const mongoose = require('mongoose');

module.exports = function() {

  var MONGODB_URI = "mongodb://localhost:27017/";

  mongoose.Promise = global.Promise;

  var yes=mongoose.connect( MONGODB_URI, {useNewUrlParser: true});

  return yes;
}
