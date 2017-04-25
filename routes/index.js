const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function(io) {
  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    let formName = "Your name here"
    res.render( 'index', { tweets: tweets, showForm: true, formName: formName } );
  });

  // router.get('/stylesheets/style.css', function(req,res, next) {
  //   res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public'})
  // });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true, formName: name } );
  });

  router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    var list = tweetBank.find( {id: id} );
    res.render( 'index', { tweets: list, showForm: false } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  // io.sockets.emit('newTweet', {

  // });

  router.use(express.static('public'));

  return router;
};
