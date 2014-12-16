var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var result
  var path = url.parse(req.url,true)
  var d = new Date(path.query["iso"])
  if (path.pathname === "/api/parsetime"){
    result = JSON.stringify({hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds()})
  }
  if (path.pathname === "/api/unixtime") {
    result =JSON.stringify({unixtime: d.getTime()})
  }
  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(result)
  } else {
    res.writeHead(404)
    res.write("<html><body>Sidan finns inte!</body></html>")
    res.end()
  }
})

server.listen(process.argv[2])
