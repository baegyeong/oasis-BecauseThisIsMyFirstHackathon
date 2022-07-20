const dateIn = document.querySelector(".date input");

const button = document.querySelector(".submit-button");
//const idArr = [];
const percentNum = document.querySelector(".number");
const progress = document.querySelector(".progress");

fetch("http://localhost:3000/api/progresslist")
  .then((response) => response.text())
  .then((result) => {
    Datas = JSON.parse(result);
    console.log(Datas);
    const count = Object.keys(Datas.result).length;
    for (let i = 0; i < count; i++) {
      const name = document.getElementsByClassName("name");
      name[i].innerHTML = Datas.result[i].UPLName;
    }
    for (let j = 0; j < count; j++) {
      const method = document.getElementsByClassName("method");
      method[j].innerHTML = Datas.result[j].UPLExplain;
    }
    progress.style.width =
      Number(Datas.currentHour / Datas.maxHour) * 100 + "%";
    percentNum.innerText = `${progress.style.width}`;
  });

const list = document.getElementsByClassName("check-input");
let check = 0;
let arrList = Array.prototype.slice.call(list);
let checkList = [];
// 날짜 post 요청
function clickButton() {
  for (let check in arrList) {
    if (arrList[check].checked !== false) {
      checkList.push(check);
    }
  }
  const checks = { checkList };
  const checkDate = document.querySelector("#date-input").value;
  const date = { checkDate };
  const obj = Object.assign(checks, date);
  console.log(obj);
  if (checkDate !== "") {
    fetch("http://localhost:3000/api/progresslist", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(obj), //객체 -> JSON
    })
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        Datas = JSON.parse(result);
        console.log(Datas);
      });
  } else {
    alert("완료한 날짜를 입력하세요");
  }
}

button.addEventListener("click", clickButton);

var now_utc = Date.now();
var timeOff = new Date().getTimezoneOffset() * 60000;
var today = new Date(now_utc - timeOff).toISOString().split("T")[0];
dateIn.setAttribute("max", today);

/*
for (let i in dateInput) {
  check[i].addEventListener("click", () => {
    if (dateInput[i].value !== "") {
      check[i].disabled = false;
      console.log(dateInput[i].value);
    } else {
      alert("완료한 날짜를 입력하세요");
      check[i].checked = false;
    }
  });
}

*/
