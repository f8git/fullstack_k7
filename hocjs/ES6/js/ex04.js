// Spread
// const arr1 = ["Item 1", "Item 2", "Item 3"];
// const arr2 = ["Item 4", ...arr1, "Item 5", "Item 6"];

// console.log(arr2);

// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// // Yêu cầu: thêm todo 4 vào mảng todos và lưu vào biến mới
// const newTodos = [...todos, "Todo 4"];
// // console.log(newTodos);

// const form = {
//   name: " Mạnh Tiến",
//   email: "ngocdiem210916@gmail.com",
// };
// // Cập nhật lại email và lưu vào biến mới
// const newForm = { ...form, email: "lemanhtientct@gmail.com" };
// // console.log(newForm);

// const something = (args1, args2, args3) => {
//   console.log(args1);
//   console.log(args2);
//   console.log(args3);
// };

// const data = ["Data 1", "Data 2", "Data 3"];

// something(...data);
// something.apply(null, data);

// Enhanced Object Literal
// const name = "Mạnh Tiến";
// const email = "ngocdiem210916@gmail.com";
// let address;
// const user = {
//   name,
//   email,
//   address,
//   getName: function () {
//     return this.name;
//   },
//   getEmail() {
//     return this.email;
//   },
// };

// console.log(user);

// const something = (name, email, address) => {
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   console.log(`Address: ${address}`);
// };

// Trường hợp 1: chỉ muốn truyền name
// something("Mạnh Tiến");

// Trường hợp 2: chỉ muốn truyền email
// something(undefined, "ngocdiem210916@gmail.com");

// Xây dựng hàm hỗ trợ arguments(Áp dụng destructuring và Enhanced)

// const something = ({ name, email, address }) => {
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   console.log(`Address: ${address}`);
// };

// // something({ name: "Mạnh Tiến" });
// const address = "Hà Nội";
// something({ address });
