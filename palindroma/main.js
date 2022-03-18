const word = prompt("Inserisci una parola")
let arr = []
let newWord = ""
let result = ""
let word1 = word

function palindroma(word) {
  for(let i = 0; i <= word.length ; i++){
    arr.push(word.slice(-1));
    word = word.slice(0, -1);
    if(word.length == 1){
      arr.push(word);
    }
  }

  for(let c = 0; c < arr.length; c++){
    newWord += arr[c];
  }

  if(newWord == word1){
    result += `${word1} è una parola palindroma`;
  } else {
    result += `${word1} non è una parola palindroma`;
  }

  return result;
}

document.getElementById("result").innerHTML = palindroma(word);