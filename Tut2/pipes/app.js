var fs = require('fs');
var http = require('http');

//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' + 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res) {
  console.log('Un request a fost realizat: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Serverul asculta la portul 3000');
