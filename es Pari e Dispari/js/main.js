const evenOrodd = document.getElementById("even-odd");
const startBtn = document.getElementById("start");
const numMin = 1;
const numMax = 5;

startBtn.addEventListener("click", function () {
  let userChoise = evenOrodd.value;
  console.log("Scelta dall'utente: ", userChoise);

  let userNumber = askNumber();
  console.log("Numero scelto dall'utente: ", userNumber);

  let computerNumber = getRandomNumber(numMin, numMax);
  console.log("Il numero generato per il computer è: ", computerNumber);

  let sum = userNumber + computerNumber;
  console.log("La somma dei due numeri è: ", sum);
});
