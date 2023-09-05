// Assignment Code
//array of lowercase letters to be included in password
var lowercaseArray = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array of uppercase letters to be included in password
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// array of numbers to be included in password
var numbersArray = ['1','2','3', '4', '5', '6', '7', '8', '9', '0'];
// array of special characters to be included in the password
var specialArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '{', '|', '}', '~'];

// array to add conditions to if user confirms
var passwordinclude = [];
var length = "";
// function to ask about the password length
function passwordLength() {
  do {
  var length = prompt("Please select a number of characters between 8 and 128 that you would like your password to be");
  } while (length < 8 || length > 128); 
}



// function to ask what is to be included in the password
function whichCharacters() {
  let lowercasePrompt = confirm("Would you like to include lowercase characters?")
    if (lowercasePrompt) { 
      passwordinclude= lowercaseArray;
      console.log(passwordinclude);
    }
  let uppercasePrompt = confirm("Would you like to include uppercase letters?")
    if (uppercasePrompt) { 
      passwordinclude= passwordinclude.concat(uppercaseArray);
      console.log(passwordinclude);
    }
  let numbersPrompt = confirm("Would you like to include numbers?")
    if (numbersPrompt) {
      passwordinclude = passwordinclude.concat(numbersArray);
      console.log(passwordinclude);
    }
  let specialPrompt = confirm("Would you like to include special characters?")
    if (specialPrompt) { 
      passwordinclude = passwordinclude.concat(specialArray);
      console.log(passwordinclude);
    }
}

// function to invoke other functions in order
function allTogetherNow() {
  passwordLength();
  whichCharacters();
}

allTogetherNow();

console.log(length);

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}