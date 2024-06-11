var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var progressSpan = document.querySelector("span");

// Bấm chuột xuống tại progresBar ==> chấm màu tím sẽ di chuyển tới vị trí cừa bấm
var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var offsetProgressBar = 0;
var lastOffsetProgressBar = 0;

progressBar.addEventListener("mousedown", function (e) {
  // Lấy được tọa độ tại vị trí bấm(offsetX)
  offsetX = e.offsetX;
  //   console.log(offsetX);

  var rate = (offsetX / progressBarWidth) * 100;
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
  console.log(offsetX);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();

  // var offsetXSpan = e.offsetX;
  // lastOffsetProgressBar = lastOffsetProgressBar + offsetXSpan / 2;
  // var rate = ((offsetX + offsetXSpan / 2) / progressBarWidth) * 100;
  // progress.style.width = rate + "%";

  initialClientX = e.clientX;
  //   offsetProgressBar += initialClientX;
  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
});

var handleDrag = function (e) {
  e.stopPropagation();
  var clientX = e.clientX;
  console.log(lastOffsetProgressBar);
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate > 100) rate = 100;
  if (rate < 0) rate = 0;
  progress.style.width = rate + "%";
};
