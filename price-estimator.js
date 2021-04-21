function calculateTotalFarePriceWithoutGST(cabTypeFarePrice, kilometer) {
    var totalFarePriceWithoutGST = cabTypeFarePrice * parseInt(kilometer);
    return totalFarePriceWithoutGST;
}

function calculateTotalFarePriceWithGST(totalFarePriceWithoutGST) {
    var totalFarePriceWithGST;
    const GSTPercentage = 7.0;
    var gstFarePrice;
    gstFarePrice = totalFarePriceWithoutGST * (GSTPercentage / 100.0);
    totalFarePriceWithGST = (totalFarePriceWithoutGST) + gstFarePrice;    
    return totalFarePriceWithGST;
}

function calculateTotalFareAtPeakTime(pickupHour, totalFarePriceWithGST, kilometer) {
    const peakTimeFarePercentagePerKilometer = 1.25;
    var farePriceAtPeakTime;
    var totalFarePriceAtPeakTime;
    if (pickupHour >= 17 && pickupHour <= 19) {
        farePriceAtPeakTime = (totalFarePriceWithGST * (peakTimeFarePercentagePerKilometer * kilometer)) / 100.0;
        totalFarePriceAtPeakTime = totalFarePriceWithGST + farePriceAtPeakTime;
        return totalFarePriceAtPeakTime;
    } else {
        return totalFarePriceWithGST;
    }
}

function calculateTotalFareForSeniorCitizen(totalFarePriceWithGST) {
    const offerPercentageForSeniorCitizen = 50;
    var totalFareForSeniorCitizen = totalFarePriceWithGST * (offerPercentageForSeniorCitizen / 100.0);
    return totalFareForSeniorCitizen;
}
