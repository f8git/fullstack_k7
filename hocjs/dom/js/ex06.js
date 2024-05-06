// DOM CSS
// var content = document.querySelector(".content");

// console.log(content.style);

// content.style.color = "red";
// content.style.fontWeight = "bold";
// content.style.textTransform = "uppercase";

// var css = {
//   color: "red",
//   fontWeight: "bold",
//   fontStyle: "italic",
//   textTransform: "uppercase",
//   backgroundImage: `url("https://picsum.photos/536/354")`,
//   transform: `translateX(20px)`,
// };

// Object.assign(content.style, css);

/*
Bổ sung thêm 2 thuộc tính 

background-image
transition 
transform: translateX(20px)
*/

// Lấy giá trị của thuộc tính CSS
// console.log(content.style.backgroundImage);

var toggle = document.querySelector(".toggle");
var content = document.querySelector(".content");
var time = 400;

toggle.addEventListener("click", function () {
  var css = {
    transitionProperty: "opacity, visibility",
    transition: `${time}ms ease`,
  };
  Object.assign(content.style, css);

  var cssFadeOut = {
    opacity: 0,
    visibility: `hidden`,
  };
  var cssFadeIn = {
    opacity: "",
    visibility: `visible`,
    height: "",
  };

  if (content.style.opacity === "") {
    Object.assign(content.style, cssFadeOut);
    setTimeout(function () {
      Object.assign(content.style, {
        height: 0,
        overflow: "hidden",
      });
    }, time);
  } else {
    Object.assign(content.style, cssFadeIn);
  }
});
