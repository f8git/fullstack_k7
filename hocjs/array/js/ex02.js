console.log(Array.prototype);

var users = ["User 1", "User 2", "User 3"];
// 1. at() --> Trả về phần tử theo index
// console.log(users.at(1));

// 2. concat() --> Nối mảng
var newArr = users.concat(
  ["User 4", "User 5"],
  [1, 2, 3],
  ["a", "b", "c"],
  "F8",
  ["d"]
);
console.log(newArr);
