//
var isPrime = function (n) {
  if (n % 1 === 0 && n > 1) {
    if (n === 2) {
      return true;
    } else {
      for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  } else return false;
};

function symmetry(number) {
  number = String(number);
  //   console.log(number.length);
  if (number.length > 1) {
    if (number[0] === number[number.length - 1]) {
      number = number.slice(1, -1);
      //   console.log(number);
      return symmetry(number);
    } else return false;
  } else return true;
}
var n = 101;

for (var i = n + 1; ; i++) {
  if (isPrime(i)) {
    if (symmetry(i)) {
      console.log(`${i} là số nguyên tố đối xứng gần nhất ${n}`);
      break;
    }
  }
}
// console.log(doixung(121));
// console.log(isPrime(10));

// ********************************************************************
// Trung vị
var a = [4, 3, 6];
var b = [7, 8, 1];
var numbers = a.concat(b);
// console.log(numbers);

numbers = numbers.sort(function (a, b) {
  return a - b;
});

console.log(
  `Trung vị của 2 mảng [${a}] và [${b}] là: ${
    numbers.length % 2 !== 0
      ? numbers[Math.floor(numbers.length / 2)]
      : (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2
  }`
);

// **********************************************************
var numbers = [0, 2, 1, 4];

for (var i = 0; ; i++) {
  if (!numbers.includes(i)) {
    console.log(
      `Số nguyên dương nhỏ nhất không có trong mảng [${numbers}] là: ${i}`
    );
    break;
  }
}
