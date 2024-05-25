var arr = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function buildTree(arr, parentId = 0) {
  var result = [];
  for (var item of arr) {
    if (item.parent === parentId) {
      var children = buildTree(arr, item.id);
      if (children.length > 0) {
        item.children = children;
      }
      delete item.parent;
      result.push(item);
    }
  }
  return result;
}

console.log(buildTree(arr));

// Viết lại hàm reduce()
Array.prototype.reduce2 = function (callback1, callback2) {
  var prev;
  if (typeof callback1 !== "function") return;
  if (callback2 === undefined) {
    prev = this[0];
    for (var i = 0; i < this.length - 1; i++) {
      var result = callback1(prev, this[i + 1], i + 1, this);
      prev = result;
    }
  } else {
    prev = callback2;
    for (var i = 0; i < this.length; i++) {
      var result = callback1(prev, this[i], i, this);
      prev = result;
    }
  }
  return prev;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var size = 3;

var newArr = numbers.reduce2(function (prev, _, index) {
  if (index % size === 0) {
    prev.push(numbers.slice(index, index + size));
    // console.log(prev);
  }
  return prev;
}, []);
console.log(newArr);
