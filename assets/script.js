// Assignment Code
//array of lowercase letters to be included in password
var lowercaseArray = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array of uppercase letters to be included in password
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// array of numbers to be included in password
var numbersArray = ['1','2','3', '4', '5', '6', '7', '8', '9', '0'];
// array of special characters to be included in the password
var specialArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '{', '|', '}', '~'];

//global scope variables
var passwordinclude = [];
var length = 8;
var lowercaseRandom = "";
var uppercaseRandom = "";
var numbersRandom = "";
var specialRandom = "";
var passwordRandom = [];
var userPassword= "";

//TODO need to add if statement to check if input is in range
// function to ask about the password length
function lengthPrompt() {
  do {
    length = parseInt(prompt("How many characters would you like your password to be?"));
  } while (length < 8 || length > 128);
  return length;
}


// function to ask what is to be included in the password, and chooses one character to be randomized
function whichCharacters() {
  let lowercasePrompt = confirm("Would you like to include lowercase characters?")
    if (lowercasePrompt) { 
      passwordinclude = passwordinclude.concat(lowercaseArray);
      lowercaseRandom = lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
      
    }
  let uppercasePrompt = confirm("Would you like to include uppercase letters?")
    if (uppercasePrompt) {  
      passwordinclude = passwordinclude.concat(uppercaseArray);
      uppercaseRandom = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
    }
  let numbersPrompt = confirm("Would you like to include numbers?")
    if (numbersPrompt) {
      passwordinclude = passwordinclude.concat(numbersArray);
      numbersRandom = numbersArray[Math.floor(Math.random()*numbersArray.length)];
    }
  let specialPrompt = confirm("Would you like to include special characters?")
    if (specialPrompt) { 
      passwordinclude = passwordinclude.concat(specialArray);
      specialRandom = specialArray[Math.floor(Math.random()*specialArray.length)];
      console.log(passwordinclude);
    }
}
// loop that selects random characters out of passwordinlude array
// adds those characters to array of random characters form whichCharacters function to ensure all criteria is met
function generatePassword() {
  for (var i = 0; i < length-4; i++) {
    passwordRandom[i] = passwordinclude[Math.floor(Math.random()*passwordinclude.length)];
  }
  console.log(passwordRandom);
  userPassword = passwordRandom.concat(...specialRandom, ...numbersRandom, ...uppercaseRandom, ...lowercaseRandom);
  userPassword = userPassword.join(""); // takes out comma when concatenating arrays 
  console.log(userPassword);
}
// function to invoke other functions in order
function allTogetherNow() {
  lengthPrompt();
  whichCharacters();
  generatePassword()
}


//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

 allTogetherNow();
 
  var passwordText = document.querySelector("#password");

  passwordText.value = userPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}