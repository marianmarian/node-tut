var http = require('http');


var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  console.log("A fost realizat un request: " + req.url);

  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 28
  }
  res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1');
console.log("Serverul asculta la portul 3000");
