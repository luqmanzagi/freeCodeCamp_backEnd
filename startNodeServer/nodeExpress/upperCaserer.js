const http = require ('http');
const fs = require('fs');
const map = require('through2-map')

var server = http.createServer(function(req,res){
    if (req.method == 'POST'){
        req.pipe(map(function(chunk){
            return chunk.toString().split('').join('').toUpperCase();
        })).pipe(res)
    }
})

server.listen(process.argv[2])