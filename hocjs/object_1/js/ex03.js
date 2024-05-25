// Prototype: Object dùng để kế thừa các phương thức, thuộc tính
Object.prototype.combineValue = function () {
  //combineValue là phương thức
  // Nối tất cả các giá trị của các key thành 1 mảng
  // this: Đại diện cho object hiện tại
  var array = [];
  var _this = this;
  Object.keys(this).forEach(function (key) {
    var value = _this[key];
    if (typeof value != "function") {
      array.push(value);
    }
  });
  return array;
};

Object.prototype.message = "Học Js không khó";

var user = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
};

console.log(user);
user.combineValue();
console.log(user.message);

String.prototype.last = function () {
  return this.split(" ").slice(-1).join();
};

var fullname = "Mạnh Tiến F8"; // String

console.log(fullname.last());
var arr = []; // Array
var age = 32; // Number
var check = false; // Boolean
var getMessage = function () {};

console.log();

console.dir(String);
console.log(fullname.message);

// var course = {
//   name: "Fullstack",
//   price: 1000,
// };
// console.log(course);
// course.combineValue();

var users = ["User 1", "User 2", "User 3", "User 4"];

Array.prototype.map2 = function (callback) {
  // callback là 1 hàm --> truyền đối số cho hàm
  //   console.log(this);
  var arr = [];
  if (typeof callback !== "function") return;
  for (var i = 0; i < this.length; i++) {
    var result = callback(this[i], i, this);
    arr[i] = result;
  }
  return arr;
};
var newArr = users.map2(function (user, index) {
  return `<h3>${index + 1} - ${user}</h3>`;
});

console.log(newArr);
