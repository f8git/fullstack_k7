// DOM Navigation
// 1. Chọn thành phần cha: parentElement

// 2. Chọn thành phần con:

// 3. Chọn thành phần anh em:

/*
- Liền kề sau
*/
var title = document.querySelector(".title");

// Chọn thành phần cha gần nhất : parentElement
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.parentElement.parentElement.parentElement);

var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menu li");

// console.log(menu);
// console.log(menu.children[1].children[1].children[0].innerText);
menuItems.sty;
menuItems.forEach(function (menuItem) {
  if (menuItem.children.length === 2) {
    menuItem.classList.add("has-chilren");

    menuItem.children[0].addEventListener("click", function (e) {
      //   console.log(menuItem.children[1].classList.contains("open"));
      if (!menuItem.children[1].classList.contains("open")) {
        var subMenuOpen = document.querySelector(".menu ul.open");
        // console.log(subMenuOpen);
        if (subMenuOpen !== null) {
          subMenuOpen.classList.remove("open");
          console.log(subMenuOpen.parentElement);
          subMenuOpen.parentElement.classList.remove("icon-open");
        }
      }
      e.preventDefault();
      menuItem.children[1].classList.toggle("open");
      menuItem.classList.toggle("icon-open");
    });
  }
});

var active = document.querySelector(".lists .active");

var next = active.nextElementSibling;
console.log(next);

var last = document.querySelector(".last");
var prev = last.previousElementSibling;
console.log(prev);

/*
- parenNode
- childNode
- nextSibling
- previosSibling

-> học ở DOM Node
*/

var lists = document.querySelector(".lists");
// Lấy element đầu tiên
var first = lists.firstElementChild;
console.log(first);

// Lấy element cuối cùng
var last = lists.lastElementChild;
console.log(last);
// console.log(lists.children[3]);
