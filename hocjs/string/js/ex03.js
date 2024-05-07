var content = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit minus officiis deleniti, animi mollitia quia incidunt cupiditate exercitationem distinctio? Fugit ipsum maiores, dolor quam doloremque eaque saepe sit et.`;
content = content.trim();
content = content.concat(" ");
// console.log(content);
// var keyword = "trình";
var keyword = " ";

// content = content.replaceAll(keyword, `<span>${keyword}</span>`);
// document.body.innerHTML = content;

var posision = content.toLowerCase().indexOf(keyword.toLowerCase());
// content =
//   content.slice(0, posision) +
//   `<span>${content.slice(posision, posision + keyword.length)}</span>` +
//   content.slice(posision + keyword.length);
// console.log(content);
// // console.log(content);
// document.body.innerHTML = content;

// var output = "";
// while (posision !== -1) {
//   output +=
//     content.slice(0, posision) +
//     `<span>${content.slice(posision, posision + keyword.length)}</span>`;

//   content = content.slice(posision + keyword.length);
//   posision = content.toLowerCase().indexOf(keyword.toLocaleLowerCase());
// }

// console.log(output);
// document.body.innerHTML = output + content;

var value = "";
var contentCopy = content;
// console.log(content.slice(0, 0));
var count = 0;
// setTimeout(function () {
// while (posision !== -1) {
var id = setInterval(function () {
  value = content.slice(0, posision);
  // console.log(value);
  count += posision;
  // console.log(count);
  // setTimeout(function () {
  // console.log(contentCopy.slice(0, count - value.length));
  var contentResult =
    contentCopy.slice(0, count - value.length) +
    `<span>${contentCopy.slice(count - value.length, count)}</span>` +
    contentCopy.slice(count);

  document.body.innerHTML = contentResult;
  // }, 500);
  // console.log(contentResult);
  content = content.slice(posision + 1);
  posision = content.toLowerCase().indexOf(keyword.toLocaleLowerCase());
  count += 1;
  if (posision === -1) {
    content = contentCopy;
    // console.log("content", content);
    count = 0;
    posision = content.toLowerCase().indexOf(keyword.toLocaleLowerCase());
  }
}, 500);

// Uppercase()
// var content = "  lê mạnh tiến";
// content = content.trim();
// content = content.charAt(0).toUpperCase() + content.slice(1);
// // console.log(content);
// var output = "";
// for (let i = 0; i < content.length; i++) {
//   if (content.charAt(i) === " " && content.charAt(i + 1) !== " ") {
//     var position = i + 1;
//     content =
//       content.slice(0, position) +
//       content.charAt(position).toUpperCase() +
//       content.slice(position + 1);

//     // content = content.slice(position + 1);
//   }
// }
// console.log(content);
