var generateBtn = document.querySelector("#generate");

//Creating arrays for all possible password characters to be generated
var specialCharacters = ["!", "#", "$", "%", "&", "‘",
"(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
"[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericalCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];




  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
