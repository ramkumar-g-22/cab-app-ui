function getCabType() {
    var cabType = document.getElementById("cabType").value;
    return cabType;
}

function getCabTypeFarePrice(cabType) {
    cabType = convertToLowerCase(cabType);
    const farePriceForMicroCabPerKilometer = 10;
    const farePriceForMiniCabPerKilometer = 15;
    const farePriceForPrimeCabPerKilometer = 20;
    var farePrice = 0;
        switch (cabType) {
            case "micro":
                farePrice = farePriceForMicroCabPerKilometer;
                break;
            case "mini":
                farePrice = farePriceForMiniCabPerKilometer;
                break;
            case "prime":
                farePrice = farePriceForPrimeCabPerKilometer;
                break;
            default:
                break;
            }
    return farePrice;
}

function convertToLowerCase(cabType) {
    return cabType.toLowerCase();
}