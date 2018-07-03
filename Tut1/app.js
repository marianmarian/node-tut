var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

/*
myReadStream.on('data', function(chunk) {
  console.log("New chunk received: ");
  console.log(chunk);
  myWriteStream.write(chunk);
});
*/
myReadStream.pipe(myWriteStream);


const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);

  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);

  } else if (req.url === '/contact-us') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/ninjas') {
    res.writeHead(200, {'Content': 'application/json'});
    var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log("Serverul asculta la portul 3000");
