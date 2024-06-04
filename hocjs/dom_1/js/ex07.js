var btn = document.querySelector(".btn");
var input = document.querySelector(".input");

// btn.addEventListener("dblclick", function (e) {
//   console.log(this);
//   //   console.log(e.target);
//   console.log(e);
// });

// input.addEventListener("input", function (e) {
//   //   console.log(e);
//   var key = e.data;
//   var value = e.target.value;
//   console.log(`key = ${key}`, `value = ${value}`);
// });
// input.addEventListener("keyup", function (e) {
//   //   console.log(e);
//   var key = e.key;
//   var value = e.target.value;
//   console.log(`key = ${key}`, `value = ${value}`);
// });

// input.addEventListener("change", function (e) {
//   console.log("change", e);
// });
// input.addEventListener("blur", function (e) {
//   console.log("blur", e);
// });
// input.addEventListener("focus", function (e) {
//   console.log("focus", e);
// });

// document.body.addEventListener("keyup", function (e) {
//   console.log(e);
// });

// btn.addEventListener("click", function (e) {
//   //   console.log(this);
//   //   console.log(e.target);
//   console.log(`clientX = ${e.clientX}`);
//   console.log(`clientY = ${e.clientY}`);
//   console.log(`offsetX = ${e.offsetX}`); //
//   console.log(`offsetY = ${e.offsetY}`);
// });

var offsetx;
var offsety;
var handleMouseDown = function (e) {
  offsetx = e.offsetX;
  offsety = e.offsetY;
  //   console.log(e);
  document.addEventListener("mousemove", handleMouseMove);
};
var handleMouseMove = function (e) {
  console.log(e.clientX - offsetx);
  document.addEventListener("mouseup", handleMouseUp);

  btn.style.transform = `translate(${e.clientX - offsetx - 10}px,${
    e.clientY - offsety - 10
  }px)`;
};
var handleMouseUp = function (e) {
  document.removeEventListener("mousemove", handleMouseMove);
};

btn.addEventListener("mousedown", handleMouseDown);
