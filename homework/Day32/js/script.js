var listProduct = [
  { name: "Sản phẩm 1", cost: 1000 },
  { name: "Sản phẩm 2", cost: 2000 },
  { name: "Sản phẩm 3", cost: 3000 },
  { name: "Sản phẩm 4", cost: 4000 },
];

var productTable = document.querySelector(".product-table");
for (var i = 0; i < listProduct.length; i++) {
  var tr = document.createElement("tr");
  tr.innerHTML = `<td>${i + 1}</td>
        <td>${listProduct[i].name}</td>
        <td>${listProduct[i].cost}</td>
        <td>
          <input type="number" value="1" min="0"/>
          <button class="btn btn1">Thêm vào giỏ</button>
        </td>`;
  productTable.append(tr);
}

var buttons = document.querySelectorAll("button.btn");
var bodyCart = document.querySelector(".body-cart");
var trLast = document.querySelector(".tr-last");
var trFooter = document.querySelector(".cart-table tfoot");
var btnUpdate = document.querySelector(".btn-update");
var btnDelete = document.querySelector(".btn-delete");
var cartTable = document.querySelector(".cart");
var cartTextContent = document.querySelector(".text-content");

// console.log(buttons);

var arrCart;

var setLocalStorage = function (arr) {
  var json = JSON.stringify(arrCart);
  // console.log(json.constructor.name);
  localStorage.setItem("data", json);
};

var getLocalStorage = function () {
  var json = localStorage.getItem("data");
  var arr = JSON.parse(json);
  return arr;
};

arrCart = getLocalStorage();
// console.log(arrCart);

var renderCart = function (arr) {
  arr.forEach(function (item, index) {
    var trNew = document.createElement("tr");
    for (var i = 0; i < 6; i++) {
      var td = document.createElement("td");
      var itemValue = Object.values(item);
      if (!i) {
        td.innerText = `${index + 1}`;
      } else if (i > 0 && i < 3) {
        td.innerText = `${itemValue[i]}`;
        // console.log(arrCart[]);
      } else if (i === 3) {
        var input = document.createElement("input");
        input.value = +itemValue[i];
        input.type = "number";
        input.min = "0";
        td.append(input);
      } else if (i === 4) {
        td.innerText = `${+itemValue[i - 2] * +itemValue[i - 1]}`;
      } else if (i === 5) {
        var cartDelete = document.createElement("button");
        cartDelete.innerText = "Xóa";
        cartDelete.className = "cart-delete";

        td.append(cartDelete);
      }
      trNew.append(td);
    }
    bodyCart.append(trNew);
  });
  var total = 0;
  var prices = 0;

  if (bodyCart.children.length > 0) {
    for (var i = 0; i < bodyCart.children.length; i++) {
      bodyCart.children[i].children[4].innerText =
        +bodyCart.children[i].children[3].children[0].value *
        +bodyCart.children[i].children[2].innerText;
      total += +bodyCart.children[i].children[3].children[0].value;
      // console.log(i);
      // console.log(bodyCart.children[0]);
      prices += +bodyCart.children[i].children[4].innerText;
    }
    // console.log(prices);
  } else {
  }
  trFooter.children[0].children[1].innerText = total;
  trFooter.children[0].children[2].innerText = prices;
};
renderCart(arrCart);
if (arrCart.length) {
  cartTextContent.style.display = "none";
  cartTable.style.display = "block";
}

