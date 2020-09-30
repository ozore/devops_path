/*  

function doSomething(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let city = "paris";
let result = doSomething(city);
console.log(result);

let sayHi = function() {
    console.log("DONE");
}

sayHi();

------------------------------------------------------------

let isEven = function(nb) {
//    if (nb%2 == 0 ){
//    console.log( nb + " is even");
//    }
//    else {
//        console.log(nb +" is not even");
//    }
    return nb%2 == 0;
}
isEven(4);
isEven(21);
isEven(68);
isEven(33);

------------------------------------------------------------
console.log("Factorielle");
let factorial = function(nb) {
    
    let result = 1;

    for (let i= 2; i <= nb ; i++ ){
        result = result * i ;
    }
    return result;
}

console.log(factorial(4));

------------------------------------------------------------


let kebabToSnake = function(str){
    const cherche = "-";
    const remplace = "_";
    
    const result = str.split(cherche).join(remplace);
    return result;
}


console.log(kebabToSnake("sylvain-petit"));
------------------------------------------------------------


let tableau = [ "Potter" ,"ron", "hermione"];

tableau.push("Hagrid");
//console.log(tableau[0].length);

tableau.indexOf("Hagrid");
//console.log("Hello " + tableau[3]);

let main = tableau.slice(0,3);
//console.log(main);
main = tableau.slice(2,3);
//console.log(main);

tableau.forEach(function(cyber) {
    console.log("Inside the foreach " + cyber);
});

function printColor(color){
    console.log("**********");
    console.log(color);
    return 0;
}
tableau.forEach(printColor);





------------------------------------------------------------

window.setTimeout(function() {

    let todo = [];
    let entry = 0 ;

    while ( entry != 4) {
        entry = prompt("What would you like to do ? ");
        

        //Add a new entry to the list
        if ( entry == 1){
            entry = prompt("Add to the todo : ");
            todo.push(entry);
            console.log(entry + " was added to the list");

        }

        //List the available items in the list 
        if ( entry == 2 ){
            console.log("*******");
            todo.forEach(function(item, index){
                    console.log(index + ": " + item);
                });   
            console.log("*******")
            console.log(" ");
        }

        //Delete item
        if ( entry == 3 ) {
            entry = prompt("Which items delete ?");
            todo.forEach(function (toDelete){
                if (toDelete == entry ) {
                    todo.pop(toDelete);
                    console.log(toDelete + " is deleted");
                }
            });
        }

    }
    console.log("Quiting the app");
  }, 500);

*/

var tab = [1,2,3,4];

function printReverse(){
    for (let lg = tab.length; lg >= 0 ; lg-- )
        console.log(tab[lg]);     
}

printReverse();






