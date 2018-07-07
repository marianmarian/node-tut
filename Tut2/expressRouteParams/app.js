var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Aceasta este pagina principala");
});

app.get("/contact", function(req, res) {
  res.send("Aceasta este pagia de contact. Bau BAu");
});

app.get("/profile/:name", function(req, res) {
  res.send("Ati cautat id-ul: " + req.params.name);
});

app.listen(3000);
