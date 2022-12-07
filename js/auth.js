const signUp = document.querySelector("#signUp");
const singIn = document.querySelector("#singIn");
const register = document.querySelector("#register");
const login = document.querySelector("#login");
const changePasswordVisibility = document.querySelector(
  "#changePasswordVisibility"
);
const registerbutton = document.querySelector("#registerbutton");
const actionToggleArray = document.querySelectorAll(".actionToggle");
const topSide = document.querySelector(".top");

const lastname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const url = location.href;
const action = url.split("/").pop().split("?").pop() || "register";

const showPasswordIcon = '<i class="fa-solid fa-eye"></i>';
const hidePasswordIcon = '<i class="fa-solid fa-eye-slash"></i>';
let isShownPassword = true;

if (action === "register") {
  toggle("register");
} else {
  toggle("login");
  registerbutton.innerHTML = "Log in";
}

login.addEventListener("click", () => {
  registerbutton.innerHTML = "Log in";
});

register.addEventListener("click", () => {
  registerbutton.innerHTML = "Register";
});
changePasswordVisibility.addEventListener("click", () => {
  if (isShownPassword) {
    changePasswordVisibility.innerHTML = hidePasswordIcon;
    password.type = "text";
  } else {
    changePasswordVisibility.innerHTML = showPasswordIcon;
    password.type = "password";
  }
  isShownPassword = !isShownPassword;
});

register.addEventListener("click", () => {
  toggle("register");
});

login.addEventListener("click", () => {
  toggle("login");
});

function toggle(action) {
  const isAction = action === "register";
  actionToggleArray.forEach((element) => {
    if ((element.style.display = isAction)) {
      element.style.display = "block";
    } else element.style.display = "none";
  });
}
