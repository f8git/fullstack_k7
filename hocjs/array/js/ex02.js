console.log(Array.prototype);

var users = ["User 1", "User 2", "User 3", "User 4"];
console.log("Users: ", users);
// 1. at() --> Trả về phần tử theo index
// console.log(users.at(1));

// 2. concat() --> Nối mảng
// var newArr = users.concat(
//   ["User 4", "User 5"],
//   [1, 2, 3],
//   ["a", "b", "c"],
//   "F8",
//   ["d"]
// );
// console.log(newArr);

// 3. fill --> Update mảng thành 1 giá trị
// console.log(users);
// var newArr = users.fill(1);
// console.log(newArr);

// var newArr = Array(100).fill(0);
// console.log(newArr);

// 4. includes() --> Tìm phần tử trong mảng theo value

// console.log(users.includes("User 2"));

// 5. indexOf(value)  --> Tìm phần tử trong mảng theo value trả về index đầu tiên
// console.log(users.indexOf("User 2"));

// 6. lastIndexOf(value) --> Tìm phần tử trong mảng theo value trả về index cuối cùng
// console.log(users.lastIndexOf("User 2"));

// 7. slice()  --> cắt mảng theo index(Tạo ra mảng mới)
// var newArr = users.slice(1, 3);
// console.log(newArr);

// 8. push()  --> Thêm phần tử vào cuối mảng
/*
Trả về tổng số lượng sau khi thêm 
Thay đổi mảng ban đầu(Tham chiếu đến mảng ban đầu)

a = []
b = a
b thay đổi --> a thay đổi
*/
// var count = users.push("Item 4", "Item 5", "Item 6");
// console.log(users);
// console.log(count);

// 9. unshift()  --> Thêm phần tử vào đầu mảng
// var count = users.unshift("Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(count);

// 10. pop() --> Xóa phần tử cuối mảng và trả về giá trị vừa xóa
// var user = users.pop();
// console.log(users);
// console.log(user);

// 11. shift() --> Xóa phần tử đầu mảng
// var user = users.shift();
// console.log(users);
// console.log(user);

// 12 splice (index, number, ...args) --> xóa phần tử bất kỳ
// var newArr = users.splice(1, 2, "Tiến", "Duy", "Nội");
// console.log(users);
// console.log(newArr);

// 13.sort() --> Sắp xếp Thay đổi mảng ban đầu giá trị trả về là true hoặc false
/*
Mặc định sort sắp xếp tăng dần theo ký tự
Hàm sort nhận 1 callback có 2 tham số 
sort(function(a, b) {
  a: Giá trị phần tử sau
  b: Giá trị phần tử trước
  Nếu callback trả về số âm --> Đổi chỗ phần tử trước sau})
*/
var a = ["A", "C", "B", "D"];
a.sort();
console.log(a); //['A', 'B', 'C', 'D']

// var b = [1, 100, 5, 10, 20];
// b.sort();
// console.log(b); //[1, 10, 100, 20, 5]

var numbers = [1, 100, 5, 10, 20];
numbers.sort(function (a, b) {
  // a: sau
  // b: trước
  // ==> Sắp xếp tăng dần b > a  -> đổi chỗ(return -1) || Sắp xếp giảm dần a > b  -> đổi chỗ(return -1)
  // if (b > a) return -1;
  return a - b;
});
console.log(numbers);

// 14. reverse() --> đảo vị trí
// var newArr = numbers.reverse();
// console.log(numbers);
// console.log(newArr);

// 15. join() --> Nối mảng thành chuỗi
// console.log(users.join(" "));
// document.body.innerHTML = `<h2>${users.join("</h2><h2>")}</h2>`;

var customers = [
  "Lê Mạnh Tiến",
  "Vũ Văn Duy",
  "Nguyễn Duy Nội",
  "Đặng Ngọc Sơn",
  "Lại Văn Sỹ",
];

// Sắp xếp khách hàng theo thứ tự tăng dần(theo tên)
// var newArr = [];
// for (var index in customers) {
//   var nameArr = customers[index].split(" ");
//   newArr[newArr.length] = nameArr.at(-1);
// }

// console.log(newArr);
// newArr.sort();

// console.log(newArr);

// var newCustomer = [];

// for (var index in newArr) {
//   for (var i in customers) {
//     var nameArr = customers[i].split(" ");
//     if (newArr[index] === nameArr.at(-1)) {
//       newCustomer[index] = customers[i];
//     }
//   }
// }

// console.log(newCustomer);

var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1).join();
};

console.log(getFirstName("Le Manh Tien"));

customers.sort(function (a, b) {
  // console.log(getFirstName(b), getFirstName(a));
  if (getFirstName(b) > getFirstName(a)) return -1;
});
console.log(customers);
