var cabType = "";
var cabTypeFarePrice = 0;
var kilometer = 0;
var isValidKilometer = false;
var totalFarePriceWithoutGST;
var totalFarePriceWithGST;
var dateOfBirth = "";
var journeyDate = "";
var pickupTime = "";
var age;
var currentYear;
var birthYear;
var pickupHour;
var totalFarePriceAtPeakTime;
var isSeniorCitizen;
var totalFareForSeniorCitizen = 0;
var currentDate = "";

document.getElementById("cabType").onchange = function () {
    cabType = getCabType();
    calculateTotalFare();
}

document.getElementById("kilometer").onchange = function () {
    kilometer = getKilometer();
    calculateTotalFare();
}

document.getElementById("dateOfBirth").onchange = () => {
    dateOfBirth = getDateOfBirth();
    age = getAge(dateOfBirth);
    calculateTotalFare();
}

document.getElementById("pickupTime").onchange = () => {
    pickupTime = getPickupTime();
    pickupHour = pickupTime.slice(0, 2);
    calculateTotalFare();
}

var seniorCitizen = document.getElementById("seniorCitizen");
seniorCitizen.onchange = () => {
    isSeniorCitizen = seniorCitizen.checked;
    calculateTotalFare();
}

function getAge(dateOfBirth) {
    var age;
    currentYear = new Date().getFullYear();
    birthYear = dateOfBirth.slice(0, 4);
    age = parseInt(currentYear) - parseInt(birthYear);
    return age;
}


function getDateOfBirth() {
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    return dateOfBirth;
}

function getJourneyDate() {
    var journeyDate = document.getElementById("journeyDate").value;
    return journeyDate;
}

function getPickupTime() {
    var pickupTime = document.getElementById("pickupTime").value;
    return pickupTime;
}

function getKilometer() {
    var kilometer = document.getElementById("kilometer").value;
    return kilometer;
}


function calculateTotalFare() {
    cabTypeFarePrice = getCabTypeFarePrice(cabType);

    totalFarePriceWithoutGST = calculateTotalFarePriceWithoutGST(cabTypeFarePrice, kilometer);
    totalFarePriceWithGST = calculateTotalFarePriceWithGST(totalFarePriceWithoutGST);
    totalFarePriceAtPeakTime = calculateTotalFareAtPeakTime(pickupHour, totalFarePriceWithGST, kilometer);

    document.getElementById("totalFarePriceAtPeakTime").innerHTML = totalFarePriceAtPeakTime;
    document.getElementById("totalFarePriceWithoutGST").innerHTML = totalFarePriceWithoutGST;
    document.getElementById("totalFarePriceWithGST").innerHTML = totalFarePriceWithGST;

    if (isSeniorCitizen && age > 65) {
        totalFareForSeniorCitizen = calculateTotalFareForSeniorCitizen(totalFarePriceWithGST);
        document.getElementById("farePriceForSeniorCitizen").innerHTML = totalFareForSeniorCitizen;
    } else {
        document.getElementById("farePriceForSeniorCitizen").innerHTML = 0;
    }

}