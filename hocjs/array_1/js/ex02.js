console.log(Array.prototype);

var users = ["User 1", "User 2", "User 3", "User 4", "User 2"];
// 1. at(index)  ==> Lấy phần tử mảng theo index
// console.log(users.at(0));

// 2. concat(arr1, arr2, arr3,...) ==> Nối mảng
// console.log(users.concat([1, 2, 3], [4, 5, 6]));

// 3. fill(value) ==> Thay thế tất cả các phần tử trong mảng thành 1 giá trị(Thay đổi mảng ban đầu)
// users.fill();
// console.log(users);

// 4. indexOf() ==> Tìm phần tử trong mảng và trả về index đầu tiên
// console.log(users.indexOf("User 2"));

// 5. lastIndexOf() ==> Tìm phần tử trong mảng và trả về index cuối cùng
// console.log(users.lastIndexOf("User 2"));

// 6. includes(value) ==> Tìm phần tử trong mảng và trả về true/false
// console.log(users.includes("User 2"));

// 7. slice(start, end) ==> Cắt mảng từ index đến end - 1
// console.log(users.slice(0, 2));
// console.log(users.slice(2));
// console.log(users.slice(-2));

// 8. push(value1, value2, value3) ==> Thêm phần tử vào cuối mảng và thay đổi mảng ban đầu ==> Giá trị của hàm push trả về là  tổng số lượng phần tử ban đầu và phần tử thêm vào

// var count = users.push(1, 2, 3, "A", "B", "C");
// console.log(count);
// console.log(users);

// 9. unshift(value1, value2, value3) ==> Thêm phần tử vào đầu mảng
// var count = users.unshift(1, 2, 3, "A", "B", "C");
// console.log(count);
// console.log(users);

// 10. pop() --> Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa(Thay đổi mảng ban đầu)
// var value = users.pop();
// console.log(value);
// console.log(users);

// 11. shift() --> Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa(Thay đổi mảng ban đầu)
// var value = users.shift();
// console.log(value);
// console.log(users);

// 12. reverse() --> Đảo ngược mảng (Trả về mảng mới và thay đổi mảng ban đầu)
// var newArr = users.reverse();
// console.log(newArr);
// console.log(users);

// 13. join() --> Nối các phần tử mảng thành chuỗi(Mặc định là ngăn cách nhauu bởi dấu phẩy)
console.log(users.join(" "));
var fullName = "Lê Mạnh Tiến";
var firstName = fullName.split(" ").slice(-1).join();
console.log(firstName);
