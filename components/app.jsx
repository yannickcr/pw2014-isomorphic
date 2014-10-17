/** @jsx React.DOM */
'use strict';

var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <section className="container">
        <h1>Isomorphic example</h1>
        <form method="post" action="/api/addPost">
          <div className="form-group"><textarea className="form-control" name="content"></textarea></div>
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
