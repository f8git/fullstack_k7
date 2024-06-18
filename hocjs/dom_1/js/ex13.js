// load: (window) ==> khi các tài nguyên trên trang web tải xong( html, css, js, media, ..)
// DOMContentLoaded ==> Khi hình thành cây DOM

var getSizeImage = function () {
  var imgEl = document.querySelector("img");
  var width = imgEl.width;
  var height = imgEl.height;
  console.log(width, height);
};

// event fire
document.addEventListener("DOMContentLoaded", function () {
  //   var h1 = document.querySelector("h1");
  //   console.log(h1);
  var root = document.querySelector("#root");
  root.style.position = "relative";
  console.log(root);
  console.log("DOM");
  var h2 = document.createElement("h2");
  h2.innerText = "Load...";
  h2.style.position = "fixed";
  h2.style.inset = 0;
  h2.style.margin = 0;
  h2.style.padding = 0;
  h2.style.background = "white";
  h2.style.opacity = "1";
  //   h2.style.visibility = "visibility";
  h2.style.transitionProperty = "visibility opacity";
  h2.style.transition = "1s ease";

  root.prepend(h2);
  //   getSizeImage();
});

window.addEventListener("load", function () {
  //   var h1 = document.querySelector("h1");
  //   console.log(h1);
  console.log("Load");
  var h2 = this.document.querySelector("h2");
  h2.style.opacity = "0";
  h2.style.visibility = "hidden";
  //   h2.style.display = "none";

  //   getSizeImage();
});
