var express = require('express');
var app = express();
var materialize = require('materialize');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(request, response) {
  response.render('index');
});

module.exports = app;
