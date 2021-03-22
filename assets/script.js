// - Create variables for lowercase, uppercase, numbers and characters
// - Randomize characters in each variable above
// - Create variable for user input of 8 to 128 characters
// - Create event listeners for each criteria checkboxes checked
// - Add each checkbox checked together, and only assign the length of the 
//   output to the user input. 
// - Generate password when "Generate Password" button is clicked
// - Change button text after generated to say "Generate Again"

// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Stored this function as a variable (function expression)
  var password = generatePassword();
  // Text area where the password will generate
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to "Generate Password" button
generateBtn.addEventListener("click", writePassword);
 