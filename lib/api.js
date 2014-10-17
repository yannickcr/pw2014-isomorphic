'use strict';

var fs      = require('fs');
var express = require('express');
var posts   = require(__dirname + '/data.json');

module.exports =
  express()
    .get('/getPosts', function(req, res) {
      res.json(posts);
    })
    .post('/addPost', function(req, res) {
      var content = req.body.content;
      posts.unshift({
        id     : Math.round(Math.random() * 1e6),
        content: content
      });
      fs.writeFile(__dirname + '/data.json', JSON.stringify(posts), function() {
        res.redirect('/');
      });
    });
