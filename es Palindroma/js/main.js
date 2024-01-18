const result = document.getElementById("result");

// CHIEDO LA PAROLA
let userWord = askWord("verificare che sia palindorma");
console.log(userWord);

// MONTO LA PAROLA AL CONTRARIO
let reversedWord = reverseWord(userWord);
console.log(reversedWord);

// CONTRONTO LE PAROLE
if (userWord === reversedWord) {
  result.innerText = `La parola ${userWord} è palindorma.`;
} else {
  result.innerText = `La parola ${userWord} non è palindorma, in quanto ${userWord} non è uguale a ${reversedWord}.`;
}
