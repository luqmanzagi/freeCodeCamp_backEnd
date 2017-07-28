var http = require('http');
var inputPath = process.argv[2]

http.get(inputPath,function callback(res) {
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log(chunk)
    });
    res.on('error',function(error){
        console.log('error')
    })
})