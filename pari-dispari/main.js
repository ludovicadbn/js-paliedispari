// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userDecision = [
  "pari",
  "dispari"
]

let userEvenOdd = prompt("Scegli tra pari e dispari")
let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"))

while (userNum > 5) {
  alert("Insrisci un numero da 1 a 5!");
  userNum = parseInt(prompt("Inserisci un numero da 1 a 5"))
}

function userPrompt(){
  for(let i = 0; i < userDecision.length; i++){
    if (userEvenOdd == userDecision[i]){
      return userDecision[i];
    }
  }
}

function randomNum(){
  let num = Math.floor(Math.random() * 5) + 1;
  return num;
}

const sum = userNum + randomNum()

function evenOdd(){
  if (sum % 2 == 0){
    sum = userDecision[0];
  } else {
    sum = userDecision[1];
  }
  return sum;
}

let result = "";

if (evenOdd() == userPrompt()) {
  result += "Hai vinto";
} else {
  result += "Ha vinto il computer";
}

document.getElementById("result").innerHTML = result;


