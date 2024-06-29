// class

class Person {
  name = "Mạnh Tiến";
  email = "ngocdiem210916@gmail.com";
  constructor() {
    console.log("Person Constructor");
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}

class User extends Person {
  constructor() {
    console.log("User Constructor");
    super();
  }
  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}

// var user = new User();
// console.log(user.getInfo());
// console.log(user.getName());

// Tạo ra class kế thừa từ HTMLElement

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Học Js không khó";
  }
}

// Đăng kí class HelloWorld thành 1 thẻ html
customElements.define("hello-world", HelloWorld); //==> Web Component
