var express = require('express');
var app = express();
var materialize = require('materialize');

app.set('view engine', 'pug');
app.set('views', './views');

//Keep static resources like images in the public folder
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.render('index');
});

module.exports = app;
