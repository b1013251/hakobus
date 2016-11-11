var React = require('react');

var Getonoff = require('./Getonoff.jsx');
var Select   = require('./Select.jsx');
var Result   = require('./Result.jsx')

var Container = React.createClass({
  getInitialState: function() {
    return {
      inStop : 165,
      outStop: 149
    };
  },
  render: function() {
    return (
      <div>
        <Result />
      </div>
    );
  }
});

module.exports = Container;
