// Tạo cácelement
var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;
// console.log(carouselItems);
var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");
var checkboxList = carousel.querySelector(".checkbox-list");

for (var i = 0; i < carouselItems.length; i++) {
  checkboxList.innerHTML += `<input type="radio" ${
    !i ? `checked` : ""
  } name="img-current" value="${i}" />`;
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
// Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
  // Khi bấm vào nút next -> trừ đi kích thước của 1 item
  if (posision > -(totalWidth - itemWidth)) {
    posision -= itemWidth;
    valueInput++;
    checkboxList.children[valueInput].checked = "true";
  }
  carouselInner.style.translate = `${posision}px`;
  console.log("aaaaaaaaaaaaaaaaa");
});

carouselPrevBtn.addEventListener("click", function () {
  // Khi bấm vào nút prev -> cộng kích thước của 1 item
  if (posision < 0) {
    posision += itemWidth;
    valueInput--;
    checkboxList.children[valueInput].checked = "true";
  }
  carouselInner.style.translate = `${posision}px`;
  console.log("aaaaaaaaaaaaaaaaa");
});

checkboxList.addEventListener("click", function (e) {
  if (e.target.localName === "input") {
    if (+e.target.value > valueInput) {
      posision -= (+e.target.value - valueInput) * itemWidth;
      valueInput = +e.target.value;
    } else {
      posision += (valueInput - +e.target.value) * itemWidth;
      valueInput = +e.target.value;
    }
  }
  carouselInner.style.translate = `${posision}px`;
  console.log("aaaaaaaaaaaaaaaaa");
});

var clientX;
var posisionMove = 0;

var handleMousedown = function (e) {
  e.preventDefault();
  e.stopPropagation();
  carouselInner.classList.add("animation-none");
  clientX = e.clientX;
  console.log(posisionMove);
  posisionMove = 0;
  document.addEventListener("mousemove", handleMousemove);
};

var handleMousemove = function (e) {
  e.preventDefault();
  e.stopPropagation();
  carouselInner.style.cursor = "move";
  // console.log(posisionMove);

  posisionMove = -(clientX - e.clientX);
  // console.log(posisionMove);
  console.log(posision);
  carouselInner.style.translate = `${posision + posisionMove}px`;
  if (Math.abs(posisionMove) > itemWidth / 10) {
    console.log(true);
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
    checkboxList.children[valueInput].checked = "true";
    carouselInner.style.translate = `${posision}px`;
    // console.log(posision);
    document.removeEventListener("mousedown", handleMousedown);
    document.removeEventListener("mousemove", handleMousemove);
  } else {
    document.addEventListener("mouseup", function (e) {
      e.preventDefault();
      e.stopPropagation();
      posisionMove = 0;
      carouselInner.style.translate = `${posision}px`;

      console.log(posision);
      carouselInner.classList.remove("animation-none");
      document.removeEventListener("mousedown", handleMousedown);
      document.removeEventListener("mousemove", handleMousemove);
    });
  }
  console.log(posision);
};

carouselInner.addEventListener("mousedown", handleMousedown);
