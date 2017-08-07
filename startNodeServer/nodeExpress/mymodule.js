var fs = require('fs');
var path = require('path');

module.exports=function(dir, ext, data){
    fs.readdir(dir, function(err,list){
        if (err){
            data(err);
        }else{
            list = list.filter(function(file){
                if (path.extname(file)==='.'+ext){
                    return true;
                }
            })
            data(null, list);
        }
    })
}