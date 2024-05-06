/*
Hàm là gì ?
- Cú pháp trong lập trình giúp tách các đoạn chương trình con trong một chương trình lớn để tái sử dụng
- Thể hiện một chức năng(động từ)
- Đặt tên hàm theo quy tắc camelCase và sử dụng động từ
vd: sum, getTotal, setMessage, getMessage, showUsers, makeMenu, buildMenuTree, ...

Cú pháp:
- Định nghĩa hàm
function tenham() {
    Nội dung hàm
}
fuction tenham(thamso1, thamso2, thamso3,...)
{
    Nội dung hàm
}

==> Tham số: parameter
- Gọi hàm 
tenham()
tenham(doiso1, doiso2, doiso3,...)
==> Đối số: arguments

Hàm có từ khóa return --> hàm có giá trị trả về, khi có từ khóa return được gọi --> Các đoạn code bên dưới không hoạt động


Biến toàn cục: Sử dụng ở phạm vi ngoài hàm
BIến cục bộ: sử dụng ngoại vi trong hàm

Trên thực tế trong 1 hàm có thể gọi 1 hàm khác

Hàm ẩn danh (Hàm không tên, anonymous function)
function (){
    Nội dung hàm
}
Lưu ý hàm ẩn danh không gọi và định nghĩa được(trừ ohi gán vào một biến)
*/

// function showMessage(msg, type = "success") {
//   console.log("Hoc JS không khó");
//   console.log(msg);
//   console.log(type);
//   return 1;
// }

// var a = showMessage("F8", "error"); //Lời gọi hàm chủ động

// console.log(a);

// function devision(a, b) {
//   if (b != 0) {
//     return a / b;
//   }
//   return "Không tính được";
// }
// console.log(devision(10, 0));

// var a = 0;

// function getNumber() {
//   return a;
// }

// function setNumber(value) {
//   a = value;
// }

// function sum(a, b) {
//   var total = a + b;
//   return total;
// }

// setNumber(10);
// console.log(total);

// function sum(a, b) {
//   return a + b;
// }

// function showResult() {
//   var total = sum(10, 30);
//   console.log(total);
// }

// showResult();

// Declaration function
// function showNumber() {
//   console.log("number");
// }

// showNumber();

// // Expression function
// var showMessage = function () {
//   console.log("Học lập trình không khó");
// };
// showMessage();

// var getTotal = function sum(a, b) {
//   return a + b;
// };

// console.log(getTotal(10, 20));
// console.log(sum(10, 20));

// function sum(a, b) {
//   return a + b;
// }
// var getTotal = sum;
// console.log(getTotal(10, 20));
// console.log(sum(10, 20));

// Callback Function
function display(callback) {
  console.log("Display");
  typeof callback === "function" && callback();
  //   console.log(typeof callback);
}

// display(function () {
//   console.log("Hello anh em F8");
// });

function handleLog() {
  console.log("Hello anh em F8");
}
// display(handleLog); //Gọi hàm bị động

// setTimeout() --> Delay quá trình thực thi  câu lệnh
/*
setTimeout(callback, time, args)
*/

// setTimeout(
//   function (a, b, c) {
//     console.log("Hello AE F8", a, b, c);
//   },
//   1000,
//   "a",
//   "b",
//   "c"
// );

// function max(a, b) {
//   console.log(arguments); //Array like object
//   console.log(a, b);
// }
// max(5, 10, 15, 20, 25, 30);

// Rest parameter

function max2(a, b, ...rest) {
  console.log(a, b);
  console.log(rest);
}

max2(5, 10, 15, 20, 25, 30, 35, 40);
