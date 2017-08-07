var fs = require('fs');
var path = require('path');
var pathGiven = process.argv[2];
// var pathGiven = ('/home/zagi/Documents');
var extFilter = process.argv[3];

function ext(element){
    var extName = path.extname(element);
    return extName =='.'+extFilter;
}

fs.readdir(pathGiven, function(err,data){
    if (err){
        throw err;
    }
    data.filter(ext).forEach(function(value){
        console.log(value);
    })
})
