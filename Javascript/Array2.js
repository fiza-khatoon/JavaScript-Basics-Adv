// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SLICE AND SPLICE DIFFERENCE>>>>>>>>>>>>>>>>>>>>>
// let arr=new Array(1,2,3,4,5)
// console.log("original array", arr);
// console.log(" ");

  // >>>>>>>>>>SLICE>>>>>>>>>SLICE() this method basically slice that interval part from starting to  end(excluding) like slice[1,3) means print 1,2 only

// const slicearr=arr.slice(1,3)
// console.log("original Array",arr)
// console.log("Sliceed part",slicearr); 
// console.log(" ");
// >>>>>>>>>>>>SPLICE>>>>>>>>Splice() this method is basically take those index values  from given interval and print it like splice(1,3) means take 1,2,3 and print it.
// const splicearr=arr.splice(1,3)
// console.log("original array",arr);
// console.log("Spliced part",splicearr);
// console.log(" ")
let arr2=["Banana", "Orange", "Apple", "Mango", "Kiwi"]
// console.log(arr2)
// const splicearr2=arr2.splice(1,3)
// console.log("orignal array",arr2);
// console.log("Spliced part",splicearr2);
console.log(" ")
console.log(arr2.splice(1,3,"hi"));
console.log(arr2);
