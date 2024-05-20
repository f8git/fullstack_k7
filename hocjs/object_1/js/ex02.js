// Object.keys() --> Trả về 1 mảng chứa các key trong object

var obj = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
  age: 18,
};

// var keys = Object.keys(obj);
// console.log(keys);

Object.keys(obj).forEach(function (key) {
  console.log(obj[key]);
});

var user = {};
// Kiểm tra obj user có phần tử hay không
if (Object.keys(user).length) {
  console.log("Có phần tử");
} else {
  console.log("Không có phần tử");
}

// Object.values() --> trả về 1 mảng chứa các value của object
// console.log(Object.values(obj));

// Object.entries() ==> Trả về mảng 2 chiều chứa cả key và value
console.log(Object.entries(obj));

// Object.fromEntries() ==> Chuyển từ array entries (Mảng 2 chiều thành Object)

// var arr = [
//   ["key 1", "value1"],
//   ["key 2", "value2"],
//   ["key 3", "value3"],
// ];
// var obj = Object.fromEntries(arr);
// console.log(obj);

// Object.assign(target, source)  ==> copy object source và nối vào object target,  đồng thời trả về object mới sau khi nối
var obj1 = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
};
var obj2 = {
  role: "student",
  address: "Hà Nội",
};

// Nối obj2 vào obj1

// obj3 = Object.assign(Object.assign(obj3, obj1), obj2);
var obj3 = Object.assign({}, obj1, obj2);
console.log(obj1);
console.log(obj3);

var query = {
  category: 1,
  keyword: "Khóa học Fullstack",
  status: true,
};

// Chuyển thành string: category=1&keyword=Khóa+học+Fullstack&status=true

var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");

console.log(queryString);
