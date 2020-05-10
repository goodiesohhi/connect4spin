const mongoose = require('mongoose');

module.exports = function() {
  // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
  var MONGODB_URI = process.env.PROD_MONGODB || "mongodb+srv://goodiesohhi:Xtq2663BdpFeugE@taikyoku1-ymrbh.mongodb.net/test?retryWrites=true&w=majority";

  // Configure mongoose to use Promises, because callbacks are passe.
  mongoose.Promise = global.Promise;
  // Connect to the Mongo DB
  return mongoose.connect(MONGODB_URI);
}
