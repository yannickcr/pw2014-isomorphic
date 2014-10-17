/** @jsx React.DOM */
'use strict';

var React   = require('react');
var request = require('superagent');

var App = React.createClass({

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
      .end();

    this.refs.content.getDOMNode().value = '';

  },

  render: function() {
    return (
      <section className="container">
        <h1>Isomorphic example</h1>
        <form method="post" action="/api/addPost" onSubmit={this.addPost}>
          <div className="form-group"><textarea className="form-control" name="content" ref="content"></textarea></div>
          <div className="form-group"><button className="btn btn-primary" type="submit">Submit</button></div>
        </form>
        <ul className="list-group">
        </ul>
      </section>
    );
  }
});

module.exports = App;

if (typeof document !== 'undefined') {
  React.renderComponent(App(), document.body);
}
