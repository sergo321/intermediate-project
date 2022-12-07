const signUp = document.querySelector("#signUp");
const singIn = document.querySelector("#singIn");

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



function toggle(action) {
  const isAction = action === "register";
  actionToggleArray.forEach((element) => {
    if ((element.style.display = isAction)) {
      element.style.display = "block";
    } else element.style.display = "none";
  });
}
registerbutton.addEventListener("click", () => {
  const isAction = action === 'register';
  if (isAction) {
    actionRegister();
  } else {
    actionLogin();
  }
});

function actionRegister() {
  let userLastName = lastname.value;
  let userEmail = email.value;
  let userPassword = password.value;

  const usersArray = getRefFromFirebase("User");
  
  setTimeout(() => {
    let isUserUnique = usersArray.some(user => user.data.email === userEmail);

    if (isUserUnique) {
      displayToast("Failed, Email isn't unique", "error", "red");
      return;
    }
    if (userLastName === "" || userEmail === "" || userPassword === "") {
      displayToast("Failed, Fill every input", "error", "red");
    } else {
      displayToast("Successfully registered", "success", "green");
      addElementInFirebase("User", {
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
      });
      actionbutton.disabled = true;

      const usersArrayUpdated = getRefFromFirebase("User");

      setTimeout(() => {
        const userIndex = usersArrayUpdated.findIndex(user =>
          user.data.email === userEmail &&
          user.data.password === userPassword
        );
        if (userIndex === -1) {
          displayToast("Failed, Auth please sing in", "error", "red");
        } else {
          const id = usersArrayUpdated[userIndex].id;
          sessionStorage.setItem("user_id", id);
          // location.href = "autorized.html";
          alert("done")
        }
      }, 500);
    }
  }, 500);
}

function actionLogin() {
  let userEmail = email.value;
  let userPassword = password.value;

  const usersArrayUpdated = getRefFromFirebase("User");

  setTimeout(() => {
    const userIndex = usersArrayUpdated.findIndex(user =>
      user.data.email === userEmail &&
      user.data.password === userPassword
    );
    if (userIndex === -1) {
      displayToast("Failed, Wrong data", "error", "red");
    } else {
      displayToast("Successfully authorized", "success", "green");
      const id = usersArrayUpdated[userIndex].id;
      sessionStorage.setItem("user_id", id);
      location.href = "index.html";
    }
  }, 1000);
}