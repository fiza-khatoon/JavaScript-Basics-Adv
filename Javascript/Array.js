// >>>>>>>>>>>>>>>>>>>>>Array Declaration>>>>>>>>>>

// >>>>>first declaration>>>>
       //   let arr=[1,2,3,4,5];

// >>>>>>>>second dec>>>>
       let arr=new Array(1,2,3,4,5)

//>>>>>>>>>>>>>>>>>>>>>>Array Operations>>>>>>

// const arr2 =new  Array(2,3,4,5,6,7);
// >>>>>>>>>>>>>>>>>>>
arr.push(7)
console.log(arr);
console.log(" ")
// >>>>>>>>>>>>>>>>>>>>>
arr.pop()
console.log(arr);
console.log(" ")
// >>>>>>>>>>>>>>>>>>>>>>>>same as push but from starting index
arr.unshift(0)
console.log(arr);
console.log(" ")
// >>>>>>>>>>>>>>>>>>>>>>>>>>>same as pop but from starting index of an array
arr.shift()
console.log(arr);
console.log(" ")
// >>>>>>>>>>>>>>>>>>>>>>>>
// arr.index()
console.log(arr.indexOf(3));
console.log(" ")
// >>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(arr.includes(8));
console.log(" ");

// >>>>>>>>>>>>>>>>>>>>>>>>>>Converting aarya into string>>>>>>>>

const arrnew=arr.join()
console.log(arrnew)
console.log(typeof(arrnew)) ;

// >>>>>>>>>>>>>>>>>toString

const arr3=arr.toString();
console.log(arr3);
console.log(typeof(arr3));
console.log(" ");


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SLICE AND SPLICE DIFFERENCE>>>>>>>>>>>>>>>>>>>>>>





