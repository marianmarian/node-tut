var express = require("express");

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.get("/contact", function(req, res) {
  res.render('contact.ejs');
});

app.listen(3000);
