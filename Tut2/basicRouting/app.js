var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html');
    myReadStream.pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/contact.html');
    myReadStream.pipe(res);
  } else if (req.url === '/api') {
    var myObj = {
      name: "Gogu",
      prenume: "Vasile",
      age: 33
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(myObj));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log("Serverul asculta la portul 3000");
