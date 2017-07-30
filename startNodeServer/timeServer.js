const net = require ('net');
var date = new Date();

function tambahNol(x){
    if (x<10) { return "0"+x}
    else{return x}
}


var hour = date.getHours();
var min = date.getMinutes();
var year = date.getFullYear();
var month = tambahNol(date.getMonth() + 1);
var day = tambahNol(date.getDate());

var tahun = year + "-" + month + "-" + day + " " + hour + ":" + min;

const server = net.createServer(function (socket){
    socket.on('error', function (err){
        throw err;
    });
    socket.write(tahun);
    socket.end('\n');
})

server.listen(process.argv[2]);