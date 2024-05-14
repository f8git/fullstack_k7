// Khai báo

var myArray = [2, 4, 6, "Hello", true, null, undefined];
// console.log(myArray);

// Kiểm tra số lượng phần tử
// console.log(myArray.length);

// Kiểm tra 1 biến của phải là mảng không
// if (Array.isArray(myArray)) console.log("Đây là mảng");
// else {
//   console.log("Đây không phải mảng");
// }

// Thêm phần tử mới
// Cú pháp: tenbienmang[indexmoi] = giatri
// myArray[myArray.length] = "Tiến";
// myArray[myArray.length] = "Duy";
// console.log(myArray);

// Sửa phần tử ==> Xác định index
// myArray[3] = "Hello F88";

// Duyệt mảng( Đọc mảng)

// console.log(myArray[0]);
// console.log(myArray);

// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for (var index in myArray) {
//   console.log(index, myArray[index]);
// }

// for (var value of myArray) {
//   console.log(value);
// }

// Xóa phần tử trong mảng ==> xác định index
var deleteIndex = 3;
var newArr = [];

// for (index in myArray) {
//   if (+index === +deleteIndex) continue;
//   newArr[newArr.length] = myArray[index];
// }

// myArray = newArr;
// console.log(myArray);
// console.log(newArr);

// Bài tập: Thêm 1 phần tử bất kì vào đầu mảng
// newArr = [];
// var newValue = "js";
// for (index in myArray) {
//   if (+index === 0) {
//     newArr[newArr.length] = newValue;
//   }
//   newArr[newArr.length] = myArray[index];
// }

// console.log(newArr);

// var users = ["Lê Mạnh Tiến", "Vũ Văn Duy", "Nguyễn Duy Nội"];
// var keyword = "du";
// keyword = keyword.toLowerCase();
// var newArr = [];
// // Yêu cầu: xóa tất cả các phần tử mảng có chứa keyword(Không phân biệt hoa thường)
// for (var index in users) {
//   if (users[index].toLowerCase().includes(keyword)) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

// var numbers = [5, 2, 1, 9, 6];
// yêu cầu: Tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử đó với phần tử đầu tiên
// var max = numbers[4];
// var maxIndex;
// for (var index in numbers) {
//   if (max < numbers[index]) {
//     max = numbers[index];
//     maxIndex = index;
//   }
// }
// numbers[maxIndex] = numbers[0];
// numbers[0] = max;
// console.log(numbers);

// var fullName = "lê mạnh tiến";

// var newArr = fullName.split(" ");

// for (var index in newArr) {
//   newArr[index] = newArr[index][0].toUpperCase() + newArr[index].slice(1);
// }

// newArr = newArr.join(" ");
// console.log(newArr);
