//**  FUNCTIONS

/**
 * Chiede un numero all'utente da 1 a 5, controllando che lo sia realmente
 * @returns Numero da 1 a 5 parsato
 */
function askNumber() {
  let userNumberValid = false;
  while (!userNumberValid) {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    if (userNumber > 0 && userNumber <= 5 && !isNaN(userNumber)) {
      userNumberValid = true;
    } else {
      alert("Inserisci un numero corretto");
    }
  }
  return userNumber;
}
/**
 * Crea un numero randomico tra un numero max e un numero min
 * @param {number} min Il valore minimo da cui partire a generare
 * @param {number} max Il valore massimo a cui può arrivare a generare
 * @returns Numero randomico
 */
function getRandomNumber(min, max) {
  min = parseInt(min);
  max = parseInt(max);

  if (isNaN(min) || isNaN(max)) {
    console.error("Inserisci solo dei numeri!");
    return;
  }

  if (min >= max) {
    console.error("Il numero massimo deve esser più grande del numero minimo!");
    return;
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
