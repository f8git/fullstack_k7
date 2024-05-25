// var user = {
//   name: "Mạnh Tiến",
//   email: "ngocdiem210916@gmail.com",
//   getInfo: function () {
//     var _this = this;
//     console.log(this);
//     // return {
//     //   age: 32,
//     //   getName: function () {
//     //     return this.name;
//     //   },
//     // };
//   },
// };

// // bind() thay đổi this thành object mong muốn
// // var name = user.getInfo().getName.bind(user)();
// // console.log(name);

// user.getInfo.bind("a")();

function something(name, email) {
  console.log(name, email);
  console.log(this.courseName);
  console.log(this.coursePrice);
}
var obj = {
  courseName: "Fullstack",
  coursePrice: 12000,
};
// something("Mạnh Tiến", "ngocdiem210916@gmail.com");

// something.call(obj, "Mạnh Tiến", "ngocdiem210916@gmail.com");

// var arr = ["Mạnh Tiến", "ngocdiem210916@gmail.com"];
// something.apply(obj, arr);

// something.call(obj, ...arr); //ES6
function Person() {
  this.name = "Mạnh Tiến";
  this.email = "ngocdiem210916@gmail.com";
  this.getName = function () {
    return this.name;
  };
  this.getEmail = function () {
    return this.email;
  };
}

function User() {
  Person.call(this); //==> truyền this của User vào Person ==> khi User được khởi tạo thì truy cập được
  this.getInfo = function () {
    console.log(this.getName());
    console.log(this.getEmail());
  };
}

var user = new User();
user.getInfo();
console.log(user.name);

/**
 1. Prototype

 2. Từ khóa this

 3. Function Constructor

 4. bind, call, apply

 5. Kế thừa Constructor
 */
