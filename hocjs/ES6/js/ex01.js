// ES6 là phiên bản Javascript được cập nhật năm 2015
// Biến: const, let
// ==> Block Scope

// Global Scope
// var a;

// function massage() {
//   // function Scope
//   var b;
//   if (b) {
//     // Block Scope
//     console.log("hello");
//   }
//   for(var i = 0; i<= 10; i++) {
//     // Block Scope
//   }
// }

// var a = 10;
// if (a >= 5) {
//   var b = 20;
// }

// console.log(b);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// Trong 1 Scope chỉ được phép khai báo let 1 lần
// let a = 10;
// a = 20;

// const a = 10;
// a = 20;

// const getMessage = function () {
//   console.log("Học lập trình không khó");
// };
// const getMessage = function () {
//   console.log("Học lập trình rất khó");
// };

// getMessage();

const user = {
  name: " Manh Tien",
  email: "ngocdiem210916@gmail.com",
  age: 32,
};

user.name = "Le Manh Tien";
console.log(user);

// Arrow Function
// Destructuring
// Spread
// Object Literal Enhanced
// class
