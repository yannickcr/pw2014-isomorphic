/** @jsx React.DOM */
'use strict';

var React = require('react');

var Post = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">{this.props.content}</li>
    );
  }
});

module.exports = Post;
