var fs = require('fs');

var filename = process.argv;

var buff = fs.readFileSync(filename[2]);

var str = buff.toString();

var strArr = str.split('\n');

console.log(strArr.length -1);
