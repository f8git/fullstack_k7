function sum(...args) {
  console.log(args);
  return args.reduce(function (prev, current) {
    console.log(current.constructor.name);
    if ((current + prev).constructor.name !== "Number") {
      return "Không phải số !";
    }
    return prev + current;
  });
}

console.log(sum("a", 2, 5));

// ****************
var price = 120000000;

Number.prototype.getCurrency = function (a) {
  return `${this.toLocaleString("vi")} ${a}`;
};
console.log(price.getCurrency("đ"));

// ***************
Array.prototype.push2 = function (callback) {
  var newArr = this;
  newArr[newArr.length] = callback;

  return newArr;
};
var numbers = [5, 1, 10, 9, 2];
var result = numbers.push2("a");

console.log(result);

//*****************88 */
Array.prototype.filter2 = function (callback) {
  var newArr = [];
  if (typeof callback !== "function") return;
  for (var i = 0; i < this.length; i++) {
    var check = callback(this[i], i);
    check ? (newArr[newArr.length] = this[i]) : newArr;
  }
  return newArr;
};
var numbers = [5, 1, 10, 9, 2];
var result = numbers.filter2(function (number, index) {
  return number > 5;
});

console.log(result);

// ****************
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
            children: [
              {
                id: 10,
                name: "Chuyên mục 2.2.3.1",
              },
              {
                id: 11,
                name: "Chuyên mục 2.2.3.2",
              },
              {
                id: 12,
                name: "Chuyên mục 2.2.3.3",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function buildTree(arr, str = "") {
  var result = [];
  for (var item of arr) {
    if (Object.keys(item).includes("children")) {
      result.push(item.name);

      var children = buildTree(item.children, str);
      str += "--|";
      // console.log(children);
      for (var i in children) {
        if (typeof children[i] === "string") {
          result.push(`${str}${children[i]}`);
        }
      }
      str = "";
    }
    if (result.includes(item.name)) continue;
    result.push(item.name);
  }
  return result;
}

// console.log(buildTree(categories));

document.write(`<select>
<option value="">Chọn chuyên mục</option>
${buildTree(categories)
  .map(function (item, index) {
    return `<option value="${index}">${item}</option>`;
  })
  .join("")}
</select>`);
