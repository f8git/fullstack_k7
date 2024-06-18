// var positionLast = 0;
// var bodyBox = document.querySelector(".body");
// window.addEventListener("scroll", function () {
//   var position = window.scrollY;
//   if (position - positionLast > 0) {
//     document.body.style.background = "red";
//   } else {
//     document.body.style.background = null;
//   }
//   positionLast = position;
// });

var btn = document.querySelector(".btn");
var btnTop = document.querySelector(".btn-bottom");

btn.addEventListener("click", function () {
  window.scroll({ top: 500, behavior: "smooth" });
});

// btnTop.style.display = "none";
var positionLast = 0;
window.addEventListener("scroll", function () {
  var position = window.scrollY;
  if (position > 500) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
  positionLast = position;
});

btnTop.addEventListener("click", function (e) {
  //   console.log(e);
  window.scroll({ top: 0 });
});
