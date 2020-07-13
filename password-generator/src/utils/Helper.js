let characters = "";
let passwordLength = 0;

const setUpperCase = (isUpperCase) => {
  if (isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
};

const setLowerCase = (isLowerCase) => {
  if (isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
};

const setSymbols = (isSymbol) => {
  if (isSymbol) {
    characters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
  }
  return "";
};

const setNumber = (isNumeric) => {
  if (isNumeric) {
    characters = +"0123456789";
  }

  return "";
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const passwordCharacters = () => {
  const characterList = characters;
  let password = "";
  if (characterList.length > 0) {
    // get the random characters
    for (let i = 0; i < passwordLength; i++) {
      // set the values
      // randomly select the characters props
      password += characterList[getRandomInteger(0, characterList.length - 1)];
    }
    characters = "";
    passwordLength = 0;
    return password;
  }
};
export const setPasswordLength = (length) => {
  passwordLength = length;
  return passwordLength;
};

export const generatePasswordLength = () => {
  return passwordLength;
};

export const generatePassword = (passwordProps, pwdLength) => {
  // boolean props
  const { uppercase, lowercase, symbols, numbers } = passwordProps;

  setPasswordLength(pwdLength);
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);

  const password = passwordCharacters();
  return password;
};

export const copyToClipBoard = (elementRef) => {
  elementRef.select();
  document.execCommand("copy");
};
