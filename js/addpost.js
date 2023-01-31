const display = document.querySelector("#display");
const remainder = document.querySelector("#remainder");
const letter = document.querySelector("#letter");
const makepost = document.querySelector("#makepost");
let count = 0;

makepost.addEventListener("click", () => {
  if (remainder.value == "" || letter.value == "") {
    // alert("input all value");
    Swal.fire("Please fill in all required fields");
  } else {
    displayMenuResult(remainder.value, letter.value, count);
  }
  remainder.value = "";
  letter.value = "";
  count++;
});

function displayMenuResult(remainder, letter, id) {
  if (validateData(remainder, letter)) {
    display.innerHTML += `
 

<div class="card" id="${id}" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${remainder}</h5>
    <p class="card-text">${letter}</p>
    <button class="deleteletter" onclick="delateletter('${id}')"><i class="fa-solid fa-xmark"></i></button>
  </div>
</div>

  `;
  }
}

function validateData(remainder, letter) {
  if (remainder == "" || letter == "") return false;
  else return true;
}

function delateletter(id) {
  document.getElementById(id).remove();
}
