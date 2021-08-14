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

//Function to declare all the user's password preferences
function userPasswordChoices(){
  var userLength = prompt("How many characters would you like your password to contain: ");

  //Confirming that user entered a valid number for password generation
  if(isNaN(userLength)){
    alert("Please enter a valid number between 8 and 129.");
  }
  else{
    if(userLength < 8){
      alert("Password length must be at least 8 characters.");
      return;      
    }
    else if(userLength > 129){
      alert("Password length must be less than 129 characters.")
      return;
    }

    //Confirmation of type of characters to use to generate password
    var specialCharaConfirm = confirm("Click OK to confirm including special characters");
    var numeralCharaConfirm = confirm("Click OK to confirm including numeric characters");
    var upperCaseCharaConfirm = confirm("Click OK to confirm including uppercase characters");
    var lowerCaseCharaConfirm = confirm("Click OK to confirm including lowercase characters");
    
    //Condition statement in case user did not select any character type
    if(!specialCharaConfirm && !numeralCharaConfirm && !upperCaseCharaConfirm && !lowerCaseCharaConfirm){
      alert("Must select at least one character type."); 
    }
    else{
      alert("LEVEL CLEAR!");
    }
    
  };

};












// Write password to the #password input
function writePassword() {
  var password = userPasswordChoices();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
