console.log(Array.prototype);
var users = ["User 1", "User 2", "User 3", "User 4"];

// 1. forEach --> Lặp qua từng phần tử
// users.forEach(function (user, index) {
//   console.log(user, index);
// });

// 2. map()
/*
- Trả về 1 mảng mới có số lượng phần tử = mảng ban đầu
- Từng phần tử của mảng mới phụ thuộc vào return của callback
*/
// var newArr = users.map(function (user, index) {
//   console.log(user, index);
//   return `<h2>${user}</h2>`;
// });
// console.log(newArr);

// 3. filter()
/*
- Trả về 1 mảng mới
- Giá trị và số lượng phần tử của mảng mới phụ thuộc vào return true của callback
- return là 1 biểu thức logic
*/
// var newArr = users.filter(function (user, index) {
//   console.log(user, index);
//   if (index > 1) return true;
// });
// console.log(newArr);

var customers = [
  ["User 1", "User1.@gmail.com", 30],
  ["User 2", "User2.@gmail.com", 31],
  ["User 3", "User3.@gmail.com", 32],
  ["User 4", "User4.@gmail.com", 33],
];

// Yêu cầu 1: Xóa phần tử mảng có email là user2.@gmail.com

var newArr = customers.filter(function (customer) {
  //   if (customer.includes("User2.@gmail.com")) return false;
  return !customer.includes("User2.@gmail.com");
});
console.log(customers);
console.log(newArr);

const myArray = [1, 2, 3];
const myObject = {
  name: "F8 Fullstack",
  age: 30,
};

myArray[0] = myObject;
console.log(myArray);
