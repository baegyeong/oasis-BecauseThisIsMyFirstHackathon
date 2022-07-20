
let registerForm;

// 전번 입력 후 인증번호 받기
const checkBTN = document.querySelector(".checkBTN");

function clickCheckBTN() {
  const memberName = document.querySelector("#Name").value;
  const memberPassword = document.querySelector("#PW").value;
  const memberNumber = document.querySelector("#pNumber").value;

  document.querySelector("#checkNum").disabled = false;

  registerForm = {memberName,memberPassword,memberNumber};

  // console.log(registerForm);
}

checkBTN.addEventListener("click",clickCheckBTN);

// 인증번호 입력 후 회원가입
const registerBTN = document.querySelector(".registerBTN");

function clickRegisterBTN() {
  const checkNum = document.querySelector("#checkNum").value;
  
  // 인증번호 맞는지 확인 코드 추가
  console.log("인증번호:",checkNum);

  console.log(registerForm);
}

registerBTN.addEventListener("click", clickRegisterBTN);