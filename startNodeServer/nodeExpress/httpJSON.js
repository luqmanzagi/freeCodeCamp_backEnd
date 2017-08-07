const http = require('http');
const url = require('url');

var server = http.createServer(function (req, res){
    res.writeHead(200,{'Content-type':'application/json'});
    var urlQuerry = url.parse(req.url, true);
    var timeParse = new Date(urlQuerry.query.iso);
    if (urlQuerry.pathname == '/api/parsetime'&& urlQuerry.query.iso){
        
        var retTime = {
            'hour' : timeParse.getHours(),
            'minute': timeParse.getMinutes(),
            'second': timeParse.getSeconds()
        };
        res.end(JSON.stringify(retTime));
    }
    else if (urlQuerry.pathname == '/api/unixtime'){
        res.end(JSON.stringify({ 'unixtime': timeParse.getTime()}))
    }
    else{
        console.log('404')
    }
}).listen(process.argv[2]);