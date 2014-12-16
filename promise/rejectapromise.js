var q = require('q')
var defer = q.defer()

defer.promise.then(null,readError)
setTimeout(defer.reject,300,new Error(["REJECTED!"]))

function readError(err) {
  console.log(err.message)
}
