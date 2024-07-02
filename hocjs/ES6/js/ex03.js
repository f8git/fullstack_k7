// Destructuring (Array, Object)
// Phá vỡ cấu trúc array, object để truy cập vào các key và lưu vào các biến riêng biệt
// const user = {
//   username: "manhtien",
//   email: "ngocdiem210916@gmail.com",
//   password: "123456",
//   age: 18,
// };

// const username = user.username;
// const email = user.email;
// const password = user.password;

// const { username, email: userEmail, age = 30 } = user;

// console.log(username, userEmail);
// console.log(age);

// const { username, email, ...rest } = user;
// console.log(rest);

// const users = [
//   "Mạnh Tiến",
//   "ngocdiem210916@gmail.com",
//   18,
//   "Hà Nội",
//   { displayName: "Mạnh Tiến F8" },
// ];
// const [username, email, , address] = users;
// console.log(username);
// console.log(address);

// const [username, email, ...rest] = users;
// console.log(rest);

// const [, , , , { displayName }] = users;
// console.log(displayName);

// const output = {
//   displayName: "Mạnh Tiến F8",
//   emails: [{ email: "ngocdiem210916@gmail.com" }],
// };

// const {
//   displayName,
//   emails: [{ email }],
// } = output;
// console.log(displayName, email);

const users = [
  {
    id: 1,
    name: "Mạnh Tiến 1",
  },
  {
    id: 2,
    name: "Mạnh Tiến 2",
  },
  {
    id: 3,
    name: "Mạnh Tiến 3",
  },
];
users.forEach(({ name }) => {
  console.log(name);
});
