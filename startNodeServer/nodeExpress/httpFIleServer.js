const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res){
    var read = fs.createReadStream(process.argv[3]);
    read.on('open', function(){
        read.pipe(res);
    }).on('error', function(err){
        res.end(err);
    })
})
server.listen(process.argv[2]);