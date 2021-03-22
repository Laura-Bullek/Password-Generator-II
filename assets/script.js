// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Psuedocode
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
 