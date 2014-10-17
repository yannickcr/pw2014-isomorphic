/** @jsx React.DOM */
'use strict';

var React   = require('react');
var request = require('superagent');

var Form = React.createClass({

  addPost: function(e) {
    e.preventDefault();

    var content = this.refs.content.getDOMNode().value;

    if (!content) {
      return;
    }

    request
      .post('http://localhost:8000/api/addPost')
      .send({
        content: content
      })
      .end(this.props.onSubmit);

    this.refs.content.getDOMNode().value = '';

  },

  render: function() {
    return (
      <form method="post" action="/api/addPost" onSubmit={this.addPost}>
        <div className="form-group"><textarea className="form-control" name="content" ref="content"></textarea></div>
        <div className="form-group"><button className="btn btn-primary" type="submit">Submit</button></div>
      </form>
    );
  }
});

module.exports = Form;
