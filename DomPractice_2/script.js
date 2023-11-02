// var a=document.addEventListener("#bulb")
var a=document.querySelector("#bulb")
var butn=document.querySelector("button")
var flag=0

butn.addEventListener("click",function(){
    if(flag==0)
    {
        butn.innerHTML="OFF"
        a.style.backgroundColor="yellow"
        flag=1
    }
    else{
        butn.innerHTML="ON"
        a.style.backgroundColor="white"
        flag=0
    }
   
})