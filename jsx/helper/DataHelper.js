//CSVから停車場名と番号を返す
var stopNum = function() {
  var electron = window.require('electron');
  var remote = electron.remote;
  var fs = remote.require('fs');

  //ファイル読み込み
  var filename = "./data/stop_num_uniq.csv";
  var fileContent = fs.readFileSync(filename, 'utf8');

  // csv to array
  var list = [];
  var numList = [];
  var prevous_list = fileContent.split("\n");
  prevous_list.map(function(data) {
    var row = data.split(",");
    list.push(row[1]);
    numList.push(row[0]);
  });

  return {
    list: list,
    numList: numList
  };
}

module.exports.stopNum = stopNum;
