var logoLinks = document.querySelectorAll(".logo-link");
var closeBtn = document.querySelector(".close");
var overlay = document.querySelector(".overlay");
var action = document.querySelector(".action");
var accountNoti = document.querySelector(".account-noti");
var eyeClick = document.querySelector(".eye");
var noeyeClick = document.querySelector(".noeye");
var eyeClick1 = document.querySelector(".eye1");
var noeyeClick1 = document.querySelector(".noeye1");

logoLinks.forEach(function (logo) {
  logo.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
  accountNoti.classList.remove("show");
});

document.addEventListener("keyup", function (e) {
  // console.log(e);
  if (e.key === "Escape") {
    overlay.style.display = "none";
    accountNoti.classList.remove("show");
  }
});

action.addEventListener("click", function (e) {
  e.preventDefault();
  accountNoti.classList.add("show");
  overlay.style.display = "block";
});

eyeClick.addEventListener("click", function () {
  noeyeClick.checked = "true";
});
noeyeClick.addEventListener("click", function () {
  eyeClick.checked = "true";
});
eyeClick1.addEventListener("click", function () {
  noeyeClick1.checked = "true";
});
noeyeClick1.addEventListener("click", function () {
  eyeClick1.checked = "true";
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  accountNoti.classList.remove("show");
});

var authInputs = document.querySelectorAll(".auth-form__input");
var emailBoxs = document.querySelectorAll(".email");
var passwordBoxs = document.querySelectorAll(".password");
var fullnameBox = document.querySelector(".fullname");
var emailErrors = document.querySelectorAll(".email + p");
var emailErrors2 = document.querySelectorAll(".email + p +p");
var passwordErrors = document.querySelectorAll(".password + p");

console.log(authInputs);

console.log(fullnameBox.value);
emailBoxs.forEach(function (emailBox) {
  emailBox.addEventListener("input", function (e) {
    var flag = false;
    var prev = false;
    console.log(flag);

    if (emailBox.value.includes("@")) {
      flag = true;
    }
    if (!flag) {
      emailBox.classList.add("error_input");
      emailErrors.forEach(function (emailError) {
        emailError.classList.add("error_p");
      });
      emailErrors2.forEach(function (emailError) {
        emailError.classList.remove("error_p");
      });
    } else {
      emailBox.classList.remove("error_input");
      emailErrors.forEach(function (emailError) {
        emailError.classList.remove("error_p");
      });
    }

    if (emailBox.value === "") {
      emailBox.classList.add("error_input");
      emailErrors2.forEach(function (emailError) {
        emailError.classList.add("error_p");
      });
      emailErrors.forEach(function (emailError) {
        emailError.classList.remove("error_p");
      });
    }

    // emailBox.addEventListener("blur", function () {
    //   if (!flag) {
    //     emailBox.classList.add("error_input");
    //     emailErrors2.forEach(function (emailError) {
    //       emailError.classList.add("error_p");
    //     });
    //   } else {
    //     emailBox.classList.remove("error_input");
    //     emailErrors2.forEach(function (emailError) {
    //       emailError.classList.remove("error_p");
    //     });
    //   }
  });
});
// passwordBoxs.forEach(function (passwordBox) {
//   passwordBox.addEventListener("input", function (e) {

//     if (!flag) {
//       emailBox.classList.add("error_input");
//       emailErrors.forEach(function (emailError) {
//         emailError.classList.add("error_p");
//       });
//       emailErrors2.forEach(function (emailError) {
//         emailError.classList.remove("error_p");
//       });
//     } else {
//       emailBox.classList.remove("error_input");
//       emailErrors.forEach(function (emailError) {
//         emailError.classList.remove("error_p");
//       });
//     }

//     if (emailBox.value === "") {
//       emailBox.classList.add("error_input");
//       emailErrors2.forEach(function (emailError) {
//         emailError.classList.add("error_p");
//       });
//       emailErrors.forEach(function (emailError) {
//         emailError.classList.remove("error_p");
//       });
//     }

//   });
// });
// });

emailBoxs.forEach(function (emailBox) {
  emailBox.addEventListener("focus", function (e) {
    emailBox.addEventListener("blur", function (e) {
      if (emailBox.value === "") {
        emailBox.classList.add("error_input");
        emailErrors2.forEach(function (emailError) {
          emailError.classList.add("error_p");
        });
        emailErrors.forEach(function (emailError) {
          emailError.classList.remove("error_p");
        });
      }

      passwordBoxs.forEach(function (passwordBox) {
        if (passwordBox.value === "") {
          passwordBox.classList.add("error_input");
          passwordErrors.forEach(function (passwordError) {
            passwordError.classList.add("error_p");
          });
        }
      });
    });
  });
});

passwordBoxs.forEach(function (passwordBox) {
  passwordBox.addEventListener("input", function () {
    if (passwordBox.value) {
      passwordBox.classList.remove("error_input");
      passwordErrors.forEach(function (passwordError) {
        passwordError.classList.remove("error_p");
      });
    }
  });
  passwordBox.addEventListener("focus", function (e) {
    passwordBox.addEventListener("blur", function (e) {
      emailBoxs.forEach(function (emailBox) {
        if (emailBox.value === "") {
          emailBox.classList.add("error_input");
          emailErrors2.forEach(function (emailError) {
            emailError.classList.add("error_p");
          });
          emailErrors.forEach(function (emailError) {
            emailError.classList.remove("error_p");
          });
        }
      });

      if (passwordBox.value === "") {
        passwordBox.classList.add("error_input");
        passwordErrors.forEach(function (passwordError) {
          passwordError.classList.add("error_p");
        });
      }
    });
  });
});

// window.addEventListener("click", function () {
//   passwordBoxs.forEach(function (passwordBox) {
//     if (passwordBox.value) {
//       passwordBox.classList.remove("error_input");
//       passwordErrors.forEach(function (passwordError) {
//         passwordError.classList.remove("error_p");
//       });
//     }
//   });
//   emailBoxs.forEach(function (emailBox) {
//     if (emailBox.value.includes("@")) {
//       emailBox.classList.remove("error_input");
//       emailErrors.forEach(function (emailError) {
//         emailError.classList.remove("error_p");
//       });
//     }
//   });
// });

console.log(emailErrors);
