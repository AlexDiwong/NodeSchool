var q = require('q')
var def = q.defer()

function attachTitle(data) {
  return "DR. " + data
}

def.promise.then(attachTitle).then(console.log)
def.resolve("MANHATTAN")
