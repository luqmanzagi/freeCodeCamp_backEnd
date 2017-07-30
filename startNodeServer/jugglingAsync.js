var http = require('http');
var bl = require('bl');
var addr1 = process.argv[2], addr2 = process.argv[3], addr3 = process.argv[4];

//long way to go

// http.get(addr1,function(res1){
//     res1.pipe(bl(function(err,data){
//         if (err){
//             console.log(err);
//         }
//         console.log(data.toString());
//         http.get(addr2, function (res1) {
//             res1.pipe(bl(function (err, data) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 console.log(data.toString());
//                 http.get(addr3, function (res1) {
//                     res1.pipe(bl(function (err, data) {
//                         if (err) {
//                             console.log(err);
//                         }
//                         console.log(data.toString());
//                     }))
//                 })
//             }))
//         })
//     }))
// })



//simplified
var result = [];


function juggling (iterasi){
    for (let x = 0; x< iterasi; x++){
        http.get(process.argv[2+x],function(res){
            res.pipe(bl(function(err,chunk){
                if (err){
                    console.log(err);
                }
                console.log(chunk.toString());
            }))
        })
    }
}

juggling(3);