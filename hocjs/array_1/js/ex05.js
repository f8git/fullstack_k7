// reduce(callback, initialValue)
/*
callback có 4 tham số
- prevValue
- currentValue
- index
- array

initialValue: Giá trị khởi tạo

Cách hoạt động
1. Không có initialValue
- Vòng lặp chạy từ phần tử thứ 2 cho đến hết
- prevValue của lần lặp đầu tiên chính là phần tử đầu tiên của mảng
- currentValue là các phần tử của mảng qua mỗi lần lặp
- prevValue sẽ là return của lần lặp trước
- Giá trị của vòng lặp reduce sẽ là lần return cuối cùng

2. Có initialValue
- Vòng lặp sẽ chạy từ đầu
- prevValue của lần lặp đầu tiên  chính là initialValue
- currentValue là các phần tử của mảng qua mỗi lần lặp
- prevValue sẽ là return của lần lặp trước
- Giá trị của vòng lặp reduce sẽ là lần return cuối cùng
*/

// var numbers = [5, 10, 15, 20, 25, 30];
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(`prev = ${prev}, current = ${current}, index = ${index}`);
//   return current;
// }, []);
// console.log(result);

// var total = numbers.reduce(function (prev, current, index) {
//   console.log(`prev = ${prev}, current = ${current}, index = ${index}`);
//   return prev + current;
// }, 0);

// console.log(total);

var numbers = [2, 9, 5, 1, -5];
// Tìm phần tử lớn nhất dùng reduce

var result = numbers.reduce(function (prev, current) {
  return prev > current ? prev : current;
});
// console.log(result);

var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
// xóa trùng
var result = users.reduce(function (prev, current) {
  //   console.log(prev);
  if (!prev.includes(current)) prev.push(current);
  return prev;
}, []);
// console.log(result);

var arr1 = [5, 2, 1, 6, 9, 9];
var arr2 = [2, 1, 6, 3];
// Tìm phần tử khác nhau 2 mảng

var newArr = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current) && !prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

newArr = arr2.reduce(function (prev, current) {
  if (!arr1.includes(current)) {
    prev.push(current);
  }
  return prev;
}, newArr);
// console.log(newArr);

var numbers = [1, [2, 3], 4, [[5, 6]], 7, [[[8, 9]]]];
//  Làm phẳng mảng numbers
// Dùng reduce
// Không dùng hàm flat

function flatArr(arr) {
  return arr.reduce(function (prev, current) {
    return prev.concat(Array.isArray(current) ? flatArr(current) : current);
  }, []);
}

// console.log(flatArr(numbers));

var flatArr2 = (arr) =>
  arr.reduce(
    (prev, current) =>
      prev.concat(Array.isArray(current) ? flatArr(current) : current),
    []
  );
// console.log(flatArr2(numbers));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var size = 3;
// Chunk array với size tương ứng
// var newArr = numbers.reduce(function (prev, _, index) {
//   if (index % size === 0) {
//     prev.push(numbers.slice(index, index + size));
//     console.log(prev);
//   }
//   return prev;
// }, []);
// console.log(newArr);

var chunkArr = numbers.reduce(
  function (prev, current) {
    if (prev[prev.length - 1].length === size) {
      prev.push([current]);
    } else {
      prev[prev.length - 1].push(current);
    }
    return prev;
  },
  [[]]
);
console.log(chunkArr);

// Array.from()
// Array.keys()
// Tham chiếu Array
// Copy Array
