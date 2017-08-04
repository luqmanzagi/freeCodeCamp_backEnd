var express = require('express');
var bodyP = require('body-parser');

var app = express();
app.use(bodyP.urlencoded({extended: false}))

app.post('/form', function(req, res){
    res.send(req.body.str.split('').reverse().join(''))
}).listen(process.argv[2])