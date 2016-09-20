var http = require('http')
var url = require('url')

var moment = require('moment')
var fs = require('fs')

function onRequest (request, response)
{
  var pathname = url.parse(request.url).pathname
  var now = moment().format('YYYY/MM/DD HH:mm:ss.SSS ,')
  console.log(now, pathname)

  response.writeHead(200, {'Content-Type': 'text/html'})

  var ThePath = url.parse(request.url).pathname
  ThePath = ThePath.substring(1)
  console.log('path: ' + ThePath)

  if (fs.existsSync(ThePath) || (ThePath == '') || (!isNaN(Number(ThePath)))) {
    if ((ThePath == '') || (!isNaN(Number(ThePath)))) {
      response.write(fs.readFileSync('index.html', 'utf8'))
    }
    else {
      if (ThePath != 'server.js') { response.write(fs.readFileSync(ThePath, 'utf8')) } else { response.write(fs.readFileSync('404.html', 'utf8')) }
    }
  }
  else {
    response.write(fs.readFileSync('404.html', 'utf8'))
  }

  console.log(isNaN(Number(ThePath)))
// response.write(fs.readFileSync(ThePath , 'utf8'))
  response.end()
}

http.createServer(onRequest).listen(80)
var now = moment().format('YYYY/MM/DD hh:mm:ss.SSS ,')
console.log(now, 'Server has started!')

