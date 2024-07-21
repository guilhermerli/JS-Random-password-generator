const inputLowercase = document.getElementById("inputLowercase");
const inputUppercase = document.getElementById("inputUppercase");
const inputNumber = document.getElementById("inputNumber");
const inputSymbols = document.getElementById("inputSymbols");
const inputpasswordLength = document.getElementById("passwordLength");
const myBtn = document.getElementById("myBtn");
const passwordElement = document.getElementById("password");

function generatePassword(length, includeLowerCase = true, includeUpperCase = true, includeNumbers = true, includeSymbols = true){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numberChars = '1234567890';
    const symbolChars = '!@#%$^&*()-_+={}[]<>~';

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0){
        return `(password should be at least 1)`;
    }
    else if(length > 70){
        return `(password can't be at greater than 70)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of char should be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}
myBtn.onclick = function(){
    const passwordLength = inputpasswordLength.value;
    const includeLc = inputLowercase.checked ? true : false;
    const includeUc = inputUppercase.checked ? true : false;
    const includeNumbers = inputNumber.checked ? true : false;
    const includeSymbols = inputSymbols.checked ? true : false;

    const password = generatePassword(passwordLength, includeLc, includeUc, includeNumbers, includeSymbols);
    passwordElement.textContent = `${password}`;
}




