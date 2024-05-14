/*
Tìm kiếm phần tử theo từ khóa
*/

var users = ["Lê Mạnh Tiến", "Tiến Văn Duy", "Nguyễn Duy Nội"];
var keyword = "ti";

var newArr = users.findLast(function (user) {
  console.log(user.toLowerCase().includes(keyword.toLowerCase()));
  return user.toLowerCase().includes(keyword.toLowerCase());
});

console.log(newArr);

// Hàm find()
/*
Chỉ khác filter là trả về phần tử đâù tiên tìm được
*/

// Hàm findLast()
/*
Chỉ khác filter là trả về phần tử cuối cùng tìm được
*/

// Hàm findIndex()
/*
- Trả về index đầu tiên tìm được
- Khác indexOf --> Tự viết biểu thức logic trong hàm callback
*/
// var index = users.findIndex(function (user) {
//   console.log(user.toLowerCase().includes(keyword.toLowerCase()));
//   return user.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(index);

// Hàm findLastIndex()
/*
- Trả về index cuối cùng tìm được
- Khác indexOf --> Tự viết biểu thức logic trong hàm callback
*/
// var index = users.findLastIndex(function (user) {
//   console.log(user.toLowerCase().includes(keyword.toLowerCase()));
//   return user.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(index);

// var users = [
//   ["User 1", "user1.@gmail.com", 30],
//   ["User 2", "user2.@gmail.com", 31],
//   ["User 3", "user3.@gmail.com", 32],
//   ["User 4", "user2.@gmail.com", 33],
// ];
// Tăng user nào có email là user2@gmail.com thêm 2 tuổi
/*
Tìm index thỏa mãn điều kiện 
Dựa vào index --> Cập nhật lại tuổi
*/

// keyword = "user2.@gmail.com";

// var index = users.findIndex(function (user) {
//   return user.includes(keyword);
// });
// console.log(index);
// users[index][2] += 2;
// console.log(users);

// var index = users.map(function (user) {
//   if (user.includes(keyword)) {
//     return (user[2] += 2);
//   }
// });

// console.log(users);

var users = [
  ["User 1", "user1.@gmail.com", 30],
  ["User 2", "user2.@gmail.com", 31],
  ["User 3", "user3.@gmail.com", 32],
  ["User 4", "user2.@gmail.com", 33],
];

// Yêu cầu: Loại bỏ phần tử có email bị trùng
/*
ý tưởng: 
- Tạo 1 mảng mới
- Duyệt qua từng phần tử tử của mãng cũ
- Kiểu tra nếu trong mảng mới không có email --> Thêm vào mảng mới
*/

// var newArr = [];

// users.forEach(function (user) {
//   // user --> Từng phần tử của mảng users
//   // Tìm email của từng user, so sánh xem có nằm trong mảng newArray hay không
//   var result = newArr.find(function (item) {
//     return user[1] === item[1];
//   });
//   console.log(result);
//   if (!result) {
//     newArr.push(user);
//   }
// });

// console.log(newArr);

// ******************* Cách khác ******************
// var newArr = [];
// var emails = [];

// users.forEach(function (user) {
//   // user --> Từng phần tử của mảng users
//   // Tìm email của từng user, so sánh xem có nằm trong mảng newArray hay không
//   if (!emails.includes(user[1])) {
//     newArr.push(user);
//     emails.push(user[1]);
//   }
// });

// console.log(newArr);

// some() --> 1 vài
/*
- Trả về true/false
- Trả về true nếu trong callback có ít nhất 1 phần tử return
- Vòng lặp chạy đến khi thỏa mãn điều kiện sẽ dừng lại
*/
var numbers = [4, 5, 10, 2, 8];
// Tìm xem trong mảng numbers có phần tử lẻ không?
// var check = numbers.some(function (number) {
//   console.log(number);
//   return number % 2 !== 0;
// });

// console.log(check);

// every() --> tất cả
/*
- Trả về true/false
- Trả về true nếu trong callback tất cả các phần tử return
- Vòng lặp dừng lại nếu 1 phần tử không thỏa mãn
*/
// Kiểm tra mảng number xem tất cả có phải số chẵn không
var numbers = [4, 6, 1, 2, 8];
var check = numbers.every(function (number) {
  console.log(number);
  return number % 2 === 0;
});
console.log(check);
