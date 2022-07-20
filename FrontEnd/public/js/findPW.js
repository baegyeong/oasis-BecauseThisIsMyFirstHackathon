
// 전화번호 입력 후 인증번호 받기 
const checkBTN = document.querySelector('.checkBTN');

function clickCheckBTN()  {
  const pNumber = document.querySelector('#pNumber').value;
  document.querySelector('#pNumber').disabled = true;
  console.log("전화번호:",pNumber);

  document.querySelector('#checkNum').disabled = false;
} 

checkBTN.addEventListener("click",clickCheckBTN )

// 인증번호 입력 후 확인
const registerBTN = document.querySelector(".registerBTN");

function clickRegisterBTN() {
  const checkNum = document.querySelector("#checkNum").value;
  console.log("인증번호:",checkNum);

  document.querySelector('#newPW').disabled = false;
}

registerBTN.addEventListener("click", clickRegisterBTN);

// 새 비밀번호 입력 후 완료
const complete = document.querySelector(".complete");

function clickcomplete() {
  const newPW = document.querySelector("#newPW").value;
  console.log("새 비밀번호:",newPW);
}

complete.addEventListener("click", clickcomplete);