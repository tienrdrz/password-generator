
// Assignment code here

/* When I click on the button I should:
See more than one window prompt,
Each prompt will ask for different criteria,
And depending on what you select your password will contain that,
And not use whatever you don't select.
*/ 
window.alert("Hello! Please click the 'Generate Password' button to begin.");


document.getElementById('generate').onclick = function() {
generatePassword1();
}


var generatePassword1 = function() {
window.passwordLength = window.prompt("How long would you like your password to be? It can be anywhere from 8 - 128 characters.")
if (passwordLength >= 8 && passwordLength <= 128) {
window.alert("Your password will have " + passwordLength + " characters.");
generatePassword2();
}
else {
window.alert ("You have not chosen a correct response!")
generatePassword1();
}
}

var generatePassword2 = function() {
  window.passwordLowercase = window.confirm("Would you like to include lowercase letters?")
if (passwordLowercase) {
  window.alert("Your password has lowercase letters.")
  let lower = true;  
  window.lower = "abcdefghijklmnopqrstuvwxyz";
  
  generatePassword3();
}
else {
window.alert("Your password has no lowercase letters.")
let lower = false;
generatePassword3();
}
}

var generatePassword3 = function() {
window.passwordUppercase = window.confirm("Would you like to include uppercase letters?")
if (passwordUppercase) {
  window.alert("Your password has uppercase letters.")
  let upper = true;
  window.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  generatePassword4();
}
else {
  window.alert("Your password has no uppercase letters.")
  let upper = false;
  generatePassword4();
}
}

var generatePassword4 = function() {
  window.passwordNumeric = window.confirm("Would you like to include numbers?")
  if (passwordNumeric) {
    window.alert("Your password will have numbers.")
    let numeric = true;
    window.numeric = "1234567890";
    generatePassword5();
  }
  else {
    window.alert("Your password will not have numbers.")
    let numeric = false;
    generatePassword5();
  }
}

var generatePassword5 = function() {
  window.passwordSpecial = window.confirm("Would you like to include special characters?")

 if (!passwordLowercase && !passwordUppercase && !passwordNumeric && !passwordSpecial) {
  window.alert("You must select at least one option in order to generate a password.")
  generatePassword2();
 }
 if (passwordSpecial) {
    window.alert("Your password will have special characters.")
    let special = true;
    window.special = "!@#$%^&*()";
    writePassword();
  }
  else {
    window.alert("Your password will not have special characters.")
    let special = false;
    writePassword();
  }

}

var password = document.getElementById("password");
function writePassword() {
  
var password = "";
for (var i = 0; i < passwordLength; i++){
  if (passwordLowercase){
var randomNumber = Math.floor(Math.random() * lower.length);
  password += lower.substring(randomNumber, randomNumber +1);
  }
  if (passwordUppercase) {
    var randomNumber = Math.floor(Math.random() * upper.length);
    password += upper.substring(randomNumber, randomNumber +1);
  }
  if (passwordNumeric) {
    var randomNumber = Math.floor(Math.random() * numeric.length);
    password += numeric.substring(randomNumber, randomNumber +1);
  }
  if (passwordSpecial) {
    var randomNumber = Math.floor(Math.random() * special.length);
    password += special.substring(randomNumber, randomNumber +1);
  }
 const finalPassword = password.slice(0, passwordLength);
 
document.getElementById("password").value = finalPassword;
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