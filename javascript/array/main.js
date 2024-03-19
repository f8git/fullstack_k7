// Mang
/**
 1. Tao mang
 + Cach tao
 + Su dung
 + Kiem tra data type

 
 2. Truy xuat mang
 + Do dai mang
 + Lay phan tu theo index
 */
var languages = [
  "Javascript",
  "PHP",
  "Ruby",
  "Dart",
  null,
  undefined,
  function () {},
  NaN,
  123,
  {},
];

// var languages_1 = new Array(
//   "Javascript",
//   "PHP",
//   "Ruby",
//   "Dart",
//   null,
//   undefined,
//   function () {},
//   NaN,
//   123,
//   {}
// ); // --> khong nen dung
// console.log(languages);
// console.log(typeof languages);

// console.log(languages_1);
// console.log(typeof languages_1);

// //type object && array la object --> Nhan biet kieu object va array
// console.log(Array.isArray(languages)); //--> true
// console.log(Array.isArray({})); //--> false

console.log(languages.length);

console.log(languages[0]); //--> languages[0]-->Javascript
console.log(languages[2]); //-->  languages[2]-->Ruby
