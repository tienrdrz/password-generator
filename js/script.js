
// Assignment code here

/* When I click on the button I should:
See more than one window prompt,
Each prompt will ask for different criteria,
And depending on what you select your password will contain that,
And not use whatever you don't select.
*/ 
window.alert("Hello! Please click the 'Generate Password' button to begin.");


document.getElementById('generate').onclick = function() {
generatePassword();
}


var generatePassword = function() {
var promptOne = window.prompt("How long would you like your password to be? It can be anywhere from 8 - 128 characters.")
if (promptOne >= 8 && promptOne <= 128) {
window.alert("Your password will have " + promptOne + " characters.");
}
else {
window.alert ("You have not chosen a correct response!")
generatePassword();
}
}














// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   window.alert ("HI")

//   passwordText.value = password;
// }
//   var min = 8;
//   var max = 128;
// // Add event listener to generate button
// if (generateBtn.addEventListener("click", writePassword)) {
//   writePassword();
// }