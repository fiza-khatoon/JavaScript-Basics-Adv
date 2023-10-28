// >>>>>>>>>>>>>>>>>>>>Function Types>>>>>>>>>>>>>>

//  a set of instructin or code used to perform some specific task

                        // 1.Function without parameters

function Greet(){
    console.log("hello Git hub fam");
}
Greet() ;                                           //calling the function
console.log(" ");

                        // 2. Function with parameters

function Add(a,b){                                  //this is called "parameter"
    console.log("result "+ (a+b));
}
Add(3,4)                                            //this is called Arguments
console.log(" ");

// >>>>>>>>>>>>>>>>Function with Objects And Array>>>>>>>>>>>>

const obj={
    name:"Wahib",              
    Class:10,                  
    Roll:1,
}

function Identity(anyobject)
{
    console.log(`My name is ${anyobject.name},i read in class ${anyobject.Class},my roll number is ${anyobject.Roll}`);
}
Identity(obj)  //u can call object as a argument in function calling or u can declare whole object i.e obj inside the functio calling like this

// Identity(obj={         //this is another way of declaring object directly at the time of function calling
//     name:"Wahib",                
//     Class:10,                  
//     Roll:1,
// })

// >>>>>>Array>>>>

function MyNumbers(arr)
{
    for(let i=0;i<arr.length;i++)   //same syntax of for loop
    {
        console.log(arr[i]+" ")
    }
}

MyNumbers(arr=[1,2,3,4,5,6,7])


