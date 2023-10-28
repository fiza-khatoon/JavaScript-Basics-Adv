// >>>>>>STACK<<<<<<
/* where primitivs datatypes stores. it give a copy of primitive data types*/

let a=20;
let b=a;

console.log(a);
console.log(b);

// Now
b=++b;
console.log(a+" "+b); /* give a copy of original variables value*/

// >>>>>>>>>>HEAP<<<<<<<<<<<<<<

let arr=[1,2,4,5];

let arr2=arr;
console.log(arr);
console.log(arr2);
// arr2.push(2)
arr2.pop()
console.log(arr);
console.log(arr2); /* it will change in both array because heap store non primitive data type and it give reference of a variable*/

