var total = 0;
process.argv.forEach(function(item) {
    total += +item ? +item :0;
});

console.log(total);

//another way

// function plus(x,y){
//     return (x+y)
// }

// console.log(process.argv.slice(2).map(Number).reduce(plus));

//official
// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)
