const btn = document.getElementsByClassName("btn")[0];
const btn1 = document.getElementsByClassName("btn")[1];
const btn2 = document.getElementsByClassName("btn")[2];
const btn3 = document.getElementsByClassName("btn")[3];
const btn4 = document.getElementsByClassName("btn")[4];

btn.addEventListener("click", function () {
  var a = document.getElementsByTagName("input")[0].value;
  var b = document.getElementsByTagName("input")[1].value;

  a = +a + +b;
  b = +a - +b;
  a = +a - +b;

  document.getElementsByClassName("return_a")[0].innerHTML = `${a}`;
  document.getElementsByClassName("return_b")[0].innerHTML = `${b}`;
});

btn1.addEventListener("click", function () {
  var s = document.getElementsByTagName("input")[2].value;
  console.log(typeof s);

  s = 10 + 20 + (5 ^ 10) / 2;

  document.getElementsByClassName("return_s")[0].innerHTML = `${s}`;
});

btn2.addEventListener("click", function () {
  var a = +document.getElementsByTagName("input")[3].value;
  var b = +document.getElementsByTagName("input")[4].value;
  var c = +document.getElementsByTagName("input")[5].value;

  document.getElementsByClassName("return_max")[0].innerHTML = `${
    a > b ? (a > c ? a : c) : b > c ? b : c
  }`;
});
btn3.addEventListener("click", function () {
  var a = +document.getElementsByTagName("input")[6].value;
  var b = +document.getElementsByTagName("input")[7].value;

  // a = +a + +b;
  // b = +a - +b;
  // a = +a - +b;

  document.getElementsByClassName("return_compare")[0].innerHTML = `${
    a * b > 0 ? "cùng dấu" : "trái dấu"
  }`;
  // document.getElementsByClassName("return_b")[0].innerHTML = `${b}`;
});

btn4.addEventListener("click", function () {
  var a = +document.getElementsByTagName("input")[8].value;
  var b = +document.getElementsByTagName("input")[9].value;
  var c = +document.getElementsByTagName("input")[10].value;

  var arr = [a, b, c];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        arr[i] += arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
      }
    }
  }

  document.getElementsByClassName(
    "return_up"
  )[0].innerHTML = `[ ${arr[0]}, ${arr[1]}, ${arr[2]} ]`;
});
// console.log(typeof +a);
// console.log(b);

// var a = 25;
// var b = 55;
// var c = 3;

// console.log(` Max = ${a > b ? (a > c ? a : c) : b > c ? b : c}`);

// console.time("clock");
// var a = [5, 3, 2, 10, 7, 0];

// for (var i = 0; i < a.length; i++) {
//   for (var j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       a[i] += a[j];
//       a[j] = a[i] - a[j];
//       a[i] = a[i] - a[j];
//     }
//   }
// }

// console.log(a);
// console.timeEnd("clock");

// var a = -4;
// var b = -10;

// console.log(`Hai so ${a * b > 0 ? "cung dau" : "trai dau"}`);

// S = 10 + 20 + (5 ^ 10) / 2;
