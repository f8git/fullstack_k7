// Comment JS
/*
Comment nhieu dong
*/

// Khai bao bien (Dat ten theo quy tac camelCase)
var user;

var customer;

var userId, username, email, userEmail;

var course = "Fullstack Offline",
  age = 32;

// Luu y: Neu 1 bien duoc khai bao nhung khong gan gia tri ==> gia tri mac dinh la undefined
console.log(user);
console.log(course);

// Hien thi noi dung len tirnh duyet
document.write("<h2>Hello anh em F8</h2>");

// Dung DOM (Hoc sau)
// document.body.innerHTML = "Hoc JS khong kho";

// Luu y: Noi dung hien thi len trinh duyet co the la the html

// document.write(course);

// var welcome = "Khoa hoc " + course + " tai F8";

// 2015 js bo sung cu phap moi de thay the dau nhay don va nhay kep
// Backtick: ``
var welcome = `<h2>Khoa hoc ${course}  tai F8</h2>
<h3>Manh Tien</h3>`;

document.write(welcome);

// Luu y: Bien trong JS co 2 cach khai bao khac: let, const --> hoc sau
