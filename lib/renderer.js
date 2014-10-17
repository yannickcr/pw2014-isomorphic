'use strict';

var app        = require('./../components/app.jsx');
var ReactAsync = require('react-async');

module.exports = function render(req, res, next) {
  ReactAsync.renderComponentToStringWithAsyncState(app(), function(err, markup, data) {
    if (err) {
      next(err);
    }
    res.send(ReactAsync.injectIntoMarkup('<!doctype html>' + markup, data, ['scripts/app.js']));
  });
};
