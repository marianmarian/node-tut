var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:nume', function(req, res) {
  var data = {
    age: 33,
    job: 'Ninja'
  }
  res.render('profile', {person: req.params.nume, data: data});
});

app.listen(3000);
