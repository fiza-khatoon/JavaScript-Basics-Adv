//  >>>>>>DATE TIME>>>>>>>>>>>>>>

// >>>>>>using object>>>>>>

 let date=new Date()
 console.log(date)     /*give uneven dates which is not easily understood*/
 console.log(typeof date)
 console.log(" ")

 console.log(date.toString()) /*give better format than previous one*/
 console.log(date.toDateString());
 console.log(date.toLocaleDateString());
 console.log(" ")
// >>>>>>>>new format>>>>>
// Date(year,month, date) as in javascript month start from 0-jan 1-feb and so on*/ 
 let newdate=new Date(2023, 1, 12)
 console.log(newdate.toLocaleDateString())