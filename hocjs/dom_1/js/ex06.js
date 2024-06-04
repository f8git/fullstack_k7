// Dùng inline css ==> Thêm trực tiếp css từ JS

var styleBtn1 = document.querySelector(".style-1");
var styleBtn2 = document.querySelector(".style-2");
var styleBtn3 = document.querySelector(".style-3");

var boxEl = document.querySelector(".box");
console.log(boxEl.style);
styleBtn1.addEventListener("click", function () {
  boxEl.style.color = "red";
});
styleBtn2.addEventListener("click", function () {
  //   boxEl.style.fontStyle = "italic";
  //   boxEl.style.fontWidth = "700";
  //   boxEl.style.backgroundColor = "gray";
  var css = {
    fontStyle: "italic",
    fontWidth: "700",
    backgroundColor: "gray",
    color: null,
    height: "300px",
  };
  Object.assign(boxEl.style, css);
});

console.log(boxEl.style);

// Bài tập: click vào btn style-3 ==> thêm ảnh nền (Object.assign()) với hình ảnh trong folder images

styleBtn3.addEventListener("click", function () {
  boxEl.style.backgroundImage = "url('./img/785-536x354.jpg')";
});
