// Object: Đặc tả 1 đối tượng cụ thể
// Ví dụ: Con người, người dùng, sản phẩm, ....
/*
Cấu tạo bới
- Thuộc tính (Biến)
- Phương thức (Hàm)

Cú pháp: 
var tenObject = {
    key1: value1,
    key2: value2,
    ...
}
==> Object Literal
*/

var user = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
  age: 18,
  "address-a": "Hà Nội",
};

// console.log(user);
// console.log(user.name);
// console.log(user["age"]);
// console.log(user["address-a"]);

// user.address = "Hà Nội"; // Thêm
// user.name = "Lê Mạnh Tiến"; // Sửa
// delete user.age; // Xóa

// console.log(user);

// for (var key in user) {
//   console.log(user[key]); // Computed Property
// }

// Hàm  tạo của Object là Object
// console.dir(Object);

// Nối 2 object
var obj1 = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
};

var obj2 = {
  age: 18,
  role: "student",
};

var obj3 = {};
for (var key in obj1) {
  obj3[key] = obj1[key];
}

for (var key in obj2) {
  obj3[key] = obj2[key];
}

console.log(obj3);

// Kiểm tra 1 biến có phải là Object hay không

var a = {};

if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("Là object");
}

if (a && a.constructor.name === "Object") {
  console.log("Là object");
}
