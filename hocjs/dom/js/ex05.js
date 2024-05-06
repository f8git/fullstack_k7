var btnOpenModal = document.querySelector("button");
var close = document.querySelector("span");
var body = document.querySelector("body");
console.log(btnOpenModal);

var modal = document.querySelector(".modal");
console.log(modal);
var boxModal = document.querySelector(".box-modal");

btnOpenModal.addEventListener("click", function () {
  modal.classList.add("display-block");
  boxModal.classList.add("display-block");
});
modal.addEventListener("click", function () {
  modal.classList.remove("display-block");
  boxModal.classList.remove("display-block");
});

close.addEventListener("click", function () {
  modal.classList.remove("display-block");
  boxModal.classList.remove("display-block");
});

body.addEventListener("keyup", function (e) {
  //   console.log(e);
  //   console.log(e.key);
  if (e.key === "Escape") {
    modal.classList.remove("display-block");
    boxModal.classList.remove("display-block");
  }
});

var form = document.querySelector("form");
var content = document.querySelector(".content");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //Ngăn hành động mặc định của tình duyệt với thẻ html
  var nameEl = this.querySelector(".name");
  var name = nameEl.value;
  if (!nameEl.value) {
    alert("Vui lòng nhập tên!");
    return;
  }
  console.log("a" + name);
  nameEl.value = "";
  content.innerHTML += `<h3>${name}</h3>`;
});
