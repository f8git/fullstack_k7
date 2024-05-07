var content = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit minus officiis deleniti, animi mollitia quia incidunt cupiditate exercitationem distinctio? Fugit ipsum maiores, dolor quam doloremque eaque saepe sit et.`;
content = content.trim();
content = content.concat(" ");
var keyword = " ";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var contentCopy = content;

var count = 0;
setInterval(function () {
  count += position;
  //   console.log(contentCopy.slice(0, count - value.length));
  var contentResult =
    contentCopy.slice(0, count - position) +
    `<span>${contentCopy.slice(count - position, count)}</span>` +
    contentCopy.slice(count);
  document.body.innerHTML = contentResult;
  //   console.log(contentResult);
  content = content.slice(position + 1);
  position = content.toLowerCase().indexOf(keyword.toLocaleLowerCase());
  count += 1;
  if (position === -1) {
    content = contentCopy;
    // console.log("content", content);
    count = 0;
    position = content.toLowerCase().indexOf(keyword.toLocaleLowerCase());
  }
}, 500);
