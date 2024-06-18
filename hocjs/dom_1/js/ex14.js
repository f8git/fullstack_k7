var input = document.querySelector("input");

const beforeUnloadHandler = (event) => {
  event.preventDefault();
  event.returnValue = true;
};

// input.addEventListener("input", function (e) {
//   // Lấy giá trị cũ
//   var defaultValue = e.target.defaultValue;
//   var value = e.target.value;
//   if (defaultValue !== value) {
//     window.addEventListener("beforeunload", beforeUnloadHandler);
//   } else {
//     window.removeEventListener("beforeunload", beforeUnloadHandler);
//   }
// });

var form = document.querySelector("form");
form.addEventListener("input", function (e) {
  // Lấy giá trị cũ
  var defaultValue = e.target.defaultValue;
  var value = e.target.value;
  if (defaultValue !== value) {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
