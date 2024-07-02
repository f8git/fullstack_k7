var timer = document.querySelector(".timer");
var spanTimer = timer.querySelector("span");
var button = document.querySelector("button");
let id;

button.classList.add("disabled");

spanTimer.innerText = "29";
// console.log(timer);

let timeCurrent = 0;
let flag = false;

let timeLast = new Date().getSeconds();
let timeProgress = 0;

function a() {
  let end = new Date().getSeconds();
  timeProgress = end - timeLast;
  if (!flag) {
    timeCurrent = 10 - timeProgress;
  } else {
    flag = false;
  }

  if (timeCurrent !== end) {
    spanTimer.innerText = timeCurrent;
  }
  if (+spanTimer.innerText === 0) {
    button.classList.remove("disabled");
    button.style.cursor = "pointer";
    button.addEventListener("click", function () {
      window.location.href = "https://fullstack.edu.vn/";
    });
  }

  if (+spanTimer.innerText === 0) {
    spanTimer.innerText = "0";
    return;
  }
  id = requestAnimationFrame(a);
}

id = requestAnimationFrame(a);

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "visible") {
    requestAnimationFrame(a);
    timeLast = new Date().getSeconds() - timeProgress;
    console.log(1);
  } else {
    flag = true;
    cancelAnimationFrame(id);
    console.log(2);
  }
});
