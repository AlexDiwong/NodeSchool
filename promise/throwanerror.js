var q = require('q')

function parsePromised(data) {
  var def = q.defer(), result

  try{
    result = JSON.parse(data)
  } catch (e) {
    def.reject(e)
  }
  def.resolve(result)
  return def.promise
}

parsePromised(process.argv[2]).then(null, console.log)
