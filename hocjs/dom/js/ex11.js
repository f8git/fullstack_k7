// var title = document.querySelector(".title");
// console.log(title);

// var content = document.querySelector(".content");

// var handleClick = function () {
//   var btn = content.querySelector(".btn");
//   btn.addEventListener("click", function () {
//     content.innerHTML += `<h1>Fullstack - F8</h1>`;
//     handleClick();
//   });
// };

// handleClick();

// content.addEventListener("click", function (e) {
//   console.log(e);
//   if (e.target.classList.contains("btn")) {
//     content.innerHTML += `<h1>Fullstack - F8</h1>`;
//   }
// });

var root = document.querySelector("#root");

// Tạo Element
var h1 = document.createElement("h1");

h1.innerText = "Fullstack - F8";
h1.id = "title";
h1.className = "title";

// Render element lên UT
// 1. append() --> Nhận Object hoặc text
//  hoặc appendChild() --> chỉ nhận Object
//  ==> Đẩy xuống dưới cùng
// 2. prepend() -> Đẩy lên trên cùng
root.append(h1);

var h2 = document.createElement("h2");

h2.innerText = "Hello F8";
root.prepend(h2);

var count = 0;
var btn = document.createElement("button");
btn.innerText = "Add";
root.append(btn);
btn.addEventListener("click", function () {
  var p = document.createElement("p");
  p.innerText = `Công việc: ${++count}`;
  root.append(p);
  if (count === 5) {
    h1.style.color = "red";
    h1.innerText = "Lê Mạnh Tiến";
  }
});

/*
Tạo cặp thẻ ul, li
<ul>
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
        <li class="item">Item 4</li>
        <li class="item">Item 5</li>
    </ul>

--> Sau đó thêm vào trên cùng
*/

var ul = document.createElement("ul");

root.prepend(ul);

for (var i = 1; i <= 5; i++) {
  var li = document.createElement("li");
  li.className = "item";
  li.innerText = `Item ${i} `;
  ul.append(li);
}

// inserBefore()
var h3 = document.createElement("h3");

h3.innerText = "Hôm nay uống gì?";

root.insertBefore(h3, h1);

// Bài tập: Tạo 1 thẻ p có nội dung bất kỳ --> chèn sau node h3

var p = document.createElement("p");
p.innerText = "Học lập trình không khó";

root.insertBefore(p, h3.nextElementSibling);

// replaceChild() -> Thay thế node cũ thành node mới
var h4 = document.createElement("h4");
h4.innerText = "Học lập trình để đi làm";
h4.style.color = "red";
root.replaceChild(h4, h2);

//h2 -> Được giải phóng
root.append(h2);

// removeChild() -> Xóa node con
root.removeChild(h2);
