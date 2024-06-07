// DOM Navigation
/**
 Chọn các element theo phân cấp: cha, con, ngang hàng(trước, sau)
 - parentElement
 - children => không dùng được forEach
 - nextElementSibling
 - previousElementSibling
 */

// var menuLinkList = document.querySelectorAll("a");

// menuLinkList.forEach(function (menuLink) {
//   console.log(menuLink.nextElementSibling);
//   if (menuLink.nextElementSibling) {
//     menuLink.classList.add("parent");
//   }
//   menuLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     this.parentElement.classList.add("active");
//     // console.log(this.nextElementSibling);
//     console.log(this.nextElementSibling.children);
//     for (var i = 0; i < this.nextElementSibling.children.length; i++) {
//       this.nextElementSibling.children[i].classList.add("children");
//     }
//     console.log(this.nextElementSibling.children);
//   });
// });

// var menu = document.querySelector(".menu");
// var parent = document.querySelector(".parent");
// console.log(menu.children);

// for (var i = 0; i < menu.children.length; i++) {
//   console.log(menu.children[i].children);
//   if (menu.children[i].children.length > 1) {
//     menu.children[i].classList.add("parent");
//   }
// }
var boxEl = document.querySelector(".box");
var btn = document.querySelector(".btn");
var boxContent;

var menuLinkList = document.querySelectorAll("a");

menuLinkList.forEach(function (menuLink) {
  var subMenu = menuLink.nextElementSibling;
  // console.log(subMenu);
  if (subMenu) {
    menuLink.parentElement.classList.add("has-children");
  }
  menuLink.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("aaa");
    var menuItemActive = document.querySelector(".menu li.active");
    menuLink.parentElement.classList.toggle("active");

    if (menuItemActive) {
      menuItemActive.classList.remove("active");
    }
  });
});

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log(e.target);
  boxContent = `<ul class="menu">
  <li><a href="">Menu 1</a></li>
  <li>
    <a href="">Menu 2</a>
    <ul>
      <li><a href="">Menu 2.1</a></li>
      <li><a href="">Menu 2.2</a></li>
      <li><a href="">Menu 2.3</a></li>
    </ul>
  </li>
  <li>
    <a href="">Menu 3</a>
    <ul>
      <li><a href="">Menu 3.1</a></li>
      <li><a href="">Menu 3.2</a></li>
      <li><a href="">Menu 3.3</a></li>
    </ul>
  </li>
  <li><a href="">Menu 4</a></li>
</ul>`;
});
boxEl.innerHTML = boxContent;

// *********************888

