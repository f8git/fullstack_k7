/*
 */

var person1 = {
  name: "Mạnh Tiến",
  email: "ngocdiem210916@gmail.com",
  age: 18,
  getInfo: function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  },
};

// console.log(person1);
// console.log(person1.getInfo());

// Cấu trúc của Object
// Có những thuộc tính nào ?
// Có những phương thức nào ?

// Giải pháp: Tạo 1 function constructor --> Định nghĩa cấu trúc của Object
// Nguyên tắc của function constructor
/*
- Tên hàm là danh từ
- Đặt tên theo quy tắc PascalCase (Ký tự đầu của mỗi từ sec viết hoa)
Ví dụ: UserService, UserCourse, ResetPasswordService,...
*/

function Person(name, email, age) {
  // Thuộc tính
  this.name = name;
  this.email = email;
  this.age = age;
  this.a = "Học JS";
  //  Phương thức
  this.getInfo = function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  };
}
function Mode(...args) {
  // Thuộc tính
  // console.log(args);
  this.cl1 = args[0];
  this.cl2 = args[1];
  this.cl3 = args[2];
  this.cl4 = args[3];
  this.cl5 = args[4];
  this.cl6 = args[5];
  this.cl7 = args[6];
  this.cl8 = args[7];
  //  Phương thức
  this.getInfo = function () {
    return {
      cl1: this.cl1,
      cl2: this.cl2,
      cl3: this.cl3,
      cl4: this.cl4,
      cl5: this.cl5,
      cl6: this.cl6,
      cl7: this.cl7,
      cl8: this.cl8,
    };
  };
}

Person.prototype.message = "Lean JS";

// Tạo object từ constructor
var person1 = new Person("Mạnh Tiến 1", "ngocdiem210916@gmail.com", 18);
var person2 = new Person("Mạnh Tiến 2", "ngocdiem210916@gmail.com", 19);
var person3 = new Person("Mạnh Tiến 3", "ngocdiem210916@gmail.com", 20);
var person4 = new Person("Mạnh Tiến 4", "ngocdiem210916@gmail.com", 21);
var person5 = new Person("Mạnh Tiến 5", "ngocdiem210916@gmail.com", 22);
var person6 = new Person("Mạnh Tiến 6", "ngocdiem210916@gmail.com", 23);
var person7 = new Person("Mạnh Tiến 7", "ngocdiem210916@gmail.com", 24);
var person8 = new Person("Mạnh Tiến 8", "ngocdiem210916@gmail.com", 25);

var modeA = new Mode(
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8
);

modeA.cl1.name = "Tien Le";
console.log("modeA_cl1", modeA.cl1.getInfo());
console.log(person1);
person1.name = "Le";
console.log(person1);
console.log(person1.getInfo());

// var person2 = new Person("Mạnh Tiến 1", "ngocdiem210917@gmail.com", 20);
// console.log(person2);

// // console.log(person2.message);
// console.log(new Person("Mạnh Tiến 1", "ngocdiem210917@gmail.com", 20));

// Kiểm tra 1 object được tạo từ hàm tạo nào?
// console.log(person1.constructor.name);

// var users = ["User 1", "User 2", "User 3"];

// if (users && users.constructor.name === "Array") {
//   console.log("Đây là mảng");
// }

// Thuộc tính tĩnh, phương thức tĩnh
/*
- Không phụ thuộc vào Object
- Truy cập trực tiếp từ constructor (Hàm tạo)
Ví dụ: Array.isArray(), Object.keys(), Object.values(),...
*/

Person.message = "Hello anh em F8"; // Static property

Person.getMessage = function () {
  // Static method
  return "Học JS không khó";
};

var person1 = new Person("Mạnh Tiến", "ngocdiem210916@gmail.com", 18);
Person.something = function () {
  console.log("Something");
  console.log(this);
  console.log(new this().a);
};

Person.something();
// console.log(person1);
// console.log(person1.constructor);
// console.log(person1.constructor.message);

// Note
/*
this trong phương thức thông thường là object
this trong phương thức tĩnh là constructor
*/
