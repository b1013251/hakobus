var React = require('react');

var electron = window.require('electron');
var remote = electron.remote;
var request = remote.require('request');
var cheerio = remote.require('cheerio')
var iconv = remote.require('iconv-lite')


var Result = React.createClass({
  getInitialState: function() {
    return {
      result: "now loading"
    };
  },
  componentDidMount: function() {
    var options = {
      url: 'http://www.hakobus.jp/result.php?in=165&out=149',
      encoding: null //nullだとバイナリとして帰ってくる（後でiconvでデコード）
    }
    request(options,
      (function(err, response, body) {
        if(!err) {
          this.setState({
            result: body
          })
        }
      }).bind(this)
    );
  },
  render: function() {
    var result = this.state.result;
    var $ = cheerio.load(iconv.decode(result,'shift_jis'));
    var text = $('div#result').text();
    return (
      <div>
        {text}
      </div>
    );
  }
});

module.exports = Result;
