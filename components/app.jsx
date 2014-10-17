/** @jsx React.DOM */
'use strict';

var React      = require('react');
var ReactAsync = require('react-async');
var request    = require('superagent');

// Components
var Form     = require('./form.jsx');
var PostsList = require('./postsList.jsx');

var App = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(callback) {
    request
      .get('http://localhost:8000/api/getPosts')
      .end(function(err, res) {
        callback(null, {
          posts: res.body
        });
      });
  },

  updateState: function() {
    request
      .get('http://localhost:8000/api/getPosts')
      .end(function(err, res) {
        this.setState({
          posts: res.body
        });
      }.bind(this));
  },

  render: function() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>Isomorphic example</title>
          <link rel="stylesheet" href="css/bootstrap.css" />
          <link rel="stylesheet" href="css/bootstrap-theme.css" />
        </head>
        <body>
          <section className="container">
            <h1>Isomorphic example</h1>
            <Form onSubmit={this.updateState} />
            <PostsList posts={this.state.posts} />
          </section>
        </body>
      </html>
    );
  }
});

module.exports = App;

if (typeof document !== 'undefined') {
  React.renderComponent(App(), document);
}
