/**
 Web Component: Chia nhỏ các thành phần của trang web thành các thẻ html riêng biệt, dễ dàng tái sử dụng
 - header
 - footer
 - product

 Khi nào cần tách web component
  - Sử dụng ở nhiều nơi
  - Linh hoạt(chỉ cần gọi thẻ html)
  - Giao diện phức tạp

  Các bước định nghĩa component
  - Xây dựng class tương ứng (Kế thừa từ HTMLElement)
  - Xác định logic cần có trong component
  - Đăng kí thẻ html (Lưu ý: Tên thẻ phải có 2 từ và nối bằng thẻ gạch ngang)

Lifecucle Callback
- Vòng đời khi 1 component được tạo ra đến khi nó bị loại bỏ khỏi DOM
- 3 giai đoạn
+ Khởi tạo
+ Cập nhật
+ Loại bỏ

 */

class TodoApp extends HTMLElement {
  //   static observedAttributes = ["data-count"];
  connectedCallback() {
    // console.log("Component được đưa vào DOM");
    var shadow = this.attachShadow({
      mode: "open",
    });
    // shadow.innerHTML = this.innerHTML;
    // this.innerHTML = "";
    this.render(shadow);
    this.initialStyle(shadow);
    this.addEvent();
  }
  render(shadow) {
    shadow.innerHTML = `
        <div class="todo-app">
          <h1>Todo App</h1>
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
          <form>
            <input type="text" placeholder="Name...">
            <button type="submit">Add</button>
          </form>
        </div>
        `;
  }

  addEvent() {
    var form = this.querySelector("form");
    var _this = this;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      _this.handleAddTodo(e.target);
    });
  }

  handleAddTodo(event) {
    var nameEl = event.querySelector("input");
    var name = nameEl.value;
    var ul = this.querySelector("ul");
    ul.innerHTML += `<li>${name}</li>`;
    nameEl.value = ``;
  }

  initialStyle(shadow) {
    console.log(this);
    var style = document.createElement("style");
    style.textContent = `
    .todo-app {
      border: 1px solid red
      }
      h1 {
        color: red  
      }
    }
    `;
    shadow.append(style);
  }
  //   disconnectedCallback() {
  //     console.log("Component bị loại khỏi DOM");
  //   }
  //   attributeChangedCallback(name, oldValue, newValue) {
  //     console.log(
  //       `Thay đổi thuộc tính ${name}, giá trị cũ: ${oldValue}, Giá trị mới: ${newValue}`
  //     );
  //   }
}

customElements.define("todo-app", TodoApp);

// var btn = document.querySelector(".btn");
// var todoAppEl = document.querySelector("todo-app");
// btn.addEventListener("click", function () {
//   //   todoAppEl.remove();
//   todoAppEl.dataset.count++;
// });
