var arr = [5, 1, 20, 8, 10, 24];

var max = arr[0];
var indexOfMax;

for (var index in arr) {
  if (max <= arr[index]) {
    max = arr[index];
    indexOfMax = index;
  }
}
console.log(
  `Array: [${arr}]  có Max = ${max}, Index có value max là: ${indexOfMax}`
);

// ****************************************************************************88

var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
var count = 0;
var arrNew = [];
// var isPrime = false;

for (var index in arr1) {
  if (arr1[index] > 1 && arr1[index] % 1 === 0) {
    if (arr1[index] === 2) {
      arrNew[arrNew.length] = 2;
      //   console.log(arr1);
    } else if (arr1[index] === 3) {
      arrNew[arrNew.length] = 3;
    } else if (arr1[index] > 3) {
      var isPrime = function () {
        for (var i = 2; i <= Math.sqrt(arr1[index]); i++) {
          if (arr1[index] % i === 0) {
            return false;
          } else {
            return true;
          }
        }
      };
      if (isPrime()) {
        arrNew[arrNew.length] = arr1[index];
      }
    }
  }
}

var avg = 0;
for (var index in arrNew) {
  avg += arrNew[index];
}

console.log(
  `${
    arrNew.length === 0
      ? `không có số nguyên tố nào trong mảng`
      : `Trung bình các số nguyên tố trong mảng [${arrNew}] là : ${
          avg / arrNew.length
        }`
  }`
);

// ************************
var arr2Real = [1, 2, 3, 5, 2, 1, 5, 1, 5, 1, 1, 6];
var arr2 = arr2Real;

var arr2New = [];
var countDup = 0;

for (var index in arr2) {
  for (var i = +index + 1; i < arr2.length; i++) {
    if (arr2[index] === arr2[i]) {
      for (var index1 in arr2) {
        if (arr2[+index1] === arr2[i]) {
          countDup++;
          if (countDup > 1) {
            continue;
          }
        }
        arr2New[arr2New.length] = arr2[+index1];
      }
      //   console.log(index);
      if (arr2.length === arr2New.length) break;
      //   console.log(arr2New);
      arr2 = arr2New;
      arr2New = [];
      countDup = 0;
      break;
    }
  }
}

console.log(
  `Array mới sau khi loại bỏ các phần tử trùng nhau từ mảng [${arr2Real}] là: [${arr2}]`
);

// ***************8
const numbersReal = [5, 3, 9, 1, 10, 4];
var numbers = [5, 3, 9, 1, 10, 4];
var element = 20;
var numbersNew = [];
// console.log(numbersReal);

for (var index in numbers) {
  for (var i = +index + 1; i < numbers.length; i++) {
    var elLocal;
    if (numbers[index] > numbers[i]) {
      elLocal = numbers[i];
      numbers[i] = numbers[index];
      numbers[index] = elLocal;
    }
  }
}

// console.log(numbers);
var flag = false;
for (var index in numbers) {
  if (+index === 0 && element <= numbers[+index]) {
    numbersNew[numbersNew.length] = element;
  }
  numbersNew[numbersNew.length] = numbers[index];
  if (element >= numbers[+index] && element <= numbers[+index + 1]) {
    flag = true;
    numbersNew[numbersNew.length] = element;
  }

  if (+index === +numbers.length - 1 && element >= numbers[+index]) {
    numbersNew[numbersNew.length] = element;
  }
}
// flag = false;
// console.log(numbersNew);
console.log(
  `Array mới sau khi sắp xếp tăng dần theo giá trị của phần tử và thêm phần tử ${element} vẫn giữ nguyên thứ tự từ Array [${numbersReal}] là : [${numbersNew}]`
);
