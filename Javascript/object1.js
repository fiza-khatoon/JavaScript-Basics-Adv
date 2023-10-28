// >>>>>>>>>>>>>>>>>>Declaratio of An OBJECT>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>Singleton-it means Object declare using constructor or new Keyword>>>>

// const obj=new Object();

// >>>>>>>>>>>>>>Using literals>>>>>>>>>>

// example of symbol in object

const mysym=Symbol("schooling")

const obj={
    name:"Wahib",                //String
    "full name":"Wahib Ahmad", //key in its original property  that is string
    Class:10,                  //integer
    Roll:1,
    isStudent:true ,            //boolean
    [mysym]:"school"

}
console.log(obj)
console.log(" ");

// >>>>>>>>>>>Fetching keys using>>>>>>>>>>>>

console.log(obj.name)   
console.log(obj["name"]);      //this is the case when u have symbol variable  as a key  inside object and also when u declare keys in String format like this
console.log(obj["full name"]); //you cant acces it using dot operator
console.log(obj[mysym]);





// >>>>>>>>>>>>>>>>>>>>>>>Array inside Object>>>>>>>>>.
const obj1={
    name:"Wahib",  //String
    Class:10,       //integer
    Roll:1,
    isStudent:true,  //boolean
    Subjects:["Maths","Phy","Chem"] //Array
}
console.log(obj1);
console.log(obj1.Subjects)
console.log(obj1.Subjects[2])

// >>>>>>>>>>>>>>>>>>>Function inside object>>>>>>>>>>>>>>

const obj2={
    name:"Wahib",  //String
    Class:10,       //integer
    Roll:1,
    isStudent:true,  //boolean
    Subjects:["Maths","Phy","Chem"],
    Marks:function()
    {
        console.log("marks is 400")
    }
}
console.log(obj2.Marks())

// >>>>>>>>>>>>>>>>>.Objects inside Objects>>>>>>>>>>>.
const obj3={
    name:"Wahib",  //String
    Class:10,       //integer
    Roll:1,
    isStudent:true,  //boolean
    Subjects:["Maths","Phy","Chem"],
    Marks:function()                   
    {
        console.log("marks is 400")
    },
    myobj:{ 
       
       State:"Mumbai",
       City:"Pune",
       myobj2:{
         Add:"pune city"
       }

    }
}

console.log(obj3.myobj.myobj2.Add)


// >>>>>>>>>>>>>>>>Freeze()>>>>>>>>

Object.freeze(obj3)  //we use this method to freeze all values inside the object so it will not change further//

obj3.Roll=3         //also it will not going  to give an error//
console.log(obj3);  //As value of roll key will not change because we laready freeze it in line number 90//







