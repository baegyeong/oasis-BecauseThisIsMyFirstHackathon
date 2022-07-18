
// 로그인 입력폼
const loginBTN = document.querySelector(".loginBTN");

function clickLoginBTN(event) {
  event.preventDefault();
  const memberNumber = document.querySelector('#pNumber').value;
  const memberPassword = document.querySelector('#PW').value;

  const loginForm = {memberNumber,memberPassword};
  console.log(loginForm);
}

loginBTN.addEventListener("click", clickLoginBTN);