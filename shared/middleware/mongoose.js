const mongoose = require('mongoose');

module.exports = function() {

  var MONGODB_URI = process.env.PROD_MONGODB || "mongodb+srv://goodiesohhi:Xtq2663BdpFeugE@taikyoku1-ymrbh.mongodb.net/test?retryWrites=true&w=majority";

  mongoose.Promise = global.Promise;

  var yes=mongoose.connect(MONGODB_URI);

  return yes;
}
