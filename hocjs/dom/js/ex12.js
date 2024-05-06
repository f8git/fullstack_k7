var root = document.querySelector("#root");

var h1 = document.createElement("h1");

var count = 0;
h1.innerText = `Count: `;
var textNode = document.createTextNode(0);
console.log(h1);

h1.append(textNode);

console.log(textNode);

root.append(h1);

var minusBtn = document.createElement("button");
minusBtn.innerText = "-";
root.append(minusBtn);

var plusBtn = document.createElement("button");
plusBtn.innerText = "+";
root.append(plusBtn);

var mousedown = false;
var handleIncrement = function () {
  textNode.data++;
  if (mousedown) {
    setTimeout(function () {
      handleIncrement();
    }, 100);
  }
};

plusBtn.addEventListener("mousedown", function () {
  mousedown = true;
  handleIncrement();
});
plusBtn.addEventListener("mouseup", function () {
  mousedown = false;
});

minusBtn.addEventListener("click", function () {
  textNode.data--;
});
