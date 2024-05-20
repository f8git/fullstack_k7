// Array, Object, Function: Khi gán 1 biến bằng 1 array, object ==> Biến mới copy địa chỉ của biến cũ ==> 2 biến cùng 1 địa chỉ

// Copy array
// var oldArr = ["Mạnh Tiến", "lmt1721999abc@gmail.com"];

// var newArr = oldArr;
// Shallow Copy
/*
- Sử dụng phương thức trả về mảng mới
*/
// var newArr = oldArr.map(function (item) {
//   return item;
// });

// var newArr = oldArr.slice(0);

// Spread Operator ==> Học ES6
// var newArr = [...oldArr];

// Deep Copy
// - Sử dụng JSON: Chuyển mảng thành json, chuyển ngược lại (json về mảng)

// var json = JSON.stringify(oldArr);
// var newArr = JSON.parse(json);
// newArr[0] = "Lê Mạnh Tiến";
// console.log(newArr);
// console.log(oldArr);

// var new1 = function (data) {
//   data = [];
// };

// console.log(typeof new1);
// console.log(new1(oldArr));

var arr = [
  ["User 1", "user1@gmail.com"],
  ["User 2", "user2@gmail.com"],
  ["User 3", "user3@gmail.com"],
];

// Thêm 1 phần tử vào mảng con nếu tìm thấy email = user2@gmail.com
// var arr = arr.map(function (item) {
//   if (item.includes("user2@gmail.com")) {
//     item.push("Hello AE");
//   }
//   return item;
// });

// console.log(arr);

// var result = [];
// arr.forEach(function (item) {
//   if (item.includes("user2@gmail.com")) result = item;
// });

// result.push("Hello AE");
// console.log(arr);

// arr
//   .find(function (item) {
//     return item.includes("user2@gmail.com");
//   })
//   .push("Hello AE");

// console.log(arr);

// var arr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// arr.length = 3;// getter, setter ==> học sau
// console.log(arr);

// Tạo 1 mảng mới có nhiều phần tử có số lượng phần tử xác định
//  ví dụ tạo 1 mảng mới chứa các số từ 1 -> 20
// var arr = Array(20);
// console.log(arr);

var newArr = Array.from(Array(20).keys()).map(function (item) {
  return item + 1;
});

console.log(newArr);

// Giải thích
// 1. Array(number) --> Trả về 1 mảng mới có số lượng phân tử number

// 2. keys() --> Trả về các index của mảng
console.log(Array(20).keys());

// 3. Array.from --> ép kiểu về mảng
console.log(Array.from(Array(20).keys()));

function something() {
  console.log(arguments);
  // Array Like Obiect --> Object giống mảng( có length, có key là số)
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
}

something(5, 10, 15, 20, 25, 30);
