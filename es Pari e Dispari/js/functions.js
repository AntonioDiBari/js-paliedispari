//**  FUNCTIONS

/**
 * Chiede un numero all'utente da 1 a 5, controllando che lo sia realmente
 * @returns Numero da 1 a 5 parsato
 */
function askNumber() {
  let userNumberValid = false;
  while (!userNumberValid) {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    if (userNumber > 0 && userNumber < 5) {
      userNumberValid = true;
    } else {
      alert("Inserisci un numero corretto");
    }
  }
  return userNumber;
}
