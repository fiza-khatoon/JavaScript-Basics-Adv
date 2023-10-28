// >>>>>>>>>>>Concatenation object>>>>>>>
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"f",
    4:"h"
}
const obj3={
    6:"g",
    7:"e"
}

const myobj={...obj1,...obj2,...obj3} //using spread operator we can concatenaate the objects together//
console.log(myobj);
console.log(" ")

// >>>>>>>>>>>>>>>>>>>>>more methods>>>>>>

const objnew={
    name:"Wahib",  //String
    Class:10,       //integer
    Roll:1,
    isStudent:true,  //boolean
    Subjects:["Maths","Phy","Chem"] //Array
}
console.log(Object.keys(objnew)) //fetch all keys name inside the objects//

console.log(Object.values(objnew)); ///fetch all keys ka values
console.log()