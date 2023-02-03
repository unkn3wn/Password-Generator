function generatePassword() {
  let password = "";
  let characterSet = "abcdefghijklmnopqrstuvwxyz";
  characterSet += characterSet.toUpperCase() + "0123456789";
  characterSet += "!@#$%^&*()_+=-/:;[]{}|";
  let characterSetLength = characterSet.length;

  for (let i = 0; i < 14; i++) {
    let randomIndex = Math.floor(Math.random() * characterSetLength);
    password += characterSet[randomIndex];
  }

  let numLowercase = 0;
  let numUppercase = 0;
  let numNumbers = 0;
  let numSymbols = 0;

  for (let i = 0; i < password.length; i++) {
    let character = password[i];
    if (character >= "a" && character <= "z") {
      numLowercase++;
    } else if (character >= "A" && character <= "Z") {
      numUppercase++;
    } else if (character >= "0" && character <= "9") {
      numNumbers++;
    } else {
      numSymbols++;
    }
  }

  let numMissingLowercase = 6 - numLowercase;
  let numMissingUppercase = 2 - numUppercase;
  let numMissingNumbers = 3 - numNumbers;
  let numMissingSymbols = 3 - numSymbols;

  for (let i = 0; i < numMissingLowercase; i++) {
    let randomIndex = Math.floor(Math.random() * 26);
    password =
      password.substring(0, randomIndex) +
      characterSet[randomIndex] +
      password.substring(randomIndex + 1);
  }

  for (let i = 0; i < numMissingUppercase; i++) {
    let randomIndex = Math.floor(Math.random() * 26 + 26);
    password =
      password.substring(0, randomIndex) +
      characterSet[randomIndex] +
      password.substring(randomIndex + 1);
  }

  for (let i = 0; i < numMissingNumbers; i++) {
    let randomIndex = Math.floor(Math.random() * 10 + 52);
    password =
      password.substring(0, randomIndex) +
      characterSet[randomIndex] +
      password.substring(randomIndex + 1);
  }

  for (let i = 0; i < numMissingSymbols; i++) {
    let randomIndex = Math.floor(Math.random() * 10 + 62);
    password =
      password.substring(0, randomIndex) +
      character[randomIndex] +
      password.substring(randomIndex + 1);
  }

  return password;
}

function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Password Has Been Copied");
}
