var numbers = [1, 2, 5, 7, 9];
// some(callback)
/*
Duyệt qua từng phần tử của mảng ban đầu
Trả về true/false
Trả về true khi có it nhất 1 lần return truthy ở callback
*/
// Tìm trong numbers có số chẵn hay không
var result = numbers.some(function (value, index) {
  //   console.log(value, index);
  return value % 2 === 0;
});
// console.log(result);

// every(callback) ==> Ngược lại so vơi some (Tất cả dều đúng)

var result = numbers.every(function (value, index) {
  return value % 2 !== 0;
});
// console.log(result);

// find(callback)
/*
Điều kiện giống filter
Trả về phần tử đầu tiên tìm được
*/

var result1 = numbers.filter(function (number) {
  return number > 2;
});
console.log(result1);

var result2 = numbers.find(function (number) {
  return number > 2;
});
console.log(result2);

// findLast(callback) ==> Tìm phần tử cuối cùng
var result3 = numbers.findLast(function (number) {
  return number > 2;
});
// console.log(result3);

// findIndex ==> Tìm index đầu tiên
// findLastIndex ==> Tìm index cuối cùng

var users = [
  ["A", "A"],
  ["B", "B"],
  ["C", "C"],
  ["D", "D"],
];
console.log(users);
// Yêu cầu 1: tìm index của mảng ["B", "B"] trong mảng users
var key = ["B", "B"];

var index = users.findIndex(function (user) {
  return user.join() === key.join();
});
console.log(index);

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var arrNew = [];
arrA.forEach(function (value) {
  if (arrB.includes(value)) {
    arrNew.push(value);
  }
});

console.log(arrNew);

// Tìm hiểu reduce
