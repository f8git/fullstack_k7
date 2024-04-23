// API = Application Programming Interface (Giao diện lập trình ứng dụng)
/*
Giao diện: HTML - CSS - JS

Dữ liệu: Back-End

Giao tiếp giữa Font-end và Back-end (HTTP Protocol(Giao thức))

Back-end: Xây dựng API để các ứng dụng khác có thể thao tác : CRUD
- C = Create
- R = Read
- U = Update
- D = Delete

Font-end: Gọi API (Fetch API)

Thường API được xây dưng theo chuẩn RESTFull

- URL: Server API + resource
==> https://api.fullstack.edu.vn/users --> https://api.fullstack.edu.vn là Server API, users là resource

- HTTP Method:
+ GET -> Lấy dữ liệu
+ POST -> Thêm mới
+ PUT -> Sửa (ghi đè)
+ PATCH -> Sửa (không ghi đè)
+ DELETE -> Xóa

- Endpoint: Method + Resource
+ GET /users
+ POST /users
+ GET /users{id}

- HTTP Restponse Code
+ Success: 200
+ Created: 201
+ Not Found: 404

- HTTP Response Message: JSON

Lấy API ở đâu?
- Tự viết (Back-end và Database)
- Sử dụng các dịch vụ Mockup API
- Sử dụng các thư viện Mockup API

Trong phạm vi khóa học này -> Học về JSON Server

Làm sao để Font-end gọi được API từ Back-End?
- XMLHttpRequest -> Cũ không trả vể Promise
- fetch -> Mới, trả về Promise
- Thư viện: axios, jquery ajax,...

Cơ chế:
+ Client Side Rendering (CSR)
+ Server Side Rendering (SSR)
*/

const serverApi = "http://localhost:3000";

// fetch(`${serverApi}/users`)
//   .then((response) => {
//     console.log(response);
//     //response.json() -> Trả vê dữ liệu và tự động parse JSON thành object, array
//     //response.text() -> Trả về bản gốc của API
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//     document.body.innerHTML = users
//       .map(
//         ({ name, email }) => `<div>
//       <h2>${name}</h2>
//       <h2>${email}</h2>
//       <hr>
//       </div>`
//       )
//       .join("");
//   });

// const getUsers = async () => {
//   const response = await fetch(`${serverApi}/users`);
//   const users = await response.json();
//   console.log(users);
// };

// getUsers();

// const getUser = async (id) => {
//   const response = await fetch(`${serverApi}/users/${id}`);
//   const user = await response.json();
//   console.log(user);
// };

// getUser(1);

// const postUser = async (data) => {
//   // data = object = Dữ liệu gửi lên SERVER
//   const response = await fetch(`${serverApi}/users`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };

// postUser({
//   name: "User 4",
//   email: "user4@gmail.com",
// });

// const updateUser = async (data, id) => {
//   const response = await fetch(`${serverApi}/users/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application.json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };

// updateUser(
//   {
//     name: "User 11",
//   },
//   1
// );

const deleteUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "DELETE",
  });
  console.log(response);
};

deleteUser(3);
