/*
Chuỗi bao gồm các ký tự được đặt trong đấu nháy
Chuỗi là kiểu dữ liệu nguyên thủy
*/

var a = "Học lập trình không khó ";
console.log(a);

// Kiểm tra 1 biến có phải là kiểu chuỗi không? --> Dùng typeof

if (typeof a === "string") {
  console.log("Đây là chuỗi");
}

// Ép kiểu giữ liệu khác về chuỗi
var b = 10;
// b = b + "";

console.log(typeof b);

/*
Các kiểu dữ liệu nguyên thủy sẽ bọc 1 đối tượng, trong đối tượng đó sẽ có các hàm xử lý với kiểu dữ liệu tương ứng
*/

console.log(String.prototype);
// console.log(Number.prototype);
// console.log(Array.prototype);

var str = "Học F8 lập trình tại F8";

// 1. length: Trả về độ dài của chuỗi
// console.log(str.length);

// 2. charAt(): Trả về kí tự theo index (Bắt đầu từ 0)
// console.log(str.charAt(0));

// 3. charCodeAt(): Trả về mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

// 4.  concat(): Nối chuỗi
// console.log(str.concat("A", "B", "C"));

// 5. includes(): Tìm chuỗi con trong chuỗi cha(Tìm thấy trả về true ngược lại trả về false)
// console.log(str.includes("F8"));

// 6. indexOf(): Tìm chuỗi con trong chuỗi cha, nếu thấy trả về index đầu tiên tìm được, ngược lại trả về -1
// console.log(str.indexOf("F8"));

// 7. lastIndexOf(): Tìm chuỗi con trong chuỗi cha, nếu thấy trả về index cuối cùng tìm được, ngược lại trả về -1
// console.log(str.lastIndexOf("F8"));

// 8. slice(start, end): Cắt chuỗi từ index đến end-1
// console.log(str.slice(0, 3));
// console.log(str.slice(5));
// console.log(str.slice(-5));

// 9.replace(tukhoa, thaythe): Thay thế từ khoa đầu tiên tìm được
// console.log(str.replace("F8", "F88"));

// 10.replaceAll(tukhoa, thaythe): Thay thế tất cả
// console.log(str.replaceAll("F8", "F88"));

// 11. split(): Tách chuỗi thành mảng dựa vào ký tự phân cách
// console.log(str.split(" "));

// 12. startsWith : Kiểm tra chuỗi bắt đầu
// var pathname = "/khoa-hoc/fullstack";
// console.log(pathname.startsWith("/khoa-hoc"));

// 13. endswith: Kiểm tra chuỗi kết thúc
// var pathname = "/khoa-hoc/fullstack.html";
// console.log(pathname.endsWith(".html"));

// 14. toLowerCase(): Chuyển thành chữ thường

// 15. toUpperCase(): Chuyển thành chữ HOA

// 16. trim(): Loai bỏ khoảng trắng đầu hoặc cuối chuỗi
// var str = "   Mạnh Tiến    ";
// console.log(str);
// console.log(str.trim());

// 17. trimStart(): Loại bỏ khoảng trắng đầu chuỗi

// 18. trimEnd(): Loại bỏ khoảng trắng cuối chuỗi

// 19. match(): Cắt chuỗi dựa vào biểu thức chính quy

var content =
  "Hello anh em F8. Số điện thoại của tôi là : 0364333779, thêm số nữa: 0977222924";
var pattern = /0\d{9}/g;
var phones = content.match(pattern);
console.log(phones);
