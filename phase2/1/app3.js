//** IsUniformd */
/* 
function isUniform(arr){
    let first = arr[0];
    for (let i=0; i <arr.length; i++){
        if (arr[i] !== first){
            return false;
        }
    }
    return true; 
}

let data = [-5,100,4,5,3];
let result=0; 


data.forEach(function(input){
    result = result + input;
});
console.log(result);
result =0;

function sumArray(input){
    for (let i =0; i < data.length ; i++){ 
        result += input[i];
    }
    console.log(result);
}

sumArray(data);

console.log("Calculate max value ! ");
let maxValue = 0 ;

function max(data){
    data.forEach(function(input){
        if (input > maxValue){
            maxValue=input;
        }
    });
    console.log(maxValue);
}

max(data);



let person = {
    name: "sylvain",
    age : 26,
    gender: "male"
}

console.log(person.name);

//Objects inside an array
let house = [
    {
        location : "Bahamas",
        material : "Bricks",
        entries : ["Main Entrance", "Backyard"]
    },
    {
        name : "House of Love",
        inhabitant : [ "Sarah", "Sylvain"]
    }
];

//Exercice 2

let someObject = {
    friends : [
        {name : "malfoy"},
        {name : "Crabbe"},
        {name : "Goyle"},
    ],
    
    color : "baby blue ",
    isEvil : true
};

console.log(someObject.friends[0].name);
*/
//Movie Exercice

let tab = [
    {
       name : "In bruges",
       rate : 5,
       hasWatched : true
    },
    {
       name : "Frozen",
       rate : 4.5,
       hasWatched : false
    },
    {
       name : "Mad Max Fury Road",
       rate : 5,
       hasWatched : true
    },
    {
       name : "Steve Jobs",
       rate : 5,
       hasWatched : true
    },
    {
        title :"hacked",
        alert : function(){
            alert("This is Working");
        }
    }
]


tab.forEach(function(item){
    if (item.hasWatched){
        console.log("You have watched " + item.name + " " + item.rate+" stars" )
    }
    else{
        console.log("You haven't watched " + item.name + " " + item.rate+" stars" )
    }
});

let comments = {};
comments.data = ["Good job!" , "Lame"];


comments.print=function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}
