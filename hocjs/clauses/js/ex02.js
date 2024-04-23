// Câu lệnh switch case
/*
- Áp dụng khi có nhiều nhánh
- Có nhiều điều kiện hoặc (||)
- Biểu thức logic là so sánh bằng (===)
*/

// var action = "edit";
// switch (action) {
//   case "add":
//   case "create":
//   case "insert":
//     console.log("Thêm");
//     break;
//   case "update":
//   case "edit":
//     console.log("Cập nhật");
//     break;
//   case "delete":
//   case "remove":
//   case "destroy":
//     console.log("Xóa");
//     break;
//   default:
//     console.log("Danh sách");
//     break;
// }

// if (action === "add" || action === "create" || action === "insert") {
//   console.log("Thêm");
// } else if (action === "update" || action === "edit") {
//   console.log("Cập nhật");
// } else if (action === "delete" || action === "remove" || action === "destroy") {
//   console.log("Xóa");
// } else {
//   console.log("Danh sách");
// }

var month = 8;
var a;

if (month % 1 === 0 && month >= 1 && month <= 12) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("Thang co 30 ngay");
      break;
    case 2:
      console.log("Thang co 28 ngay hoac 29 ngay");
      break;
    default:
      console.log("Thang co 31 ngay");
      break;
  }
} else {
  console.log("Sai");
}
