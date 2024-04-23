/* Câu lệnh rẽ nhánh: Thực thi 1 đoạn chương trình theo 1 điều kiện nhất định

 Điều kiện: Dùng biểu thức logic (Boolean)

 1. if else

 1.1 Câu lệnh if thiếu 
 if (dieukien) {
    code
 }

 1.2 Câu lệnh if đủ
 if (dieukien) {
    Code đúng
 } else {
    code sai
 }

 1.3 Câu lệnh if nhiều nhánh
 if (dieukien1) {
    code nhánh 1
 } else if (dieukien2) {
    code nhánh 2
 } else if (dieukien3) {
    code nhánh 3
 } else {
    code điêu kiện sai
 }

1.4 Câu lệnh if lồng nhau
if (dieukien1){
    if (dieukien2) {
        code đúng dieukien2
    } else {
        code sai dieukien2
    }
} else {
    Code sai dieukien1
}

2. switch case

*/

// var number = 15;
// if (number < 0) {
//   console.log("số siêu nhỏ");
// } else if (number >= 0 && number < 5) {
//   console.log("Số nhỏ");
// } else if (number >= 5 && number < 10) {
//   console.log("Số trung bình");
// } else if (number >= 10 && number < 15) {
//   console.log("Số lớn");
// } else {
//   console.log("Số siêu lớn");
// }

// BT Tính lương thực nhận của 1 nhân viên sau khi trừ thuế, nếu lương <=  5tr thuế 0%, nếu lương >5 tr & < 15tr thuế 3%, >= 15tr thuế 5%

// var salary = 7000000;
// var tax;
// if (salary <= 5000000) {
//   tax = 0;
// } else if (salary >= 5000000 && salary < 15000000) {
//   tax = 3;
// } else {
//   tax = 5;
// }

// var income = salary - (salary * tax) / 100;
// console.log(income);

// var saleRate = 5;
// var salePrice = 1000000;
// var regularPrice = salePrice / (1 - saleRate / 100);
// console.log(regularPrice);

var seconds = 350;

var mins = Math.floor(seconds / 60);
seconds -= mins * 60;
console.log(mins, seconds);
