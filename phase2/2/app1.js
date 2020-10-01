// DOM : Document Object Model 
// it connects JS and HTML/CSS


var h1 = document.querySelector("h1");
var body = document.querySelector("body");
h1.style.color= "yellow";

var isBlue= false;

setInterval(function(){
    if(isBlue){
        body.style.background = "white";
    } else {
        body.style.background ="blue";
    }
    isBlue= !isBlue;
}, 10000);


// setInterval(function(){},TIME)

// document.getElementById()
// document.getElementByClassName()
// document.getElementsByTagName()
// document.querySelector()
