var express = require('express');
// var http = require ('http');


var app = express();

app.get('/home',function(req, res){
    res.end('Hello World!');
}).listen(process.argv[2])

// http.createServer(app).listen(process.argv[2])