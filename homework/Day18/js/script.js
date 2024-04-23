const btn = document.getElementsByClassName("btn")[0];
const btn1 = document.getElementsByClassName("btn")[1];
const btn2 = document.getElementsByClassName("btn")[2];
const btn3 = document.getElementsByClassName("btn")[3];
const btn4 = document.getElementsByClassName("btn")[4];
const btn5 = document.getElementsByClassName("btn")[5];
const btn6 = document.getElementsByClassName("btn")[6];

btn.addEventListener("click", function () {
  var a = document.getElementsByTagName("input")[0].value;
  var price = 0,
    cost = 0;
  var km_5_in = 0,
    km_5_out = 0;

  if (a > 0) {
    if (a <= 1) {
      cost = 15000;
      console.log(cost);
    } else if (a > 5) {
      price = 11000;
      km_5_out = a - 5;
      cost = 15000 + 4 * 13500 + km_5_out * 11000;
    } else {
      price = 13500;
      km_5_in = a - 1;
      cost = 15000 + km_5_in * price;
    }
  } else cost = false;
  console.log(cost);

  if (a > 120) cost -= (cost * 10) / 100;
  document.getElementsByClassName("return_a")[0].innerHTML = ` ${cost} ${
    cost ? "VND" : ""
  }`;
  // document.getElementsByClassName("return_b")[0].innerHTML = `${b}`;
});

btn1.addEventListener("click", function () {
  var s = document.getElementsByTagName("input")[1].value;
  var cost = 0;
  if (s >= 0) {
    if (s >= 0 && s <= 50) {
      cost = s * 1.678;
    }
    if (s >= 51 && s <= 100) {
      cost = 50 * 1.678 + (s - 50) * 1.734;
    }
    if (s >= 101 && s <= 200) {
      cost = 50 * 1.678 + 50 * 1.734 + (s - 100) * 2.014;
    }
    if (s >= 201 && s <= 300) {
      cost = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (s - 200) * 2.536;
    }
    if (s >= 301 && s <= 400) {
      cost =
        50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (s - 300) * 2.834;
    }
    if (s >= 401) {
      cost =
        50 * 1.678 +
        50 * 1.734 +
        100 * 2.014 +
        100 * 2.536 +
        100 * 2.834 +
        (s - 400) * 2.927;
    }
  } else cost = false;
  document.getElementsByClassName("return_cost")[0].innerHTML = `${cost}`;
});

btn2.addEventListener("click", function () {
  var n = +document.getElementsByTagName("input")[2].value;
  var s = 0;
  for (var i = 1; i <= n; i++) {
    s += i * (i + 1);
  }

  document.getElementsByClassName("return_s")[0].innerHTML = `${s}`;
});
btn3.addEventListener("click", function () {
  var snt = +document.querySelector(".input_snt").value;
  console.log(snt);
  var result = false;
  if (snt > 1 && snt % 1 === 0) {
    if (snt === 2) {
      result = true;
    } else {
      for (var i = 2; i <= Math.sqrt(snt); i++) {
        if (snt % i === 0) {
          result = false;
          break;
        } else result = true;
      }
    }
  } else result = false;

  document.getElementsByClassName("return_result")[0].innerHTML = `Số ${snt} ${
    result ? "là số nguyên tố" : "không là số nguyên tố"
  }`;
  // document.getElementsByClassName("return_b")[0].innerHTML = `${b}`;
});

btn4.addEventListener("click", function () {
  var line = +document.querySelector(".input_line").value;

  var arr = [],
    k = 0;
  var sOut = "<table><tbody>";
  for (var i = 0; i < line; i++) {
    arr[i] = [];
    sOut += "<tr>";
    for (var j = 0; j < i + 1; j++) {
      k++;
      arr[i][j] = k;
      sOut += "<td width= 40px>" + arr[i][j] + "</td>";
    }
    sOut += "</tr>";
  }
  sOut += "</tbody></table>";

  document.getElementsByClassName("return_triangle")[0].innerHTML = `${sOut}`;

  var tbody = document.querySelector("tbody");
  console.log(tbody);
  tbody.classList.add("center-flex");
});

btn5.addEventListener("click", function () {
  var arr = [];
  k = 0;
  var sOut = "<table><tbody>";
  for (var i = 1; i <= 8; i++) {
    arr[i] = [];
    sOut += "<tr>";
    if (i % 2) {
      k = 1;
    } else k = 0;
    for (var j = 1; j <= 8; j++) {
      k++;
      arr[i][j] =
        k % 2 ? `<div class="black"></div>` : `<div class="white"></div>`;
      // console.log(arr[i][j]);
      sOut += "<td>" + arr[i][j] + "</td>";
    }
    sOut += "</tr>";
  }
  sOut += "</tbody></table>";

  document.getElementsByClassName("return_chess")[0].innerHTML = `${sOut}`;
  var divBlack = document.querySelectorAll(".black");
  var divWhite = document.querySelectorAll(".white");
  var trSpace = document.querySelectorAll("tr");
  for (var i = 0; i < trSpace.length; i++) {
    trSpace[i].classList.add("display-flex");
  }

  console.log(divBlack);
  for (var i = 0; i < divBlack.length; i++) {
    divBlack[i].classList.add("black-color");
    divWhite[i].classList.add("white-color");
  }
});

btn6.addEventListener("click", function () {
  var arr = [];
  k = 0;
  var sOut = "<table><tbody>";
  for (var i = 0; i < 10; i++) {
    arr[i] = [];
    sOut += "<tr>";
    for (var j = 0; j < 10; j++) {
      k++;
      arr[i][j] = (i + 1) * (j + 1);
      // k % 2 ? `<div class="black"></div>` : `<div class="white"></div>`;
      // console.log(arr[i][j]);
      sOut +=
        "<td width=100px>" + `${i + 1} x ${j + 1} = ${arr[i][j]} ` + "</td>";
    }
    sOut += "</tr>";
  }
  sOut += "</tbody></table>";

  document.getElementsByClassName("return_muti-table")[0].innerHTML = `${sOut}`;
  // var divBlack = document.querySelectorAll(".black");
  // var divWhite = document.querySelectorAll(".white");
  var trSpace = document.querySelectorAll("return_muti-table tr");
  for (var i = 0; i < trSpace.length; i++) {
    trSpaceSpace[i].classList.add("display-flex");
  }

  // console.log(divBlack);
  // for (var i = 0; i < divBlack.length; i++) {
  //   divBlack[i].classList.add("black-color");
  //   divWhite[i].classList.add("white-color");
  // }
  // divs[4].classList.add("black-color");
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

// var i = 2,
//   n = 10;

// do {
//   console.log(i);
//   if (n % i === 0) {
//   }
//   i++;
// } while (i <= Math.sqrt(a));
