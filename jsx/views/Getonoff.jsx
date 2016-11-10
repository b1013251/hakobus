var React = require('react');

var ulStyles = {
  borderBottom : '1px solid black'
}

var Getonoff = React.createClass({
  render: function() {
    return (
      <div style={ulStyles}>
        <ul>
          <li>乗車：</li>
          <li>降車：</li>
        </ul>
      </div>
    );
  }
});

module.exports = Getonoff;
