const express = require('express');
const passport = require('passport');
const db = require('../shared/models');
const router = express.Router();
var app=0;


start=function(appz) {
  app=appz;

  router.get('/', (req, res) => {
    res.render('home', {
      user: req.user

    });

  });


  router.get('/games/connect4', (req, res) => {
    res.render('c4', {
      user: req.user,
      //work: app.lib.rooms[req.user.roomlock]
      //rooms:
    });
  });

  router.get('/login', (req, res) => {
    res.render('login', {
      flash: req.flash('error')
    });
  });

  router.post(
    '/login',
    passport.authenticate(
      'local',
      {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
      }
    )
  );

  router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  });

  router.get('/create', (req, res) => {
    res.render('create', {
      flash: req.flash('error')
    });
  });

  router.get('/games', (req, res) => {
    res.render('list', {
      user: req.user,

      flash: req.flash('error')
  });
  });



  router.post('/create', (req, res, next) => {
    const user = new db.User(req.body);
    user.save(req.body)
      .then(req => {
        res.redirect('/login');
      })
      .catch(err => {
        if (err.code === 11000) {
          req.flash("error", "Username in use.");
          return res.redirect('/create');
        }
        next(err);
      });
  });
  return router
}
module.exports=start
