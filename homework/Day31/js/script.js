var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var progressSpan = document.querySelector(".progress span");

// Bấm chuột
var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var offsetProgressBar = 0;
var lastOffsetProgressBar = 0;
var resultRate = 0;
var flag = false;
var flagUpdate = false;

progressBar.addEventListener("mousedown", function (e) {
  flag = true;
  // Lấy được tọa độ tại vị trí bấm(offsetX)

  offsetX = e.offsetX;

  var rate = (offsetX / progressBarWidth) * 100;
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
  // console.log(audio.currentTime);
  handleInput(rate);
  progressBar.addEventListener("mouseup", handleMouseUp);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  flag = true;

  // var offsetXSpan = e.offsetX;
  // lastOffsetProgressBar = lastOffsetProgressBar + offsetXSpan / 2;
  // var rate = ((offsetX + offsetXSpan / 2) / progressBarWidth) * 100;
  // progress.style.width = rate + "%";

  initialClientX = e.clientX;

  offsetProgressBar = offsetX;
  lastOffsetProgressBar =
    (audio.currentTime * progressBarWidth) / audio.duration;
  // offsetProgressBar += initialClientX;
  console.log(lastOffsetProgressBar);
  // console.log(initialClientX + lastOffsetProgressBar);
  handleChange(lastOffsetProgressBar);
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", handleMouseUp);
});

// progressSpan.addEventListener("mouseup", function (e) {
//   // e.stopPropagation();
//   handleUp();
// });

var handleMouseUp = function (e) {
  flag = false;
  e.stopPropagation();
  if (offsetProgressBar > progressBarWidth) {
    offsetProgressBar = progressBarWidth;
  }
  if (offsetProgressBar < 0) {
    offsetProgressBar = 0;
  }
  lastOffsetProgressBar = offsetProgressBar;
  // handleChange(lastOffsetProgressBar);
  document.removeEventListener("mousemove", handleDrag);
  document.removeEventListener("mousedown", handleDrag);
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  handleUp(rate);
};

var handleDrag = function (e) {
  e.stopPropagation();
  var clientX = e.clientX;
  // console.log(lastOffsetProgressBar);
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate > 100) rate = 100;
  if (rate < 0) rate = 0;
  progress.style.width = rate + "%";
  handleInput(rate);
};

// ++++++++++++++++++++++++++++++
var audio = document.querySelector(".audio");
var playTimer = document.querySelector(".play-timer");
var currentTimeEl = playTimer.firstElementChild;
var durationEl = playTimer.lastElementChild;
var player = document.querySelector(".player");
var playBtn = document.querySelector(".play-btn i");

var duration = 0;
var setDuration = function () {
  duration = audio.duration;
};

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

//  1. Nhả chuôt
var handleChange = function (value) {
  // console.log(value);
  // console.log("duration", audio.duration);
  // value = (audio.currentTime * 100) / audio.duration;
  // value = (value / progressBarWidth) * 100;
  audio.currentTime = (audio.duration * value) / progressBarWidth;

  // console.log("current", audio.currentTime);
};

// 2. Bấm chuột và kéo
var handleInput = function (value) {
  // console.log(value);
  // console.log(flag);
  if (flag) {
    console.log("flagUpdate", flagUpdate);
    if (!flagUpdate) {
      audio.currentTime = (value * audio.duration) / 100;
      console.log("value", value);
    }
    flagUpdate = true;
  }
};

// 3. Kéo chuội
var handleMove = function (value) {
  // console.log("move", value);
};

var handleUp = function (value) {
  if (!flag) {
    if (flagUpdate) {
      flagUpdate = false;
      audio.currentTime = (value * audio.duration) / 100;
      // console.log("valueUpdate", value);
    }
  }
  console.log("up");
};

window.addEventListener("load", function () {
  setDuration();
  durationEl.innerText = getTimeFormat(duration);
  playBtn.addEventListener("click", function () {
    if (audio.paused) {
      // Nhạc đang dừng
      audio.play();
    } else {
      // Nhạc đang phát
      audio.pause();
    }
  });

  audio.addEventListener("play", function () {
    playBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playBtn.classList.replace("fa-pause", "fa-play");
  });

  audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    // console.log("currentTime", currentTime);

    currentTimeEl.innerText = getTimeFormat(currentTime);
    var rate = (currentTime / duration) * 100;
    if (!flag) {
      progress.style.width = rate + "%";
    }
    console.log(audio.currentTime, audio.duration);
  });
});
var span = document.createElement("span");
var handleProgressMouseMove = function (e) {
  var css = {
    display: "inline-block",
    translate: `${e.offsetX - 20}px -25px`,
    backgroundColor: "cyan",
    padding: "1px 4px",
    borderRadius: "6px",
  };
  Object.assign(span.style, css);
  span.innerText = `${getTimeFormat(
    Math.round((e.offsetX / progressBarWidth) * audio.duration)
  )}`;
  progressBar.prepend(span);
};

progressBar.addEventListener("mousemove", handleProgressMouseMove);
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

progressSpan.addEventListener("mousedown", function (e) {});

progressBar.addEventListener("mouseleave", function () {
  span.style.display = "none";
});
