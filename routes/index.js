const express = require('express');

const router = express.Router();
var app=0;
// add HTML routes to current router


start=function(appz) {

  app=appz;
  router.use(require('./htmlRoutes')(app));

  return router
}
module.exports=start
