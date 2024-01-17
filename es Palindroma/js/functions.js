//**  FUNCTIONS

/**
 * Chiedo la parola
 * @returns parola richiesta
 */
function askWord() {
  let isValid = false;
  let userWord = "";
  while (!isValid) {
    isValid = true;
    userWord = prompt(
      "Inserisci una parola per verificare che sia palindroma"
    ).trim();
    for (i = userWord.length - 1; i >= 0; i--) {
      let char = userWord.charAt(i);
      console.log(char);
      if (!isNaN(char)) {
        isValid = false;
        alert("Non inserire numeri!");
      }
    }
  }

  return userWord;
}

/**
 * Prende ogni lettera di una parola da invertire e la monta in una variabile con un ciclo for
 * @returns Parola al contrario
 */
function reverseWord() {
  let reverseWord = "";
  for (i = userWord.length - 1; i >= 0; i--) {
    let reverseLetter = userWord.charAt(i);
    reverseWord += reverseLetter;
  }
  return reverseWord;
}
