var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressSpan = progress.querySelector("span");

// +++++++++++++++++++++++===
var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;

var durationEl = progressBar.nextElementSibling;

var playBtn = document.querySelector(".player .play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var audioProgress = function () {};
// +++++++++++++++++++++++======

var progressBarWidth = progressBar.clientWidth;
var initialClientX;
var value;
var currentValue = 0;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    value = (e.offsetX * 100) / progressBarWidth;
    // console.log(value);
    progress.style.width = `${value}%`;

    document.addEventListener("mousemove", handleDrrag);
    // document.addEventListener("mousemove", handleMove(value));
    initialClientX = e.clientX;
    currentValue = value;
    handleInput(value);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrrag);
  //   document.addEventListener("mouseup", handleMove(value));
  initialClientX = e.clientX;

  //   console.log(progress.style.width);
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrrag);
  // lastOffsetProgressBar = offsetProgressBar;
  currentValue = value;
  //   handleDrrag;
  // handleChange(value);
  // console.log(currentValue);
});

var handleDrrag = function (e) {
  var moveWidth = e.clientX - initialClientX;
  value = (moveWidth * 100) / progressBarWidth + currentValue;
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  console.log(value);
  progress.style.width = `${value}%`;
  handleInput(value);
};

// Nhận giá trị khi kéo, khi bấm chuột xuống

//  1. Nhả chuôt
var handleChange = function (value) {
  console.log(value);
  console.log("duration", audio.duration);
  value = (audio.currentTime * 100) / audio.duration;
  //   audio.currentTime = (value * audio.duration) / 100;
  console.log("current", audio.currentTime);
};

// 2. Bấm chuột và kéo
var handleInput = function (value) {
  console.log(value);
  audio.currentTime = (value * audio.duration) / 100;
};

// 3. Kéo chuội
var handleMove = function (value) {
  console.log("move", value);
};

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60); //Lấy đươc phút
  seconds = Math.floor(seconds - mins * 60); // Tính giây còn lại
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// Lắng nghe sự kiện loadeddata --> Khi nào file tải xong

audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
  console.log(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    // this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    // this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);

  var value = (audio.currentTime * 100) / audio.duration;
  //   console.log(value);
  progress.style.width = `${value === 100 ? 0 : value}%`;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseIcon;
});
audio.addEventListener("pause", function () {
  playBtn.innerHTML = playIcon;
});
