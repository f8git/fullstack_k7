var user = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
  age: 20,
};

//Object.keys() --> Lấy danh sách các key trả về mảng (Không lấy prototype)

// var keys = Object.keys(user);
// console.log(keys);

if (Object.keys(user).length) {
  Object.keys(user).forEach(function (key) {
    console.log(user[key]);
  });
} else {
  console.log("Không có dữ liệu");
}

// Object.values() -->Lấy danh sách các value trả về mảng
// console.log(Object.values(user));

// Object.entries() --> Trả về cả key và values --> Mảng 2 chiều
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Object.assign(target, source1, source2,....)
// Trả về Object mới sau khi nối
//  Thay đổi object target
var a = { course: "Fullstack", teacher: "Mạnh Tiến" };
var b = { a: "1", b: "2" };
// var obj = Object.assign(user, a, b);
// var tmp = Object.assign({}, user); //copy user vào tmp
// var obj = Object.assign(tmp, a);

var obj = Object.assign({}, user, a);

console.log(obj);
console.log(user);

var query = {
  status: true,
  category: 1,
  keyword: "Mạnh Tiến",
};

// Chuyển Object trên thành quẻy string --> status=true&category=1&keyword=Mạnh+Tiến
// var queryString = "";
// Object.entries(query).forEach(function (item, index) {
//   var itemTypeString = "";
//   if (typeof item[1] === "string") {
//     itemTypeString = item[1].split(" ").join("+");
//   } else {
//     itemTypeString = item[1];
//   }
//   console.log(Object.values(query).length - 1);

//   queryString += `${item[0]}=${itemTypeString}&`;
// });

// queryString = queryString.slice(0, queryString.lastIndexOf("&"));

// var queryString = Object.entries(query)
//   .map(function (item) {
//     console.log(item.join("="));
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// Chuyển từ queryString thành query
var queryString = "status=true&category=1&keyword=Mạnh+Tiến";

var allow = ["true", "false"];
var entries = queryString
  .replaceAll("+", " ")
  .split("&")
  .map(function (item) {
    var itemArr = item.split("=");
    if (allow.includes(itemArr[1])) {
      itemArr[1] = itemArr[1] === "true";
    } else if (!isNaN(+itemArr[1])) {
      itemArr[1] = +itemArr[1];
    }
    return itemArr;
  });
var query = Object.fromEntries(entries);

console.log(entries);
console.log(query);
