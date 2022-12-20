// Password generation function
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialCharacters = "!@#$%^&*()"
  var numerical = "0123456789"
  var chars = []
  if (document.getElementById("lowercase").checked) {
    chars.push(lowercase)
  }
  if (document.getElementById("uppercase").checked) {
    chars.push(uppercase)
  }
  if (document.getElementById("specialCharacters").checked) {
    chars.push(specialCharacters)
  }
  if (document.getElementById("numerical").checked) {
    chars.push(numerical)
  }

  var passwordLength = document.getElementById("passwordLength").value;
  var password = ""
  
  for (var i = 0; i < passwordLength; i++) {
    var charsToLookAt = chars[i%chars.length]
    if (charsToLookAt!=undefined) {
      var randomNumber = Math.floor(Math.random() * charsToLookAt.length);
      password += charsToLookAt.substring(randomNumber, randomNumber + 1);
    } else {
      return "Please select an option"
    }
  }
  //return a scrambled version of the password
  return password.split('').sort(function(){return 0.5-Math.random()}).join('');
}

// Write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Show the password prompts
function showPrompts () {
  var promptElement = document.getElementById("prompts");
  promptElement.style.display = "unset";
}

// Prompt for password criteria = What is the length of the desired password ?
var passwordLengthInput = document.getElementById("passwordLength");
// On change, create new password
passwordLengthInput.addEventListener('change', writePassword)

// Update the HTML to display the current password length value
var passwordLengthValue = document.getElementById("passwordLengthValue");
passwordLengthValue.innerHTML = passwordLengthInput.value; 
passwordLengthInput.oninput = function() {
  passwordLengthValue.innerHTML = this.value;
}

// Get the generate button and assign an event listener of click on it.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", showPrompts);

// Prompt for password criteria = what characters should be included in the password ? Select all that apply:
var checkboxes = document.querySelectorAll("input[type=checkbox]");
// Add an event listener to each checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', writePassword)
});

