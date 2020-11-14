const express = require('express');

const router = express.Router();
var app=0;



start=function(appz) {

  app=appz;
  router.use(require('./htmlRoutes')(app));

  return router
}
module.exports=start
