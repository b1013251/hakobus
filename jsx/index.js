var React = require('react');
var ReactDOM = require('react-dom');

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hey</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
)
