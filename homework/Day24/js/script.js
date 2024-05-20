console.log("Bài 1:");
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  var logs;
  if (!field.includes(".")) {
    logs = errors[field].required;
  } else {
    logs =
      errors[field.slice(0, field.indexOf("."))][
        field.slice(field.indexOf(".") + 1)
      ];
  }
  return logs;
}

console.log(getError("password.required"));

// *********************************

console.log("Bài 2:");
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  customers = customers
    .sort(function (a, b) {
      return a.age - b.age;
    })
    .map(function (user) {
      user["shortName"] =
        user.name.slice(0, user.name.indexOf(" ")) +
        user.name.slice(user.name.lastIndexOf(" "));
      return user;
    });
  return customers;
}

const result = createCustomers(customers);
console.log(result);

// *********************************
console.log("Bài 3:");
var data = [];
function handleRegister(name = "", password = "", email = "") {
  if (name === "" || password === "" || email === "") {
    alert("Đăng kí thông tin thiếu!");
  } else {
    data.push({ name: name, password: password, email: email, role: "user" });
  }
}
function handleLogin(email = "", password = "") {
  var result = data.filter(function (user) {
    if ((user.email === email) & (user.password === password)) {
      return true;
    }
  });
  if (result.length) {
    return result;
  } else {
    alert("Thông tin đăng nhập không hợp lệ");
  }
}

var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);

var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

var dataLogin = handleLogin("nguyenvana@email.com", "123456");
console.log("data =", data);
console.log("dataLogin", dataLogin);
