var root = document.querySelector("#root");
// Tạo element
var h1 = document.createElement("h1");
// console.log(h1);
h1.innerText = `Học lập trình không khó`;
h1.className = "title";
h1.id = "title";
h1.addEventListener("click", function () {
  this.style.color = "red";
});

// h1: Node Element ==> khi đã update vào tree DOM thì nó sẽ mất muốn dùng phải khai báo lại
// Việc cần làm: Đưa node element vào cây DOM(xác định vị trí đưa)
root.append(h1);

var h2 = document.createElement("h2");
h2.innerText = `Học Js rất dễ`;
root.prepend(h2); //Thêm lên trên

var a = document.createElement("a");
a.href = `https://fullstack.edu.vn`;
a.innerText = `F8`;

h1.append(a);

// Bài tập:
// 1. Thêm HTML sau vào dưới cùng của #root
// 2. click vào button "Add" ==> Thêm mới li số thứ tự tăng dần

/*
<ul class = "menu">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
<button>Add</button>
 */

var ul = document.createElement("ul");
ul.className = "menu";
root.append(ul);

count = 4;

var handleBtn = function () {
  for (var i = 0; i < count; i++) {
    var li = document.createElement("li");
    li.innerText = `Iteam ${i + 1}`;
    ul.append(li);
  }
};

handleBtn();
var btn = document.createElement("button");
btn.addEventListener("click", function () {
  count++;
  var li = document.createElement("li");
  li.innerText = `Iteam ${count}`;
  ul.append(li);
});
btn.innerText = `Click me`;
root.append(btn);

var insertBeforeBtn = document.createElement("button");
insertBeforeBtn.innerText = "Inser Before";
insertBeforeBtn.addEventListener("click", function () {
  var h3 = document.createElement("h3");
  h3.innerText = "Manh Tien";
  root.insertBefore(h3, h1);
  var p = document.createElement("p");
  p.innerText = "Js";
  var nextElementH1 = h1.nextElementSibling;
  console.log(nextElementH1);
  if (!nextElementH1) {
    root.append(p);
  } else {
    root.insertBefore(p, nextElementH1);
  }
  var a = console.log(a);
});
root.append(insertBeforeBtn);

var updateNodeBtn = document.createElement("button");
updateNodeBtn.innerText = "Update Node";
updateNodeBtn.addEventListener("click", function () {
  var h2 = document.createElement("h2");
  h2.innerText = "Node thay thế";
  root.replaceChild(h2, h1);
  root.removeChild(ul);
});
root.append(updateNodeBtn);
