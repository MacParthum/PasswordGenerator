var generateBtn = document.querySelector("#generate");

  function writePassword() {
  var numberString = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = numberString;

}

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}'];

var numberOfCharacters = parseInt(prompt('Password length?'))

var pickedNumbersArr = []

var numberString = ''



if (confirm('Include lower case letters?')) {
  pickedNumbersArr.push(lowerCase)
}

if (confirm('Include Upper case letters?')) {
  pickedNumbersArr.push(upperCase)

}

if (confirm("Include numbers?")) {
  pickedNumbersArr.push(numbers)

}

if (confirm("Include symbols?")) {
  pickedNumbersArr.push(symbols)
}

console.log(numberOfCharacters, pickedNumbersArr)

for (var i = 0; i < numberOfCharacters; i++) {
  var randomNumber = Math.floor(Math.random() * pickedNumbersArr.length);
  var randomXyzNumber = Math.floor(Math.random() * pickedNumbersArr[randomNumber].length);
  var number = pickedNumbersArr[randomNumber][randomXyzNumber]
  numberString += number
  console.log(randomNumber, randomXyzNumber, number)
}
console.log(numberString)

function generatePassword() {
  return numberString
}

generateBtn.addEventListener("click", writePassword);
