var React = require('react');


//スタイル
var ulStyles = {
  listStyleType: "none"
};
var liStyles = {
  borderBottom: "1px solid black",
  lineHeight: "2em",
  fontSize: "1.5em",
  background: "linear-gradient(to bottom, #eee, white)",
  paddingLeft: "1em"
};

var Getonoff = React.createClass({
  renderRow: function(num, str) {
    return(
      <li style={liStyles}>{str}</li>
    )
  },
  render: function() {
    var lists = require('../helper/DataHelper.js').stopNum();
    var numList = lists.numList;
    var list = lists.list;

    var rows = [];
    for(var i = 0; i < list.length; i ++ ) {
      rows.push(this.renderRow(numList[i], list[i]));
    }

    return (
      <ul style={ulStyles}>
        {rows}
      </ul>
    );
  }
});

module.exports = Getonoff;
