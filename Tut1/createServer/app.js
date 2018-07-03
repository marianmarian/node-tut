const http = require("http");

const server = http.createServer((req, res) => {
  console.log("S-a produs un request: " + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World");
});

server.listen(3000, '127.0.0.1');
console.log("Serverul asculta la portul 3000");
