/**
 * Toan tu trong javascript
 * 1. Toan tu so hoc- Arithmetic
   +   --> Cong
   -   --> Tru
   *   --> Nhan
   **  --> Luy thua
   /   --> chia lay phan nguyen
   %   --> Chia lay so du
   ++  --> Tang 1 gia tri so
   --  --> Giam 1 gia tri so
   
 * 2. Toan tu gan - Assignment
                   Vi du           Tuong duong
       =           x = y           x = y
       +=          x += y          x = x + y
       -=          x -= y          x = x - y
       *=          x *= y          x = x * y
       /=          x /= y          x = x / y
       **=          x **= y          x = x ** y
 * 3. Toan tu so sanh - Comparison
    ==     --> Bang
    !=     --> Khong bang   
    >     --> lon hon   
    <     --> nho hon   
    >=     --> lon hon hoac bang   
    <=     --> nho hon hoac bang   
 
 * 4. Toan tu logic - Logical
1. && - And
2. || - Or 
3. !  - Not


 */

//1. Toan tu so hoc
// var a = 1 + 2;
var a = 8;
var b = 3;
var c = a % b;

// console.log(c);

// Toan tu ++-- voi Prefix(tien to) & Postfix(hau to)
// var number = 6;
// var output = number++ + --number;
// --a;
// console.log("output: ", output);
// alert(a);

//2. Toan tu gan
// var fullName = "Le Manh Tien";
// var a = 1;

//3. Toan tu so sanh
// var a = 1;
// var b = 2;
// if (a == b) {
//   alert("Dung");
// }

//4. Toan tu logic

// var a = 1;
// var b = 2;

// if (a > 0 && b > 0) {
//   console.log("a & b lon hon 0");
// }

// Toan tu chuoi - String operator
var firstName = "Tien";
var lastName = "Le";

console.log(firstName + " " + lastName);

// Boolean
/**
 * 0
 * false
 * ''-""
 * undefined
 * NaN
 * null
 * --> 6 gia tri kia coverse sang boolean thi laf false
 */
var isSuccess = true;

console.log(isSuccess);

// number type
var a = 1;
var c = 0.5;

console.log("Kieu du lieu: ", typeof a);

// String type
var fullName = "Tien Le";
console.log("Kieu du lieu: ", typeof fullName);

// Boolean type
var isSucces = true;

console.log("Kieu du lieu: ", typeof isSucces);

// Undefined type(khong gan gia tri)
var age;

console.log(age);
console.log("Kieu du lieu: ", typeof age);

// Null

var isNull = null;
console.log(isNull);
console.log("Kieu du lieu: ", typeof isNull);

// Symbol

var id = Symbol("id"); // Unique
var id2 = Symbol("id"); // Unique

console.log(id == id2);

// Function

var myFunction = function () {
  alert("Hi. Xin chao cac ban!");
};

// myFunction();

// object type
var myObject = {
  name: "Tien Le",
  age: 18,
  adress: "Ha Noi",
};

// console.log("myObject", myObject);

var myArray = ["Javascript", "PHP", "Ruby"];
console.log("myArray", myArray);

var e = 1;
var f = "1";

console.log(e === f);

//do dai chuoi
var fullName = "Tien Le";

console.log(fullName.length);

// Template string ES6
var firstName = "Tien";
var lastName = "Le";

console.log(`Toi la: ${firstName} ${lastName}`);
