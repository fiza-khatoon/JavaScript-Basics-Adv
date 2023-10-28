// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>MATHs METHOD<<<<<<<<<<<<<<
     //examples
// console.log(Math)
// console.log(Math.random());
console.log("\n");

//>>>>>>Decimal values methods

let val=97.678;
console.log(Math.round(97.678));/*wrap up integer to its nearest round off */
// console.log(Math.ceil(val))
console.log(Math.ceil(23.9)); /*take the just upper value after integer part*/
console.log(Math.ceil(3.1));
// console.log("  ")
console.log(Math.floor(23.9));/* take the exact value of integer part*/
console.log(Math.floor(3.1));
console.log("  ")
// >>>>>MIN AND MAX CONCEPT:-

console.log(Math.min(2,8,1,0,98)) 
console.log(Math.max(2,8,1,0,98)) 

//>>>>>>>Random Method>>>>>>>>>
console.log(Math.random());         /*give random values between 0 to 1 */
console.log(Math.random()*10+ 1);   /*give values after one integer part avoiding 0 thats why we add 1*/
console.log((Math.random()*10 )+1); /*wrap up to  values random values*/
console.log(Math.floor(Math.random()*10 )+1); /*wrap up inetegr values*/
 
console.log(" ")
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min +1)) +min) /* to print values from 10 to 20 thats why we take min and max values basically we taken a range(10,20)*/











