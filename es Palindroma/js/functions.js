//**  FUNCTIONS

/**
 * Chiedo la parola, senza numeri
 * @returns parola richiesta
 */
function askWord(testoDescrittivo) {
  let isValid = false;
  let userWord = "";
  while (!isValid) {
    isValid = true;
    userWord = prompt(`Inserisci una parola per ${testoDescrittivo}`)
      .toLowerCase()
      .trim();
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
function reverseWord(word) {
  word = word.toLowerCase();
  console.log(word);
  let reverseWord = "";
  for (i = word.length - 1; i >= 0; i--) {
    let reverseLetter = word.charAt(i);
    reverseWord += reverseLetter;
  }
  return reverseWord;
}
