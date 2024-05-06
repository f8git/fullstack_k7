// var input = document.querySelector("input");
// input.addEventListener("focus", function (e) {
//   //   console.log(e.key);
//   console.log("focus");
// });
// input.addEventListener("blur", function (e) {
//   //   console.log(e.key);
//   console.log("Blur");
// });

// DOM HTML
var content = document.querySelector(".content");

// 1. innerHTML

// console.log(content.innerHTML);

// content.innerHTML = `<h1>Học JS khôg khó</h1>`;

//  2. innerText

// console.log(content.innerText);

// content.innerText = `<h1>Học lập trình không khó</h1>`;

// 3. textContent
// console.log(content.textContent);

// content.textContent=`A
// B
// C`

// 4. outerHTML
// console.log(content.outerHTML);
// content.outerHTML =`<h1>Học lập trình không khó</h1>`

// 5. outerText
// console.log(content.outerText);
// content.outerText = `<h1>Học lập trình không khó</h1>`

// var an = document.querySelector('button')
// var textContent = content.innerHTML

// an.addEventListener('click', function() {

//    if(content.innerHTML)
//    {
//     this.innerText = `Hiện`
//     content.innerHTML=``

//    }
// else {
//     this.innerText = `Ẩn`
//        content.innerHTML=`${textContent}`

// }
// })

var btnList = document.querySelectorAll("button");
var countText = document.querySelector("span");

for (var i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", function () {
    if (this.innerHTML === "+") {
      console.log(typeof countText.innerHTML);
      countText.innerText++;
    } else {
      countText.innerText--;
    }
  });
}

// xóa thẻ html: element.remove()
// content.remove();
