var fs = require('fs');
var p = require('path');

var path = process.argv[2];
var filter = process.argv[3];
filter = '.'+filter;

fs.readdir(path, function (err,list) {
  if(err) throw err;
  for (i = 0; i < list.length; i++) {
    if (p.extname(list[i]) == filter) console.log(list[i]);
  }
});
