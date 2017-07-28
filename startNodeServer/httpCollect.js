// without npm

var http = require('http');
var addr = process.argv[2];

http.get(addr, function(res){
    body = '';
    res.setEncoding('utf8')
    res.on('error', function(error){
        console.log('error')
    });
    res.on('data',function(chunk){
        body += chunk;
    });
    res.on('end',function(){
        console.log(body.length);
        console.log(body);
    })
})