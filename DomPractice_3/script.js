
var Play=document.querySelector("#Ground") 

Play.addEventListener("mousemove",function(details){    //details is for storing mouse ki location on rectangle, when we use mousemove event
    // console.log("hey");                           //to check event mousemove work or not

    // console.log(Play.getBoundingClientRect())
    var Location=Play.getBoundingClientRect();           
    // console.log(Location)                            //give rectangle leftborder location right border location in x and y axis

    // console.log(details);                           //mouse location on rectangle

    // console.log(details.clientX);                    //clientX: tells where you are in x-axis or simply give width 
    // console.log(details.clientX-Location.left);      //Location.left will give location of left side from x axis
                                                       //details.clientX is mouse point in axis in rectangle - Location.left is border point in axis

     var insidePlay=details.clientX-Location.left;

     if(insidePlay<Location.width/2)                   //to check whether thw cursor is in left side or right side
     {
        var redcolor=gsap.utils.mapRange(0,Location.width/2,255,0,insidePlay);
        gsap.to(Play,{
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4
        });
     }
     
     else{
        var bluecolor=gsap.utils.mapRange(Location.width/2,Location.width,0,255,insidePlay);
        gsap.to(Play,{
            backgroundColor: `rgb(0,0,(${bluecolor})`,
            ease: Power4
        });
     }

     
                                                       
});
Play.addEventListener("mouseleave",function(){
    // Play.style.backgroundColor="white"
    gsap.to(Play,{
        backgroundColor: "white",
    })
})







