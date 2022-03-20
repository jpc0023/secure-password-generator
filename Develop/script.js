// Assignment code here
const special = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~"';
const numbers = '0123456789';
const lower = 'abcdefghijklmnopqrstuvwqyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const password_list = [];
let u = 0;
function generatePassword() {
  let quantity = Number(prompt('How long do you want your password to be? (between 8-128 characters)'));
  let use_special = confirm('Do you want to include special characters?');
  let use_numbers = confirm('Do you want to include numbers?');
  let use_lowercase = confirm('Do you want to include lowercase letter?');
  let use_uppercase = confirm('Do you want to include uppercase letters?');
  if (use_special) {
    u++;
  }
   if (use_numbers) {
    u++;
  }
  if (use_lowercase) {
    u++;
  }
  if (use_uppercase) {
    u++;
  }
  const user_num1 = ((quantity / u));
  const user_num = Math.floor((quantity / u));
 
  const remainder = quantity % 4;
  
  for (let i = 0; i < user_num; i++) {
    const y = Math.floor(((Math.random() * user_num) + 1));
    console.log(y);
    if (use_numbers) {
      password_list.push(numbers[y]);
    } 
    if (use_uppercase) {
      password_list.push(upper[y]);
    } 
    if (use_lowercase) {
      password_list.push(lower[y]);
    } 
    if (use_special) {
      password_list.push(special[y]);
    }
  };
    console.log(password_list);
    password = password_list.join('');
    return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
