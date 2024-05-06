/*
closure: Định nghĩa hàm trong 1 phạm vi khác và có thể truy cập các biến ở phạm vi chứa nó

Trong JS: tất cả các hàm đều là closure
*/

// var y = 20;

// function display() {
//   console.log("Display");
//   var x = 10;
//   function something() {
//     console.log("SomeThing");
//     console.log(x);
//     console.log(y);
//   }
//   something();
// }

// display();
// var a = 10;

// function getMessage() {
//   console.log("getMessage");
// }

// console.log(window);
// window.getMessage();
// window.console.log(window.a);
// window.f8 = {
//   showMesssage() {
//     console.log("Học lập trình không khó");
//   },
// };

// window.f8.showMesssage();

// function display() {
//   function getMessage() {
//     return "Học lập trình không khó";
//   }
//   return getMessage;
// }

// var func = display();

// console.log(func());

// function display() {
//   return function () {
//     return "Học lập trình không khó";
//   };
// }

// console.log(display()());

// var func = display();

// console.log(func());

/*
if(hama(hamb())) {

}
*/

// function sum(a) {
//   console.log("a", a);
//   return function (b) {
//     console.log("b", b);
//     return a + b;
//   };
// }

// var add = sum(10);
// var result = add(20);

// console.log(result);

// IIFE = Immediately Invoked Function Expressions
// function getMessage() {
//   console.log("Học lập trình không khó");
// }

// getMessage();

// (function () {
//   console.log("Học lập trình không khó");
// })(); // ==> IIFE

// //  Giải thuật đệ quy
// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

// Tính tổng: 1 + 2 + ..... + N (Dùng đệ quy)

function getTatal(n) {
  console.log(n);
  if (n === 1) {
    return 1;
  }
  return n + getTatal(n - 1);
}
var total = getTatal(10);
console.log(total);

function fibonaci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}

console.log(fibonaci(7));
