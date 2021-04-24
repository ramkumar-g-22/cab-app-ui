function validateMobileNumber(mobileNumber) {
    var validMobileNumber = false;
    var mobileNumberLength = mobileNumber.trim().length;
    var numberOfDigitsForMobileNumber = 10;
    try {
        if(isNaN(mobileNumber)) throw false;
        if (mobileNumberLength != numberOfDigitsForMobileNumber) throw false;
        if(mobileNumber.includes("-")) throw false;
    } catch (error) {
        validateMobileNumber = error;
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

    if (mobileNumber == "1234567890" && password == "pass1234") {
        validUser = true;
    } else {
        validUser = false;
    }
    return validUser;
}
