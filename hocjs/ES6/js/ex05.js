class User {
  name; //Thuộc tính
  email;
  #age = 32; //Private
  #data = ["Item 1", "Item 2", "Item 3"];
  static message = "F8";
  constructor(name, email) {
    //hàm khởi tạo ==> thường thiết lập giá trị mặc định
    console.log("User Constructor");
    this.name = name;
    this.email = email;
  }
  #getName() {
    // định nghĩa phương thức
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  #getAge() {
    return this.#age;
  }
  getInfo() {
    return [this.#getName(), this.#getEmail(), this.#getAge()];
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(item) {
    return this.#data.push(item);
  }
}
const user = new User("Manh Tien", "ngocdiem210916@gmail.com");
console.log(user);
// console.log(user.getAge());

// console.log(user.getInfo());
// console.log(User.message);
console.log(user.latest);
user.latest = "Item 4";
console.log(user.latest);

// element.innerHTML ==> Lấy nội dung
// element.innerHTML = "noi dung" ==> cập nhật nội dung mới
