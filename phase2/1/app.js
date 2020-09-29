var name = prompt("What is your name?");

alert("Nice to meet you " + name);
console.log("Nice to meet you " + name + " from the console");



var name = prompt("First name ?");
var last = prompt("Last name ? ");
var age = prompt("age? ");

var fullname = name + " " + last ; 
console.log("Your full name is " + name + " " + last);
console.log("You are " + age +" years old");


let age = prompt("How old are you?");
let result = age * 365.25;

console.log("you've been alive since " +result +" days");



let age = prompt("age? ");

if ( age < 0 ){
    console.log("Error message");
}
else if ( age == 26 ){
    console.log("Happy 26th birthday ! ");
}
else if ( age % 2 !== 0 ){
    console.log("Age is odd ");
}
else {
    console.log("no age");
}


var secretNumber = 4;

var guest=0;

do {
   var guest = prompt("Guess the number");

    if ( Number(guest) === secretNumber){
        alert("You've got it right");
        console.log(guest);
    }
    else if (Number(guest)> secretNumber) {
        alert("too high");
    }
    else if (Number(guest) < secretNumber) {
        alert("too low");
    }
} while (secretNumber != Number(guest));


console.log("print all numbers between -10 and 19")
var count = -10 ;

while ( count < 20){
    console.log(count);
    count++;
}

console.log("Print all even numbers between 10 and 40")
var count = 10 ;
while ( count < 42){
    console.log(count);
    count+=2;
}

console.log("Print all odd numbers between 300 and 33")
var count = 300 ;
while ( count < 333){
    if (count % 2){
        console.log(count);
    }
    count++;
}

console.log("Print all numbers divisble by 5 and 3 between 5 and 50)
var count = 5 ;
while ( count < 51){
    if ( count %5 === 0 && count %3 ===0  ){
        console.log(count);
    }
    count++;
}


var answer = prompt( "Are we there yet ?" );

while (answer != "yes" ){
    var answer = prompt( "Are we there yet ?" );
}
alert("We've made it!");


for (let i =0; i <16 ; i++){
    console.log(i);
}