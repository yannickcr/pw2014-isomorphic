'use strict';

var express    = require('express');
var bodyParser = require('body-parser');

require('node-jsx').install();

global.server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.use(express.static('public'));
server.use(express.static('node_modules/bootstrap/dist'));
server.use(function(req, res) {
    res.status(404);
    res.end();
});
server.listen(8000, function() {
  console.log('Server started on http://localhost:8000');
});
