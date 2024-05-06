// setInterval --> Lặp đi lặp lại 1 đoạn chương trình với 1 khoảng thời gian nhất định
// Ví dụ 1 giây chạy 1 lần

// var count = 0;
// var id = setInterval(function () {
//   console.log("Hello anh em F8", ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

//  Định nghĩa hàm callback có đối sô

function display(callback) {
  console.log("Display");
  typeof callback === "function" && callback();
}

var showLog = function (a) {
  console.log("Hello AE F8", a);
};

// var handleShowLog = function () {
//   showLog("Mạnh Tiến");
// };

// display(handleShowLog);

display(function () {
  showLog("Mạnh Tiến");
});

// Tạo 1 hàm không có tham số, bên trong hàm đó gọi hàm callback có tham số và truyền đối số

//
function display2(callback, ...args) {
  // ...args --> Mảng
  console.log("Display2");
  typeof callback === "function" && callback(...args); // spread operator
}

function showLog2(a, b) {
  console.log("Hello ae F8", a, b);
}

// display2(showLog2, "Mạnh Tiến", "JS");

function step1(callback) {
  setTimeout(function () {
    console.log("Bước 1");
    typeof callback === "function" && callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(function () {
    console.log("Bước 2");
    typeof callback === "function" && callback();
  }, 500);
}
function step3(callback) {
  setTimeout(function () {
    console.log("Bước 3");
    typeof callback === "function" && callback();
  }, 1500);
}

step1(function () {
  step2(function () {
    step3();
  });
});

/*
1. Định nghĩa hàm con
2. closure
3. Kỹ thuật Thunk Function
4. IIFE
5. Giải thuật đệ quy
*/
