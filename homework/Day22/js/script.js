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

// var arrBTap_3 = [
//   ["a", 1, true],
//   ["b", 2, false],
// ];

// function Unzip(arr = []) {
//   return arrBTap_3.reduce(
//     (x, y) => (y.forEach((w, i) => x[i].push(w)), x),
//     Array.from({ length: Math.max(...arr.map((y) => y.length)) }).map(() => [])
//   );
// }

// console.log("Mảng được tách theo đúng kiểu dữ liệu: ", Unzip(arrBTap_3));
// console.log(" ");
// // end bTap_3

// function initMap() {
//   var map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 21.0168864, lng: 105.7855574 },
//     zoom: 15,
//   });
// }

// initMap();
// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
let map;

function initMap() {
  const mapOptions = {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: { lat: -34.397, lng: 150.644 },
    map: map,
  });
  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;
