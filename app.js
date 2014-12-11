var express = require('express');
var app = express();
var http = require('http');
var engine = require('ejs-locals');

app.engine('html', require('ejs').renderFile);
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/js", express.static(__dirname + '/public/js'));
app.set('views', __dirname+'/views');
app.set('view engine', 'html'); // default view engine

app.get('/', function(req, res) {
  res.render('homepage');
});

http.createServer(app).listen(3001);
