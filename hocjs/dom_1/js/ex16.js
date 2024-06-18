var box = document.querySelector(".box");
var sections = document.querySelectorAll("section");
var header = document.querySelector("header");

var inputs = document.querySelectorAll("input");

header.addEventListener("click", function (e) {
  if (e.target.localName === "input") {
    inputs.forEach(function (item, index) {
      if (item.checked) {
        var value = sections[index].offsetTop;
        window.scroll({ top: value, behavior: "smooth" });
      }
    });
  }
});

var arr = [];

sections.forEach(function (item) {
  arr.push(item.offsetTop);
});

window.addEventListener("scroll", function () {
  var position = window.scrollY;
  arr.forEach(function (item, index) {
    if (position > item - 100) {
      inputs[index].checked = "true";
    }
  });
});

window.addEventListener("load", function () {
  window.scroll({ top: 0, behavior: "smooth" });
});
