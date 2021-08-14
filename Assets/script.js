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
  //Ask user for how long of a password they want
  var userLength = prompt("How many characters would you like your password to contain: ");

  //Confirming that user entered a valid number for password generator
  if(isNaN(userLength)){
    alert("Please enter a valid number between 8 and 129.");
    return false;
  }
 
  //If valid number entered, check if the length is valid for the generator
  if(userLength < 8){
    alert("Password length must be at least 8 characters.");
    return false;      
  }
  else if(userLength > 129){
    alert("Password length must be less than 129 characters.")
    return false;
  }

  //Confirmation of type of characters to use to generate password
  var specialCharaConfirm = confirm("Click OK to confirm including special characters");
  var numeralCharaConfirm = confirm("Click OK to confirm including numeric characters");
  var upperCaseCharaConfirm = confirm("Click OK to confirm including uppercase characters");
  var lowerCaseCharaConfirm = confirm("Click OK to confirm including lowercase characters");
    
  //Condition statement in case user did not select any character type
  if(!specialCharaConfirm && !numeralCharaConfirm && !upperCaseCharaConfirm && !lowerCaseCharaConfirm){
    alert("Must select at least one character type."); 
    return false;
  }
    
  //Object created to store user's password confirmations
  var userOptions = {
    userlength: userLength,
    specialChar: specialCharaConfirm,
    numeralChar: numeralCharaConfirm,
    upperCaseChar: upperCaseCharaConfirm,
    lowerCaseChar: lowerCaseCharaConfirm
  };
  
  //Return created user-input object
  return userOptions;
  
};

//Function to generate password given all the user's choices
function generatePassword() {
  var passwordOptions = userPasswordChoices();   //Acces the object created in previous function and create arrays to hold passwords
  var passwordArray = []; //array for random password created with given lists
  var userGivenChoices = []; //array for all possible user combonations choices

  //If user declares they want special characters in their password, add to possible choice array at random
  if (passwordOptions.specialChar) {
    userGivenChoices = userGivenChoices.concat(specialCharacters);
    passwordArray.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);
  }

  //If user declares they want numerical characters in their password, add to possible choice array at random
  if (passwordOptions.numeralChar) {
    userGivenChoices = userGivenChoices.concat(numericalCharacters);
    passwordArray.push(numericalCharacters[Math.floor(Math.random()*numericalCharacters.length)]);
  }

  //If user declares they want uppercase characters in their password, add to possible choice array at random
  if (passwordOptions.upperCaseChar) {
    userGivenChoices = userGivenChoices.concat(upperCaseCharacters);
    passwordArray.push(upperCaseCharacters[Math.floor(Math.random()*upperCaseCharacters.length)]);
  }

  //If user declares they want lowercase characters in their password, add to possible choice array at random
  if (passwordOptions.lowerCaseChar) {
    userGivenChoices = userGivenChoices.concat(lowerCaseCharacters);
    passwordArray.push(lowerCaseCharacters[Math.floor(Math.random()*lowerCaseCharacters.length)]);

  }

  //For loop to add the randomized user password choices to the array of possible generated passwords
  for (i = passwordArray.length; i < passwordOptions.userlength; i++) {
    passwordArray.push (userGivenChoices[Math.floor(Math.random() * userGivenChoices.length)]);
  }
  
  //Create the final password as a string
  var finalGeneratedPassword = "";

  //Creates the final randomized password, using the randomized password array and convert the array to given string
  for(var i = 0; i < passwordOptions.userlength; i++) {
    finalGeneratedPassword += passwordArray[Math.floor(Math.random() * passwordArray.length)]
  
  }
  //Returns final generated password string 
  return finalGeneratedPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
