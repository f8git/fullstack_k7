// Function Constructor
// Bản thiết kế của object
// Ví dụ: Tạo 3 object có cá thuộc tính và phương thức sau
/*
name, email, address
getInfo()

--> Tự định nghĩa hàm tạo riêng để sử dụng trường hợp này
*/

function Person(name, email, address) {
  // Đặt tên theo cú pháp Pascalcase
  // Tên dùng danh từ
  this.name = name;
  this.email = email;
  this.address = address;
  this.getInfo = function () {
    return `
        - Name: ${this.name}
        - Email: ${this.email}
        - Address: ${this.address}`;
  };
}

// Prototype
Person.prototype.message = "Hello F8 iu";

// Static
Person.msg = "Học lập trình không khó";
Person.getMsg = function () {
  //   console.log(this);
  //   return "Hello AE F8";
  //   this --> Nội dung hàm tạo (function constructor)
  // Muốn truy cập vào các phương thức, thuộc tính không phải static (non-static) --> Khởi tạo object từ từ khóa this
  return new this().message;
};

// Khởi tạo object
// var obj = new Person("User 1", "email1@gmail.com", "Address 1");
// console.log(obj);
// console.log(obj.message);

// var obj2 = new Person("User 2", "email2@gmail.com", "Address 2");
// console.log(obj2);
// console.log(obj2.message);

// console.log(Person.msg);
// console.log(Person.getMsg());

Person.prototype.somthing = function () {
  //this.constructor --> Trả về hàm tạo của object
  console.log(this.constructor.msg);
};
var user = new Person();
user.somthing();

var customers = [];
console.log(customers.constructor.name);

// if (customers.constructor.name === "Array") {
//   console.log("Là mảng");
// }

if (customers instanceof Array) {
  console.log("là mảng");
}

// Constructor ==> Object ==> Instance

// Bài tập
// Xây dựng hàm tạo Calculator và viết các phương thức
/*
add(...args)
sub(...args)
mul(...args)
div(...args)
*/

function calculator() {
  // console.log(this);
  this.add = function (...args) {
    return args.reduce(function (total, current) {
      return +total + +current;
    });
  };

  this.sub = function (...args) {
    return args.reduce(function (total, current) {
      return total - current;
    });
  };

  this.mul = function (...args) {
    return args.reduce(function (total, current) {
      return total * current;
    });
  };

  this.div = function (...args) {
    return args.reduce(function (total, current) {
      if (+current !== 0) return total / current;
      throw new Error("Không được chia cho số 0");
    });
  };
}

var calc = new calculator();
var total = calc.add(10, 20, 30);
console.log(total);

var b = calc.sub(10, 20);
console.log(b);

var c = calc.mul(10, 20);
console.log(c);

var d = calc.div(10, 2, 2);
console.log(d);
