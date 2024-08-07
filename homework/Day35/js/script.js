var toggleBtn = document.querySelector(".btn-toggle");
var dropdownMenu = document.querySelector(".dropdown-menu");
var menuBtn = document.querySelectorAll(".dropdown-menu button");
var textContent = document.querySelector(".text-content");
var controlBtn = document.querySelectorAll(".control-btn button");
var colorBtn = document.querySelector(".color");
var charector = document.querySelector(".charector");
var word = document.querySelector(".word");
var textNodeCharector = document.createTextNode(0);
var textNodeword = document.createTextNode(0);

charector.append(textNodeCharector);
word.append(textNodeword);

toggleBtn.addEventListener("click", handleToggle);
function handleToggle(e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
  document.addEventListener("click", function (e) {
    e.stopPropagation();
    // e.preventDefault();
    dropdownMenu.classList.remove("show");
    // toggleBtn.removeEventListener("click", handleToggle);
    // console.log(e.target);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      dropdownMenu.classList.remove("show");
      //   toggleBtn.removeEventListener("click", handleToggle);
    }
    // console.log(e.key);
  });
}

menuBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    var input = document.querySelector(".dropdown input");
    if (item.className === "pdf") {
      savePdf(input.value);
    }
    if (item.className === "txt") {
      saveAsTxt(input.value);
    }
    if (item.className === "new") {
      input.value = "untitled";
      textContent.innerHTML = "";
      textNodeword.data = 0;
      textNodeCharector.data = 0;
    }
  });
});

controlBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    typeText(btn.className);
  });
});

colorBtn.addEventListener("blur", function () {
  console.log(colorBtn.value);
  typeText("foreColor", colorBtn.value);
});

function typeText(type, value) {
  textContent.focus();
  let pasted = true;
  try {
    if (!document.execCommand(type, false, value)) {
      pasted = false;
    }
  } catch (e) {
    console.error("error caught:", e);
    pasted = false;
  }

  if (!pasted) {
    console.error("paste unsuccessful, execCommand not supported");
  }
}

function savePdf(name) {
  var opt = {
    margin: 1,
    filename: `${name}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(textContent).save();
}

function saveAsTxt(filename) {
  var element = document.createElement("a");
  console.log(textContent);
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textContent.innerText)
  );
  element.setAttribute("download", `${filename}.txt`);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

textContent.addEventListener("keyup", function (e) {
  // console.log(e.target);
  console.log();
  if (e.key === "Enter") {
  }
  let str = textContent.innerText;
  console.log(str);
  let wordsList = str.trim().replaceAll(/\s+/g, " ").split(" ");
  let count = wordsList.length;
  console.log(wordsList);
  var charectorConut = 0;
  wordsList.forEach(function (item) {
    // console.log(item);
    charectorConut += item.replaceAll(" ", "").length;

    textNodeCharector.data = charectorConut;
  });

  textNodeword.data = count;
});
