/** @jsx React.DOM */
'use strict';

var React = require('react');

// Components
var Post = require('./post.jsx');

var PostsList = React.createClass({

  renderPosts: function() {

    var list = [];

    for(var i in this.props.posts) {
      var post = this.props.posts[i];
      list.push(<Post key={post.id} content={post.content} />);
    }

    return list;
  },

  render: function() {
    return (
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
    );
  }
});

module.exports = PostsList;
