Object.prototype.getValue = function () {
  // Trả về value của tất cả thuộc tính -->Lưu vào 1 mảng
  // this --> Object hiện tại (user)
  var result = [];
  var current = this;
  // console.log(current);
  // console.log(Object.keys(this));
  Object.keys(this).forEach(function (key) {
    typeof current[key] !== "funtion" && result.push(current[key]);
  });
  return result;
};

Object.prototype.message = "Hello AE";

var user = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
};

console.log(user.getValue());
var customer = {
  name: "Mạnh Tiến F8",
  address: "Hà Nội",
};

// console.log(customer.getValue());
console.log(customer.message);

// var a = {};
// console.log(a.message);

// var b = [];
// console.log(b.message);

// var fullname = "Mạnh Tiến";
// console.log(fullname.message);

// var check = true;
// console.log(check.message);

// var c = Symbol();
// console.log(c.message);

// var age = 18;
// console.log(age.message);

// Object --> Contructor --> Data Type

// Prototype trong Function Contructor: Array, String, Number, ... --> Chỉ được sử dụng tại các object được tạo từ contructor đó

// Array.prototype.messageA = "Hello Array";

// var arr1 = [];
// console.log(arr1.messageA);

// var str1 = "F8";
// console.log(str1.messageA);

// Bài tập: Viết lại vòng lặp map

Array.prototype.map2 = function (callback) {
  // code
  console.log(this);
  var arr = [];
  if (typeof callback !== "function") return;
  for (var i = 0; i < this.length; i++) {
    var result = callback(this[i], i);
    arr[i] = result;
  }
  // console.log(arr);
  return arr;

  /*
  Yêu cầu:
  - Chỉ được dùng vòng lặp có sẵn của js( không dùng vòng lặp của kiểu dữ liệu)
  - Không dùng push
  - this --> mảng ban đầu
  */
};

var users = ["User 1", "User 2", "User 3"];
var result = users.map2(function (user, index) {
  // console.log(user, index);
  return `<h2>${index} ${user}</h2>`;
});

console.log(result);

// Viết lại hàm filter trong array (Đặt tên filter2)
Array.prototype.filter2 = function (callback) {
  var newArr = [];
  if (typeof callback !== "function") return;
  for (var i = 0; i < this.length; i++) {
    var check = callback(this[i], i);
    check ? (newArr[newArr.length] = this[i]) : newArr;
  }
  return newArr;
};
var numbers = [5, 1, 10, 9, 2];
var result = numbers.filter2(function (number, index) {
  return number > 5;
});

console.log(result);

String.prototype.last = function () {
  var arr = this.split(" ");
  console.log(arr);
  return arr[arr.length - 1];
};
var fullname = "Lê Mạnh Tiến";
console.log(fullname.last());

// Viết lại hàm reduce()
Array.prototype.reduce2 = function (callback1, callback2) {
  var prev;
  if (typeof callback1 !== "function") return;
  if (callback2 === undefined) {
    // console.log("true");
    prev = this[0];
    for (var i = 0; i < this.length - 1; i++) {
      // if (!i) {
      //   var result = callback1(prev, this[i + 1], i);
      //   // prev = result;
      // } else {
      //   var result = callback1(prev, this[i + 1], i);
      //   // prev = result;
      // }
      var result = callback1(prev, this[i + 1], i + 1, this);
      prev = result;
    }
    // return prev;
  } else {
    prev = callback2;
    for (var i = 0; i < this.length; i++) {
      var result = callback1(prev, this[i], i, this);
      prev = result;
    }
    // return callback2;
  }
  return prev;
};

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var size = 3;

// var newArr = numbers.reduce2(function (prev, _, index) {
//   if (index % size === 0) {
//     prev.push(numbers.slice(index, index + size));
//     // console.log(prev);
//   }
//   return prev;
// }, []);
// console.log(newArr);

// var result = numbers.reduce2(function (prev, current) {
//   console.log(prev, current);
//   // console.log(prev.push(current * 2));
//   // console.log(prev, current);
//   prev.push(current * 2);
//   return prev;
// }, []);
// console.log(result);

var result = numbers.reduce2(function (prev, current, index) {
  console.log(prev, current, index);
  return prev > current ? prev : current;
});
console.log(result);
