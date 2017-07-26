const path = require ('path');
const mymodul = require('./mymodule.js');

var pathGiven = process.argv[2];
var ext = process.argv[3];

var callback = function (err, data){
    if (err) throw err;
    data.forEach(function(file){
        console.log(file);
    })
}

mymodul(pathGiven,ext,callback)