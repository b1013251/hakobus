var React = require('react');

var Getonoff = require('./Getonoff.jsx')

var Container = React.createClass({
  getInitialState: function() {
    return {
      inStop : 0,
      outStop: 0
    };
  },
  render: function() {
    return (
      <div>
        <Getonoff inStop={this.state.inStop} outStop={this.state.outStop} />
      </div>
    );
  }
});

module.exports = Container;
