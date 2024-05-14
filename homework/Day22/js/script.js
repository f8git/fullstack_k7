var arrA = [1, 4, 3, 2, 5, 0];
var arrB = [5, 2, 6, 7, 1, 0, 10];

var newArr = [];

arrA.forEach(function (numberA) {
  //   newArr[newArr.length] = +arrB
  //     .filter(function (number) {
  //       return number === numberA;
  //     })
  //     .join();
  arrB.forEach(function (numberB, indexB) {
    if (numberA === numberB) {
      console.log(numberA);
      newArr[newArr.length] = numberA;
    }
  });
});

// newArr = newArr.filter(function (number) {
//   if (number === "") return false;
//   return 1;
// });
console.log(newArr);

// ***********************************************88
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flatArr(arr) {
  var newArr = arr.reduce(function (prev, current) {
    if (!Array.isArray(current)) {
      // console.log(prev);
      return prev.concat(current);
    }
    // console.log(prev);
    return prev.concat(flatArr(current));
  }, []);
  return newArr;
}

console.log("flat", flatArr(arr));

// ****************************************

arr = [
  ["a", 1, true],
  ["b", 2, false],
];

arr = flatArr(arr);
var typeArr = [];
arr.forEach(function (item, index) {
  var newArr = [];
  var arrIndex = [];
  for (var i in arr) {
    if (typeof item === typeof arr[i]) {
      arrIndex.push(i);
      newArr.push(arr[i]);
    }
  }
  typeArr.push(newArr);
});

var result = typeArr.reduce(function (prev, current) {
  if (!prev.join().includes(current.join())) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(result);

// ***********************************************************
var root = document.querySelector("#root");

var image = [
  "https://picsum.photos/200/200",
  "https://picsum.photos/200/200",
  "https://picsum.photos/200/200",
];

var text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos numquam ut deleniti, recusandae perferendis fugit ex debitis iure at voluptatibus quo velit, voluptatem suscipit, cum ratione nihil delectus vitae?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos numquam ut deleniti, recusandae perferendis fugit ex debitis iure at voluptatibus quo velit, voluptatem suscipit, cum ratione nihil delectus vitae?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos numquam ut deleniti, recusandae perferendis fugit ex debitis iure at voluptatibus quo velit, voluptatem suscipit, cum ratione nihil delectus vitae?",
];
var title = ["Tiêu đề bài viết 1", "Tiêu đề bài viết 2", "Tiêu đề bài viết 3"];

for (var i = 0; i < 3; i++) {
  var itemDiv = document.createElement("div");
  var img = document.createElement("img");
  var contentDiv = document.createElement("div");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  var hr = document.createElement("hr");
  itemDiv.className = `item-${i + 1}`;
  img.src = image[i];
  img.style.width = "200px";
  img.style.height = "200px";
  contentDiv.className = `content`;
  itemDiv.style.display = "flex";
  itemDiv.style.columnGap = "20px";
  h2.innerText = title[i];
  p.innerText = text[i];
  p.style.fontSize = "1.4rem";
  if (i % 2 === 0) {
    root.append(itemDiv);
    itemDiv.append(img);
    itemDiv.append(contentDiv);
    contentDiv.append(h2);
    contentDiv.append(p);
  } else {
    root.append(itemDiv);
    itemDiv.append(contentDiv);
    contentDiv.append(h2);
    contentDiv.append(p);
    itemDiv.append(img);
  }

  root.append(hr);
}

// var rowArr1 = ["<img>", ["<h2>Title 1</h2>", "<p>Lorem</p>"]];
// var rowArr2 = [["<h2>Title 2</h2>", "<p>Lorem</p>"], "<img>"];
// var rowArr3 = ["<img>", ["<h2>Title 3</h2>", "<p>Lorem</p>"]];
