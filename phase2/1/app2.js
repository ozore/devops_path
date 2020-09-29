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

*/

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


console.log("Factorielle");
let factorial = function(nb) {
    
    let result = 1;

    for (let i= 2; i <= nb ; i++ ){
        result = result * i ;
    }
    return result;
}

console.log(factorial(4));




let kebabToSnake = function(str){
    const cherche = "-";
    const remplace = "_";
    
    const result = str.split(cherche).join(remplace);
    return result;
}


console.log(kebabToSnake("sylvain-petit"));
