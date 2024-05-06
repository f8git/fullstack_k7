var email = "hoangan.web@gmail.com";
// Viết chương trình trả về username của email

// var user = email.split("@")[0];
// console.log(user);

var username = email.slice(0, email.indexOf("@"));
console.log(username);

// Bài 2: Viết hàm kiểm tra 1 chuỗi có phải chữ hoa hay không

function isUpper(str) {
  //   console.log(str.length);
  // for (var i = 0; i < str.length; i++) {
  //   // console.log(str.charCodeAt(i));
  //   if (str.charCodeAt(i) > 90) {
  //     return false;
  //   }
  // }
  // return true;
  if (String(str).toUpperCase() === str) {
    return true;
  } else return false;
}
console.log(isUpper("LE MẠNH TIẾN"));
// str = "LeMẠNHTIẾN";
// console.log(str.charCodeAt(0));
