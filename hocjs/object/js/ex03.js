var user = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
  getValue: function () {
    // Trả value của tất cả thuộc tính -->Lưu vào 1 mảng
    // this --> Object hiện tại (user)
    var result = [];
    var current = this;
    console.log(current);
    console.log(Object.keys(this));
    Object.keys(this).forEach(function (key) {
      typeof current[key] !== "funtion" && result.push(current[key]);
    });
    return result;
  },
};

console.log(user.getValue());
var customer = {
  name: "Mạnh Tiến F8",
  address: "Hà Nội",
};
