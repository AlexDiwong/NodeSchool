var mymodule = require('./mymodule.js')

var path = process.argv[2];
var filter = process.argv[3];

mymodule(path,filter, function(err,data) {
  if (err) return console.error('There was an error:', err);
  data.forEach(function (file) {
    console.log(file);
  })
})
