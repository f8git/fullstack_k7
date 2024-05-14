/*
Vòng lặp reduce

Nguyên tắc reduce
- Output của lần lặp trước sẽ là Input của lần lặp sau --> Giống bài toán tính tổng (Mỗi lần lặp giá trị tổng thay đổi)

Cú pháp
reduce(callback, initalValue)
- callback sẽ có 3 tham số
 + prevValue
    Th1: Không có initalValue
      + prevValue: mặc  sẽ là phần tử mảng đầu tiên
      + prevValue: của lần lặp sau sẽ là return của lần lặp trước
      + Số lần lặp sẽ giảm bớt 1( vd 5 phần tử thì lặp 4 lần)
    Th2: có initalValue
      + prevValue mặc định sẽ lấy initalValue
      + prevValue của lần lặp sau sẽ là return của lần lặp trước
 + currentValue --> Duyệt qua từng phần tử của mảng
 + index --> Index từng phần tử

- initalValue: Giá trị khởi tạo
- Giá trị của hàm reduce sẽ là return của lần lặp cuối cùng

*/

var numbers = [5, 10, 15, 20, 25, 30];

// var result = numbers.reduce(function (prevValue, current) {
//   console.log(prevValue, current);
//   return current + prevValue;
// });
// console.log(result);

// var result = numbers.reduce(function (total, number) {
//   return total + number;
// }, 0);
// console.log(result);

// Bài 1: Tìm giá trị lớn nhất
var numbers = [5, 2, 9, 1, 8];

var max = numbers.reduce(function (max, current) {
  console.log(max, current);
  return max < current ? current : max;
});
console.log(max);

// Bài 2:
//Tất cả học viên
var students = ["Tiến", "Duy", "Nội", "An"];

// Học viên đi học
var studentsActive = ["An", "Tiến"];

// Tìm học viên nghỉ
var studentsInactive = students.reduce(function (prev, current) {
  //   console.log(prev, current);
  if (!studentsActive.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(studentsInactive);

// Bài 3: Lọc trùng
// var students = ["Tiến", "Duy", "Nội", "An", "Tiến", "Nam", "Nội", "Nguyệt"];

// var result = students.reduce(function (prev, current) {
//   if (!prev.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(result);

// Bài 4 Làm phẳng mảng
var numbers = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12, 14]]]];

console.log(numbers);

console.log("join", numbers.join());
var newNumbers = numbers.join();
newNumbers += ",";
console.log(newNumbers);
// function flatArr(arr) {
//   var result = arr.reduce(function (prev, current) {
//     if (!Array.isArray(current)) {
//       return prev.concat(current);
//     }
//     return prev.concat(flatArr(current));
//   }, []);
//   return result;
// }

// console.log(flatArr(numbers));

// numbers.

var newArr = [];

var fc = function (arr) {
  var position = arr.indexOf(",");
  if (position !== -1) {
    newArr[newArr.length] = +arr.slice(0, position);
    arr = arr.slice(position + 1);
    return fc(arr);
  }

  return newArr;
};

console.log(fc(newNumbers));
