const evenOroddInput = document.getElementById("even-odd");
const startBtn = document.getElementById("start");
const finalResult = document.getElementById("final-result");
const result = document.getElementById("result");
const numMin = 1;
const numMax = 5;

startBtn.addEventListener("click", function () {
  let userChoise = evenOroddInput.value;
  console.log("Scelta dall'utente: ", userChoise);

  let userNumber = askNumber();
  console.log("Numero scelto dall'utente: ", userNumber);

  let computerNumber = getRandomNumber(numMin, numMax);
  console.log("Il numero generato per il computer è: ", computerNumber);

  let sum = userNumber + computerNumber;
  console.log("La somma dei due numeri è: ", sum);

  let sumResult = evenOrodd(sum);
  console.log("La somma dei due numeri porta ad un numero", sumResult);
  result.innerHTML = `<li class="list-group-item">Hai scelto ${userChoise} ed il numero da te scelto è ${userNumber}</li>
                    <li class="list-group-item">Il numero generato per il computer è ${computerNumber}</li>
                    <li class="list-group-item">La loro somma è uguale a ${sum}</li>`;

  if (userChoise === sumResult) {
    finalResult.innerText = "Hai vinto!!";
    finalResult.classList.add("text-success");
  } else {
    finalResult.innerText = "Hai perso!!";
    finalResult.classList.add("text-danger");
  }
});
