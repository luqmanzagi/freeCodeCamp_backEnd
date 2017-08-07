var express = require('express');
var fs = require('fs');;

var app = express()

app.get('/books', function(req, res){
    var read = fs.readFile(process.argv[3], function(err, data){
        if (err) {return res.send(500)}
        var books = JSON.parse(data)
        res.json(books)
    })
}).listen(process.argv[2])