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

// var month = 1;

// if (month % 1 === 0) {
//   if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log("so ngay trong thang la 30");
//   } else if (month === 2) {
//     console.log("so ngay trong thang la 28 hoac 29");
//   } else {
//     console.log("so ngay trong thang la 31");
//   }
// } else {
//   alert("ngay trong thang la so nguyen duong");
// }

// var n = 3;
// var value = 1;
// var total = 1;

// for (var i = 1; i <= n; i++) {
//   for (var j = i; j > 1; j--) {
//     value *= j;
//   }
//   total += value;
//   value = 1;
// }

// console.log(total);

var i = 2,
  n = 10;

do {
  console.log(i);
  if (n % i === 0) {
  }
  i++;
} while (i <= Math.sqrt(a));
