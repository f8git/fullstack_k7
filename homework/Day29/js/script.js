// Tạo cácelement
var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;
// console.log(carouselItems);
var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");
var checkboxList = carousel.querySelector(".checkbox-list");
var timeInterval = 2000;

for (var i = 0; i < carouselItems.length; i++) {
  checkboxList.innerHTML += `<label><input type="radio" ${
    !i ? `checked` : ""
  } name="img-current" value="${i}" hidden/><span></span></label>`;
}

// Tính kích thước 1 Item
var itemWidth = carouselInner.clientWidth; //Lấy kích thước chiều rộng của element
// console.log(itemWidth);
// Tính tổng kịch thước cá item
var totalWidth = carouselItems.length * itemWidth;

// Cập nhật Css
carouselInner.style.width = `${totalWidth}px`;

var posision = 0;
var valueInput = 0;
var interval;
// Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
  // Khi bấm vào nút next -> trừ đi kích thước của 1 item
  clearInterval(interval);
  if (posision > -(totalWidth - itemWidth)) {
    posision -= itemWidth;
    valueInput++;
    checkboxList.children[valueInput].children[0].checked = "true";
  }
  carouselInner.style.translate = `${posision}px`;
  interval = setInterval(setinterval, timeInterval);
});

carouselPrevBtn.addEventListener("click", function () {
  // Khi bấm vào nút prev -> cộng kích thước của 1 item
  clearInterval(interval);
  if (posision < 0) {
    posision += itemWidth;
    valueInput--;
    checkboxList.children[valueInput].children[0].checked = "true";
  }
  carouselInner.style.translate = `${posision}px`;
  interval = setInterval(setinterval, timeInterval);
});

checkboxList.addEventListener("click", function (e) {
  clearInterval(interval);
  // console.log(e.target.localName);
  if (e.target.localName === "input") {
    console.log(valueInput);
    console.log(e.target.value);
    if (+e.target.value > valueInput) {
      posision -= (+e.target.value - valueInput) * itemWidth;
      valueInput = +e.target.value;
    } else {
      posision += (valueInput - +e.target.value) * itemWidth;
      valueInput = +e.target.value;
    }
  }

  console.log(valueInput);
  carouselInner.style.translate = `${posision}px`;
  interval = setInterval(setinterval, timeInterval);
});

var clientX;
var posisionMove = 0;

var handleMousedown = function (e) {
  clearInterval(interval);
  carouselInner.classList.add("animation-none");
  clientX = e.clientX;
  document.addEventListener("mousemove", handleMousemove);
};

var handleMousemove = function (e) {
  clearInterval(interval);
  carouselInner.style.cursor = "move";
  posisionMove = -(clientX - e.clientX);
  carouselInner.style.translate = `${posision + posisionMove}px`;
  if (Math.abs(posisionMove) > itemWidth / 5) {
    carouselInner.classList.remove("animation-none");
    carouselInner.style.cursor = "";
    if (posisionMove < 0) {
      if (posision > -(totalWidth - itemWidth)) {
        posision -= itemWidth;
        valueInput++;
      }
    }
    if (posisionMove > 0) {
      if (posision < 0) {
        posision += itemWidth;
        valueInput--;
      }
    }
    checkboxList.children[valueInput].children[0].checked = "true";
    carouselInner.style.translate = `${posision}px`;
    document.removeEventListener("mousedown", handleMousedown);
    document.removeEventListener("mousemove", handleMousemove);
  } else {
    document.addEventListener("mouseup", function (e) {
      clearInterval(interval);
      carouselInner.style.cursor = "";
      carouselInner.style.translate = `${posision}px`;
      carouselInner.classList.remove("animation-none");
      document.removeEventListener("mousedown", handleMousedown);
      document.removeEventListener("mousemove", handleMousemove);
      interval = setInterval(setinterval, timeInterval);
    });
  }
};

carouselInner.addEventListener("mousedown", handleMousedown);

var setinterval = function () {
  if (posision === -totalWidth + itemWidth) {
    posision = itemWidth;
    valueInput = -1;
  }
  if (posision > -(totalWidth - itemWidth)) {
    posision -= itemWidth;
    valueInput++;
  }

  checkboxList.children[valueInput].children[0].checked = "true";
  carouselInner.style.translate = `${posision}px`;
};

interval = setInterval(setinterval, timeInterval);
