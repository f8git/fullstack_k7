/*
Đối tượng
 - Thuộc tính (Biến)
 - Phương thức (Hàm)

 Các cách tạo đối tượng trong JS
 - Object Literal (Object cụ tổ)
 - Function Constructor

 Cú pháp chung 
 key: value
 --> key thường là 1 chuỗi
*/

// console.log(Object);

var user = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
  age: 18,
  getName: function () {
    return "Mạnh Tiến";
  },
};
// Thêm key mới vào object
user.address = "Hà Nội";
console.log(user);
// getName: phương thức
// name, email: Thuộc tính

// Truy cập vào key trong object
// console.log(user.name);
// console.log(user.email);
// console.log(user.getName());
// console.log(user["age"]);

// Cập nhật giá trị của key
user.age = 20;

console.log(user);

// xóa key
delete user.age;
console.log(user);

// Duyệt các key của object
// for (var key in user) {
//   console.log(key, user[key]);
// }

// Bài tập
var a = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
};
var b = {
  course: "Fullstack",
  teacher: "Mạnh Tiến F8",
};

// Nối 2 object a và b ==> Lưu vào object c
var c = {};
console.log(a);
for (var key in a) {
  c[key] = a[key];
}
for (var key in b) {
  c[key] = b[key];
}

console.log(c);

// Kiểm tra 1 biến có phải object không?
if (typeof user === "object" && !Array.isArray(user) && user !== null) {
  console.log("Là object");
}

var products = [
  null,
  { a: 1 },
  1,
  false,
  {
    name: "SP 1",
    price: 20000,
  },
  [30000],
  {
    name: "SP 2",
    price: 10000,
  },
  undefined,
  {
    name: "SP 3",
    price: 15000,
  },
];

// Trả về thông tin sản phẩm có giá lớn nhất

function isObject(item) {
  if (
    typeof item === "object" &&
    !Array.isArray(item) &&
    item !== null &&
    item.price
  )
    return true;
  return false;
}

// var maxIndex = 0;

// var max = 0;
// for (var index in products) {
//   //   console.log(products[index]);
//   if (isObject(products[index])) {
//     if (products[index].price > max) {
//       max = products[index].price;
//       console.log(index);
//       maxIndex = index;
//     }
//   }
// }
// console.log(products[maxIndex].name);

var result = products.reduce(function (prev, current) {
  //   console.log(prev, current);
  if (isObject(current)) {
    if (!prev) {
      // Lần đầu prev chưa có sp nào --> gán
      return current;
    }
    if (prev.price < current.price) {
      return current;
    }
  }
  return prev;
  /*
  - Khi chưa tìm được object nào thì prev = false
  - Khi tìm được được mảng đầu tiên thì prev được gán bằng mảng đầu tiên
  - Khi timg tiếp được mảng sau đó thì so sánh giá tri của price và chọn ra object có price max
  */
}, false);
console.log(result);
