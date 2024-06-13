var root = document.querySelector("#root");
// Text Node
var h1 = document.createElement("h1");
var textNode = document.createTextNode(0);
h1.innerText = `Count: `;
h1.append(textNode);
var button = document.createElement("button");
button.innerText = `Click me`;
button.addEventListener("click", function () {
  textNode.data++;
});
root.append(h1);
root.append(button);

// comment Node

var comment = document.createComment("Hello anh em F8");
root.append(comment);

// XSS
/**
 Cách 1: Xử lý chuỗi bằng cách chuyển: <, > thành html entities

 Cách 2: Tạo các element bằng document.createElement sau đó đưa nội dung vào bằng innerText
 */
