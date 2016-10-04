var process = require('process')

var pwd = ('' + process.argv.slice(2))

if (pwd == '') {
  process.chdir(process.cwd())
}
else {
  process.chdir(pwd)
}

var http = require('http')
var url = require('url')
var mime = require('mime')
var moment = require('moment')
var fs = require('fs')
var path = require('path')

function onRequest (request, response)
{
  var uri = url.parse(request.url).pathname
  var filename = path.join(process.cwd(), uri)

  var pathname = url.parse(request.url).pathname

  W_Log(pathname)

  var ThePath = url.parse(request.url).pathname

  ThePath = ThePath.substring(1)

  if (fs.existsSync(ThePath) || (ThePath == '') || (!isNaN(Number(ThePath)))) {
    if ((ThePath == '') || (!isNaN(Number(ThePath)))) {
      response.writeHead(200, {'Content-Type': 'text/html'})

      if (fs.existsSync('index.html')) {
        response.write(fs.readFileSync('index.html', 'utf8'))
      }
      else {
        response.write('404', 'utf8')
      }
    }

    else {
      console.log((__dirname + '/' + ThePath) + ' ' + __filename)
      if ((__dirname + '/' + ThePath) != __filename) {
        response.writeHead(200, {'Content-Type': mime.lookup(filename)})
        response.write(fs.readFileSync(ThePath, 'binary'), 'binary')
      } else {
        response.writeHead(404, {'Content-Type': 'text/html'})
        if (fs.existsSync('404.html')) {
          response.write(fs.readFileSync('404.html', 'utf8'))
        }
        else {
          response.write('404', 'utf8')
        }
      }
    }
  }
  else {
    response.writeHead(404, {'Content-Type': 'text/html'})
    if (fs.existsSync('404.html')) {
      response.write(fs.readFileSync('404.html', 'utf8'))
    }
    else {
      response.write('404', 'utf8')
    }
  }
  response.end()
}

function W_Log (LMsg) {
  var now = moment().format('YYYY/MM/DD HH:mm:ss.SSS')
  console.log(now + ' : ' + LMsg)

  if (fs.existsSync('/var/log/HTTP_Server/')) {
    fs.appendFile('/var/log/HTTP_Server/http.log', (now + ' : ' + LMsg + "\n"))
  }
  else {
    fs.mkdir('/var/log/HTTP_Server/')
    fs.appendFile('/var/log/HTTP_Server/http.log', (now + ' : ' + LMsg + "\n"))
  }
}

http.createServer(onRequest).listen(80)
console.log("Requests are logged in /var/log/HTTP_Server/http.log")
W_Log(('Serving ' + process.cwd()))
