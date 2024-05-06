// Tạo cácelement
var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;
console.log(carouselItems);
var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");

// Tính kích thước 1 Item
var itemWidth = carouselInner.clientWidth; //Lấy kích thước chiều rộng của element

// Tính tổng kịch thước cá item
var totalWidth = carouselItems.length * itemWidth;

// Cập nhật Css
carouselInner.style.width = `${totalWidth}px`;

var posision = 0;
// Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
  // Khi bấm vào nút next -> trừ đi kích thước của 1 item
  if (posision > -(totalWidth - itemWidth)) {
    posision -= itemWidth;
  }
  carouselInner.style.translate = `${posision}px`;
});

carouselPrevBtn.addEventListener("click", function () {
  // Khi bấm vào nút prev -> cộng kích thước của 1 item
  if (posision < 0) {
    posision += itemWidth;
  }
  carouselInner.style.translate = `${posision}px`;
});
