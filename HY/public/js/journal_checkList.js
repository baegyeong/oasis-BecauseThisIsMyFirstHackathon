const check = document.querySelector(".check input");
const date = document.querySelector(".date input");

function clickCheck() {
  date.style.display = "flex";
}

check.addEventListener("click", clickCheck);
