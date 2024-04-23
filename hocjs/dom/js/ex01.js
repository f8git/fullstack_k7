// DOM Element

var title = document.getElementById("title");
// console.dir(title);

var titleList = document.getElementsByClassName("title");
// console.dir(titleList);
// console.log(titleList[1].innerHTML);

var titleList = document.getElementsByTagName("h2");
// console.log(titleList);

var title = document.querySelector(".title");
// console.log(title);

var titleList = document.querySelectorAll(".title");
// console.log(titleList);

// var btn = document.querySelector(".content .btn");
// console.log(btn);
// var subTitle = document.querySelector(".content .sub-title");
// console.log(subTitle);

var content = document.querySelector(".wrapper");

var btn = content.querySelector(".btn");
console.log(btn);

// Ngoại lệ: head, body
var head = document.head;
console.log(head);

var body = document.body;
console.log(body);

// Ngoại lệ form
var input = document.form_login.fullname;
console.log(input);
if (input) {
  input.value = "Hello F8";
}
var submitBtn = document.form_login.submit;
console.log(submitBtn);

// Lưu ý: Khi chọn Element để thao tác DOM --> Kiểm tra Element có tồn tại không?
/*
1. Nếu element là phần tử --> Kiểm tra khác null và undefined
2. Nếu element là 1 danh sách --> Kiểm tra length > 0
*/