var dataAdd = function (btn) {
  var tr = btn.parentElement.parentElement.children;
  var flag = false;
  for (var i in arrCart) {
    if (arrCart[i].tensp === tr[1].innerText) {
      flag = true;
      break;
    }
    flag = false;
  }
  //   console.log(flag);
  if (!flag) {
    var object = {
      stt: tr[0].innerText,
      tensp: tr[1].innerText,
      cost: tr[2].innerText,
      sl: +btn.parentElement.children[0].value,
      price: `${+tr[2].innerText * +tr[3].children[0].value}`,
    };

    arrCart.push(object);
    setLocalStorage(arrCart);
    // console.log(getLocalStorage());

    var trNew = document.createElement("tr");
    for (var i = 0; i < 6; i++) {
      var td = document.createElement("td");
      if (!i) {
        td.innerText = `${arrCart.length}`;
      } else if (i > 0 && i < 3) {
        td.innerText = `${tr[i].innerText}`;
        // console.log(arrCart[]);
      } else if (i === 3) {
        var input = document.createElement("input");
        input.value = +tr[i].children[0].value;
        input.type = "number";
        td.append(input);
      } else if (i === 4) {
        td.innerText = `${+tr[i - 2].innerText * +tr[i - 1].children[0].value}`;
      } else if (i === 5) {
        var cartDelete = document.createElement("button");
        cartDelete.innerText = "Xóa";
        cartDelete.className = "cart-delete";

        td.append(cartDelete);
      }
      trNew.append(td);
    }
    bodyCart.append(trNew);
  } else {
    for (var i in arrCart) {
      if (arrCart[i].tensp === tr[1].innerText) {
        arrCart[i].sl += +tr[3].children[0].value;
        bodyCart.children[i].children[3].children[0].value = arrCart[i].sl;
        arrCart[i].price = +tr[3].children[0].value * +tr[2].innerText;
        setLocalStorage(arrCart);
        // json = JSON.stringify(arrCart);
        // console.log(json);

        break;
      }
    }
  }
};
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    cartTextContent.style.display = "none";
    cartTable.style.display = "block";
    // console.log("aaaaaaaaaaa");
    dataAdd(btn);

    var total = 0;
    var prices = 0;

    if (bodyCart.children.length > 0) {
      for (var i = 0; i < bodyCart.children.length; i++) {
        bodyCart.children[i].children[4].innerText =
          +bodyCart.children[i].children[3].children[0].value *
          +bodyCart.children[i].children[2].innerText;
        total += +bodyCart.children[i].children[3].children[0].value;
        // console.log(i);
        // console.log(bodyCart.children[0]);
        prices += +bodyCart.children[i].children[4].innerText;
      }
      // console.log(prices);
    } else {
    }
    trFooter.children[0].children[1].innerText = total;
    trFooter.children[0].children[2].innerText = prices;
    // console.log(trFooter.children[0].children[1].innerText);
  });
});

btnUpdate.addEventListener("click", function (e) {
  // console.log(e);
  alert("Cập nhật thành công");
  var total = 0;
  var prices = 0;

  if (bodyCart.children.length > 0) {
    for (var i = 0; i < bodyCart.children.length; i++) {
      arrCart[i].sl = +bodyCart.children[i].children[3].children[0].value;

      bodyCart.children[i].children[4].innerText =
        +bodyCart.children[i].children[3].children[0].value *
        +bodyCart.children[i].children[2].innerText;

      total += +bodyCart.children[i].children[3].children[0].value;
      // console.log(i);
      // console.log(bodyCart.children[0]);
      prices += +bodyCart.children[i].children[4].innerText;
      console.log(bodyCart.children[i].children[4].innerText);
      if (!+bodyCart.children[i].children[4].innerText) {
        arrCart.splice(i, 1);
        console.log(arrCart);
        setLocalStorage(arrCart);
        bodyCart.innerHTML = "";
        renderCart(arrCart);
        if (!arrCart.length) {
          cartTextContent.style.display = "block";
          cartTable.style.display = "none";
        }
      }
    }
    // console.log(prices);
  } else {
  }
  trFooter.children[0].children[1].innerText = total;
  trFooter.children[0].children[2].innerText = prices;
  // console.log(trFooter.children[0].children[1].innerText);
});

btnDelete.addEventListener("click", function () {
  if (confirm("Are you sure?")) {
    cartTextContent.style.display = "block";
    cartTable.style.display = "none";
    bodyCart.innerHTML = "";
    arrCart = [];
    setLocalStorage(arrCart);
    renderCart(arrCart);
  }
});

bodyCart.addEventListener("click", function (e) {
  if (e.target.localName === "button") {
    if (confirm("Are you sure?")) {
      // console.log(e.target.parentElement.parentElement.children[0]);
      arrCart.splice(
        e.target.parentElement.parentElement.children[0].innerText - 1,
        1
      );
      setLocalStorage(arrCart);
      bodyCart.innerHTML = "";
      renderCart(arrCart);
      if (!arrCart.length) {
        cartTextContent.style.display = "block";
        cartTable.style.display = "none";
      }
    }
  }
});

const beforeUnloadHandler = (event) => {
  event.preventDefault();
  event.returnValue = true;
};

cartTable.addEventListener("change", function (e) {
  // Lấy giá trị cũ
  var defaultValue = e.target.defaultValue;
  var value = e.target.value;
  if (defaultValue !== value) {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
