var btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("check-btn");
    if (btn.classList.contains("check-btn")) {
      btn.style.color = "white";
    }
  });
});
