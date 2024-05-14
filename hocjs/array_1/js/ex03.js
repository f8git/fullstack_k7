var users = ["An", "Dũng", "Tâm", "Hạnh"];
// sort(): Sắp xếp mảng theo thứ tự tăng dần
// Sắp xếp theo ký tự: a, b,
/*
Lưu ý: sort nhận vào 1 callback
function callbackSort(a, b) {
    // a: phần tử sau
    // b: phần tử trước
//  Nếu hàm này trả về giá trị âm ==> Tự động đổi chỗ
*/

users.sort();
// console.log(users);

var numbers = [5, 1, 12, 10, 100];
// console.log(numbers.sort());
var number = numbers.sort(function (a, b) {
  // Sắp xếp tăng dần
  // Phần tử trước nhỏ hơn phần tử sau
  if (b > a) return -1;
});

// console.log(number);

var users = [
  "Tạ Hoàng An",
  "Lê Mạnh Tiến",
  "Lưu Anh Quân",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
];

var getFirstName = function (fullname) {
  return fullname.split(" ").splice(-1);
};

users.sort(function (a, b) {
  if (getFirstName(b) > getFirstName(a)) return -1;
});

// console.log(users);

// Vòng lặp

var users = ["Item 1", "Item 2", "Item 3", "item 4"];

// forEach(callback): Duyệt từng phần tử của mảng
/*
Callback sẽ 3 tham số
 - value
 - index
 - array: Mảng ban đầu
*/
var result = users.forEach(function (value, index) {
  //   console.log(value, index);
});

// console.log(result); ==> undefined

// map(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về 1 mảng mới có số lượng phần tử bằng mảng ban đầu
- Giá trị từng phần tử của mảng mới sẽ là return của callback
*/

// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1}: ${value}`;
// });

// console.log(newArr);

// filter(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback return về truthy
*/
// console.log(users);
var newArr = users.filter(function (value, index) {
  //   console.log(value, index);
  //   if (index > 1) return true;
  return value;
});

// console.log(newArr);

/*
Bài tập
*/
var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];

// Xóa khách hàng có email là :customer2@gmail.com

// var result = customers.filter(function (value, index) {
//   return value[1] !== "customer2@gmail.com";
// });
// console.log(result);

// Tăng tuổi của khách hàng có email: customer2@gmail.com thêm 2 tuổi

// customers = customers.map(function (customer) {
//   if (customer.includes("customer2@gmail.com")) {
//     customer[2] += 2;
//   }
//   return customer;
// });
// console.log(customers);

// var data = [];
// function addData(value, status) {
//   return status
//     ? data.includes(value)
//       ? (data = data)
//       : data.push(value)
//     : data.filter(function (user) {
//         return !user.includes(value);
//       });   

  //   if (status) {
  //     return data.includes(value) ? (data = data) : data.push(value);
  //   } else {
  //     data = data.filter(function (user) {
  //       return !user.includes(value);
  //     });
  //   }
}

addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
console.log(data);

/*
['An']

Giải thích:
Nếu status = true ==> Thêm value vào mảng data(Kiểm tra trùng)
Nếu status = false ==> Xóa value
*/
