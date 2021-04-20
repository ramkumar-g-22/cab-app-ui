function validateMobileNumber(mobileNumber) {
    var validMobileNumber = false;
    try {
        if(mobileNumber == "" || mobileNumber == isNaN(mobileNumber)) throw false;
        var mobileNumberLength = mobileNumber.trim().length;
        var numberOfDigitsForMobileNumber = 10;
        if (mobileNumberLength == numberOfDigitsForMobileNumber) {
            validMobileNumber = true;
        }
    } catch (err) {
        validMobileNumber = err;
    }
    return validMobileNumber;
}

function validatePassword(password) {
    var validPassword = false;
    var passwordLength = password.trim().length;
    var numberOfCharactersForPassword = 8;
    if (numberOfCharactersForPassword == passwordLength) {
        validPassword = true;
    } else {
        validPassword = false;
    }
    return validPassword;
}

function login(mobileNumber, password) {      
    var validUser = false;
    var isValidMobileNumber = validateMobileNumber(mobileNumber);
    var isValidPassword = validatePassword(password);

    // if(!isValidMobileNumber) alert("Invalid mobile number");
    // if(!isValidPassword) alert("Invalid password");    

    if (isValidMobileNumber && isValidPassword) {
        validUser = true;
    } else {
        alert("Invalid mobile number and password");
        validUser = false;
    }
    return validUser;
}
