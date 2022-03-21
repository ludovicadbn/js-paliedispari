let userEvenOdd = prompt("Scegli tra pari e dispari")
let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"))

while (userNum > 5) {
  alert("Insrisci un numero da 1 a 5!");
  userNum = parseInt(prompt("Inserisci un numero da 1 a 5"))
}

function userPrompt() {
  let prompt = ""
  if (userEvenOdd == "pari") {
    prompt += "pari";
  } else {
    prompt += "dispari"
  }

  return prompt;
}

function randomNum(){
  let num = Math.floor(Math.random() * 5) + 1;
  return num;
}

const sum = userNum + randomNum()

function evenOdd(){
  let sumResult = ""
  if (sum % 2 == 0){
    sumResult += "pari";
  } else {
    sumResult += "dispari";
  }
  return sumResult;
}

if (evenOdd() == userPrompt()) {
  let result = "";
  result += "Hai vinto";
} else {
  result += "Ha vinto il computer";
}

document.getElementById("result").innerHTML = result;


