var fs = require('fs');
var path = process.argv[2];
var line;

var open = fs.readFile(path, function(err,data){
    if (err){
        throw err;
    }line = data;
    console.log(line.toString().split('\n').length -1);
})