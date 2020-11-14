const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongooseMap = require('mongoose-map')(mongoose);

const bcrypt = require('bcrypt');

const WORK_FACTOR = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String
  },
  joinDate:{
    type:String
  },
  roomlock:{
    type: Map
  },
  gamedata:{
    type:Map
  }
});

UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
      user.joinDate=dateTime
      next();
    });
  });
});



UserSchema.post('save', function(doc, next) {

  next();
});
UserSchema.methods.validatePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return reject(err);
      resolve(isMatch);
    });
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
