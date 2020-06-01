
function largestFiveDigitNumber(number){

    let largest = 0;
    for (let i = 0; i < number.length; i++) {
        const fiveDigitNumber = number.substring(i,i+5);
        if (parseInt(fiveDigitNumber) > largest) {
            largest = parseInt(fiveDigitNumber);
        }
    }

    return largest;
}

module.exports ={
    largestFiveDigitNumber
}
