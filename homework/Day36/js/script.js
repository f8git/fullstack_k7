var timer = document.querySelector(".timer");
var spanTimer = timer.querySelector("span");
var button = document.querySelector("button");
let id;

button.classList.add("disabled");

spanTimer.innerText = "30";

let timeCurrent = 0;
let flag = false;

let timeLast = performance.now();
console.log(timeLast);
let timeProgress = 0;

function a() {
  let end = performance.now();
  timeProgress = end - timeLast;
  if (!flag) {
    timeCurrent = 30 * 1000 - timeProgress;
  } else {
    flag = false;
  }

  if (Math.floor(timeCurrent) !== Math.floor(end)) {
    spanTimer.innerText = Math.floor(timeCurrent / 1000);
  }
  if (+spanTimer.innerText <= 0) {
    button.classList.remove("disabled");
    button.style.cursor = "pointer";
    button.addEventListener("click", function () {
      window.location.href = "https://fullstack.edu.vn/";
    });
  }

  if (+spanTimer.innerText <= 0) {
    spanTimer.innerText = "0";
    return;
  }
  id = requestAnimationFrame(a);
}

id = requestAnimationFrame(a);

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "visible") {
    requestAnimationFrame(a);
    timeLast = performance.now() - timeProgress;
    console.log(1);
  } else {
    flag = true;
    cancelAnimationFrame(id);
    console.log(2);
  }
});

console.log(new Date().getSeconds());
