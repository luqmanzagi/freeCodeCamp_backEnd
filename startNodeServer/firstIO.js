var fs = require('fs');
var path = process.argv[2];

// var open = fs.readFileSync ('/home/zagi/Documents/log.txt');
var open = fs.readFileSync (path);
var line = open.toString().split('\n').length -1;
console.log(line);