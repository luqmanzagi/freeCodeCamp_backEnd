var http = require('http');
var bl = require('bl');
var addr = process.argv[2];

// without npm

// http.get(addr, function(res){
//     body = '';
//     res.setEncoding('utf8')
//     res.on('error', function(error){
//         console.log('error')
//     });
//     res.on('data',function(chunk){
//         body += chunk;
//     });
//     res.on('end',function(){
//         console.log(body.length);
//         console.log(body);
//     })
// })

//with npm

http.get(addr,function(res){
    res.setEncoding('utf8');
    res.pipe(bl(function (err,data ){
        if (err){
            console.log(err);
        }
        console.log(data.length);
        console.log(data.toString());
    }))
})
