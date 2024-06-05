var inputs = document.querySelectorAll(".form-input");
var btnSubmits = document.querySelectorAll(".form-submit");
var btnEdits = [];
var todoTexts;
var btnDeletes = document.querySelectorAll(".btn-delete");
var todoList = document.querySelector(".todo-list");
var submitEdits;

// console.log(input.value);

// input.addEventListener("input", function (e) {
//   // console.log(input.value, e.value);
//   // console.log(e);
// });
var todoListContent = [];
var indexEdit = [];
var newEl;
var targetList = [];

var handleTarget = function () {
  todoTexts = document.querySelectorAll(".todo p");
  todoTexts.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      console.log("eeeeeeeee", e);
      item.classList.toggle("text-line-through");
      targetList[index] = item.classList.contains("text-line-through")
        ? true
        : false;
      console.log(targetList);
    });
  });
};

var handleBntDelete = function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.parentElement.parentElement.outerHTML = "";
  todoList = document.querySelector(".todo-list");
  var newArr = [];
  todoListContent = todoListContent.filter(function (item, index) {
    // console.log(todoList.children[index]);
    if (todoList.children[index]) {
      newArr[newArr.length] = todoList.children[index].outerHTML;
      console.log(newArr[index]);
      return true;
    }
  });
  // console.log(newArr);
  todoListContent = newArr;
  todoTexts = document.querySelectorAll(".todo p");
  targetList = targetList.filter(function (item, index) {
    if (todoTexts[index]) {
      return todoTexts[index].classList.contains("text-line-through")
        ? true
        : false;
    }
  });
};

var contentListEl = function (arr, targets) {
  arr = arr
    .map(function (item, index) {
      //     item = `<div class="todo">
      //   <p class="${targets[index] ? "text-line-through" : ""}">${
      //       arr[index].length >= 25 ? arr[index].slice(0, 26) : arr[index]
      //     }</p>
      //   <div class="action">
      //     <img class="btn-edit" src="./icons/edit.svg" alt="" />
      //     <img src="./icons/delete.svg" alt="" />
      //   </div>
      // </div>`;
      return item;
    })
    .join("");
  todoList.innerHTML = arr;
  todoTexts = document.querySelectorAll(".todo p");
  todoTexts.forEach(function (item, index) {
    if (targetList[index]) {
      item.classList.add("text-line-through");
    }

    console.log(targetList);
  });
  handleTarget();
  // todoTexts = document.querySelectorAll(".todo p");
  // todoTexts.forEach(function (item, index) {
  //   item.addEventListener("click", function (e) {
  //     e.stopPropagation();
  //     console.log("eeeeeeeee", e);
  //     item.classList.toggle("text-line-through");
  //     targetList[index] = item.classList.contains("text-line-through")
  //       ? true
  //       : false;
  //     console.log(targetList);
  //   });
  // });
};

var handleBntEdit = function (e) {
  // indexEdit.push(index);
  console.log(indexEdit);

  e.preventDefault();
  // e.stopPropagation();
  // console.log(btn.parentElement.parentElement.children[0].innerText);
  // console.log(btn.parentElement.parentElement.outerHTML);
  // var editElCurrent = ;
  // var contentElCurrent = ;
  var btnEdit = this;
  this.parentElement.parentElement.outerHTML = `<form class="form-todo">
      <input type="text" class="form-input" value="${this.parentElement.parentElement.children[0].innerText}">
      <button type="submit" class="form-submit">Add Task</button>
      </form>`;
  todoList = document.querySelector(".todo-list");
  todoListContent = todoListContent.map(function (item, index) {
    return todoList.children[index].outerHTML;
  });
  console.log(todoListContent);
  // btnSubmits = document.querySelectorAll(`.form-submit`);
  submitEdits = document.querySelectorAll(".todo-list .form-submit");
  submitEdits.forEach(function (submitEdit) {
    submitEdit.addEventListener("click", handleSubmitEdit);
  });
  todoTexts = document.querySelectorAll(".todo p");
  targetList = targetList.filter(function (item, index) {
    if (todoTexts[index]) {
      return todoTexts[index].classList.contains("text-line-through")
        ? true
        : false;
    }
  });
};

var handleSubmitEdit = function (e) {
  e.preventDefault();
  e.stopPropagation();
  var submitEdit = this;
  console.log("submitEdit", submitEdit.parentElement.children[0].value);
  submitEdit.parentElement.outerHTML = `<div class="todo">
     <p class="" text-line-through" : ""}">${
       submitEdit.parentElement.children[0].value.length >= 25
         ? submitEdit.parentElement.children[0].value.slice(0, 26)
         : submitEdit.parentElement.children[0].value
     }</p>
    <div class="action">
      <img class="btn-edit" src="./icons/edit.svg" alt="" />
      <img class="btn-delete" src="./icons/delete.svg" alt="" />
    </div>
  </div>`;
  // handleTarget();
  todoList = document.querySelector(".todo-list");
  todoListContent = todoListContent.map(function (item, index) {
    return todoList.children[index].outerHTML;
  });
  btnDeletes = document.querySelectorAll(".btn-delete");
  btnDeletes.forEach(function (btnDelete, index) {
    console.log("Delete");
    btnDelete.addEventListener("click", handleBntDelete);
  });
  btnEdits = document.querySelectorAll(".btn-edit");
  btnEdits.forEach(function (btnEdit, index) {
    console.log("aaaaaaaaaaaaaaaaaa");
    btnEdit.addEventListener("click", handleBntEdit);
  });
  handleTarget();
};

var handleBtnSubmit = function (e) {
  console.log("btn-submit real");
  e.preventDefault;
  newEl = "";
  console.log("submit");
  e.preventDefault();
  // e.stopPropagation();
  // console.log(e.target);
  inputs.forEach(function (input) {
    console.log(input);
    if (input === inputs[0] && input.value) {
      console.log("true");
      // todoListContent.push(input.value);
      todoListContent.push(`<div class="todo">
      <p class="" text-line-through" : ""}">${
        input.value.length >= 25 ? input.value.slice(0, 26) : input.value
      }</p>
      <div class="action">
        <img class="btn-edit" src="./icons/edit.svg" alt="" />
        <img class="btn-delete" src="./icons/delete.svg" alt="" />
      </div>
    </div>`);
      targetList.push(false);
      console.log(todoListContent);
      // console.log(targetList);
      contentListEl(todoListContent, targetList);
      // todoList.innerHTML += newEl;

      input.value = null;
    }
    btnDeletes = document.querySelectorAll(".btn-delete");
    btnDeletes.forEach(function (btnDelete, index) {
      btnDelete.addEventListener("click", handleBntDelete);
    });
    btnEdits = document.querySelectorAll(".btn-edit");
    btnEdits.forEach(function (btnEdit, index) {
      btnEdit.addEventListener("click", handleBntEdit);
    });
    submitEdits = document.querySelectorAll(".todo-list .form-submit");
    submitEdits.forEach(function (submitEdit) {
      submitEdit.addEventListener("click", handleSubmitEdit);
    });
  });
};
btnSubmits.forEach(function (btnSubmit) {
  if (btnSubmit === btnSubmits[0]) {
    btnSubmit.addEventListener("click", handleBtnSubmit);
    btnEdits.forEach(function (btnEdit, index) {
      // btnEdit.removeEventListener("click", handleBntEdit);
    });
  } else {
    btnSubmit.addEventListener("click", handleSubmitEdit);
  }
});

// console.log(todoTexts);
