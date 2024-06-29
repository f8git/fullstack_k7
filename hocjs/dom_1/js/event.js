var inputList = document.querySelectorAll("input[type=range]");

var finishEvent = new Event("finish");

inputList.forEach(function (input) {
  input.addEventListener("mousedown", function (e) {
    var initialRate = (e.offsetX * 100) / this.clientWidth;
    initialRate = Math.floor(initialRate);
    finishEvent.initialRate = initialRate;
  });
  input.addEventListener("input", function (e) {
    var value = e.target.value;
    if (+value === 100) {
      this.dispatchEvent(finishEvent);
    }
  });
});

// Dispatch ==> Element ==> Listener

//
/**
 * Đăng kí tài khoản
 - Gửi email kích hoạt
 - Gửi thông báo cho quản trị
 - Gửi email cho quản trị


cũ:
handleRegister() {
//Xử lý đăng kí
sendEmailActive();
sendNotificationToAdmin();
sendEmailToAdmin()


mới:
//Xử lý đăng kí
//Kiểm tra xem đăng kí thành công hay không?
//dispatchEvent: Registed

file khác:
// Listen Event Registered
sendEmailActive();
sendNotificationToAdmin();
sendEmailToAdmin()
}
 */

// Tính năng thanh toán
/**
 - Thêm sản phẩm vào giỏ hàng ==> Dispatch Event
 - Vào trang thanh toán ==> Dispatch Event
 - Submit form thanh toán ==> Dispatch Event
 - Thanh toán thành công ==> Dispatch Event
 - Thanh toán thất bại ==> Dispatch Event
 */
