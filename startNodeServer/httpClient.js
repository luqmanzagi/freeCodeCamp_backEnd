var http = require('http');
var addr = process.argv[2]

http.get(addr,function callback(res) {
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log(chunk)
    });
    res.on('error',function(error){
        console.log('error')
    })
})