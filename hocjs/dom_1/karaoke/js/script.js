var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Bấm chuột xuống tại progress-bar ==> Chấm màu tím sẽ di chuyển tới vị trí vừa bấm

//Tính chiều rộng của progess-bar
var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;
progressBar.addEventListener("mousedown", function (e) {
  //Lấy được tọa độ tại vị trí bấm (offsetX)
  offsetX = e.offsetX;

  //Tính tỷ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  //Cập nhật CSS vào progress
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX; //Gán ví trí của button màu tím so với body
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
});
var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";
};

var audio = document.querySelector("audio");
var player = document.querySelector(".player");
var playerBtn = player.querySelector(".play-btn i");
var playTimer = player.querySelector(".play-timer");
var currentTimeEl = playTimer.firstElementChild;
var durationEl = playTimer.lastElementChild;
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
window.addEventListener("load", function () {
  setDuration();
  durationEl.innerText = getTimeFormat(duration);
  playerBtn.addEventListener("click", function () {
    if (audio.paused) {
      //Nhạc đang dừng
      audio.play(); //Phát nhạc
    } else {
      //Nhạc đang phát
      audio.pause(); //Dừng nhạc
    }
  });
  audio.addEventListener("play", function () {
    playerBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playerBtn.classList.replace("fa-pause", "fa-play");
  });
  audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    currentTimeEl.innerText = getTimeFormat(currentTime);
    var rate = (currentTime / duration) * 100;
    progress.style.width = `${rate}%`;
  });
});

console.log(lyric);
