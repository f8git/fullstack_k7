// Kieu so (Number) trong Jacascript
/**
 1. Tao gia tri number 
 */

var age = 18;
var PI = 3.14;

var result = 20 / "ABC";
var result1 = 20 / 1;

console.log(typeof result); //--> type Number
console.log(isNaN(result)); //--> true
console.log(isNaN(result1)); //--> false

// var otherNumber = new Number(9); //Khong nen dung
// console.log(typeof otherNumber);

//2. Lam viec voi number
// - To string
// - To Fixed
// Keyword: Javascript number methods
console.log(typeof age); //--> number

var myStrinng = PI.toString();
console.log(typeof myStrinng); // --> string

console.log(typeof PI.toFixed()); //--> type string PI= 3
