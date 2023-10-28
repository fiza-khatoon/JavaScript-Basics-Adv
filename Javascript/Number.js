let v=new Number(33)
console.log(v);
console.log("\n")

console.log(v.toString());
console.log(typeof(v))  
console.log(v.toString().length);
console.log("\n")

console.log(v.toFixed(3)); /* work as a decimal values after integer part*/

console.log("\n")

console.log(v.toPrecision(5));

console.log("\n")
let val=2000000
console.log(val.toLocaleString('en-IN')); /*convert into indian terms to increase readbility of large numbers*/