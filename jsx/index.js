var React = require('react');
var ReactDOM = require('react-dom');

var Container = require('./views/Container.jsx');

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <Container />
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
)
