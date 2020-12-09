let result = 0;

for (let i = 2; i < ProcessingInstruction.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)

// let args = process.argv.slice(2);
// let sum = args.reduce(function(acc, curr){
//     return +acc + +curr;
// });

// console.log(sum);