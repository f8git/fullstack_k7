// Các thao tác của DOM HTML
/**
 - Lấy nội dung của thẻ html
 - Thay đổi nội dung của thẻ html
 - Xóa thẻ html
 - Thêm, sửa, xóa thuộc tính trong thẻ html
 */

var contentEl = document.querySelector(".content");

// //  1. innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h2>Học JS không khó</h2>`;

// // 2. innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h2>Học JS không khó</h2>`;

// 3. textContent
// console.log(contentEl.textContent);
// contentEl.innerText = `<h2>
// Học JS không khó</h2>`;

// 4. outerHTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h2>Học JS không khó</h2>`;

// 4. outerText
// console.log(contentEl.outerText);
// contentEl.outerText = `<h2>Học JS không khó</h2>`;

var btn = document.querySelector(".btn");
var string = contentEl.innerHTML;
console.log(string);

var content = function () {
  if (btn.innerText === "Hiện") {
    btn.innerText = "Ẩn";
    contentEl.innerHTML = string;
  } else {
    contentEl.innerHTML = "";
    btn.innerText = "Hiện";
  }
};

btn.addEventListener("click", content);
var counter = document.querySelector(".counter");
var btnDown = document.querySelector(".btn-down");
var btnUp = document.querySelector(".btn-up");

btnDown.addEventListener("click", function () {
  counter.innerText--;
});
btnUp.addEventListener("click", function () {
  counter.innerText++;
});
