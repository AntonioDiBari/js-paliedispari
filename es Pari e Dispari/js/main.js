const evenOrodd = document.getElementById("even-odd");
const startBtn = document.getElementById("start");
let userNumber = "";

startBtn.addEventListener("click", function () {
  let userChoise = evenOrodd.value;
  console.log(userChoise);

  userNumber = askNumber();
  console.log(userNumber);
});
