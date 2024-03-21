// Basic Q 150
function swapAdjacentDigits(number) {
    if (number.length % 2 == 0 ){
        return false
    }
    const numberString = number.toString();
    let swappedNumber = '';

    for (let i = 0; i < numberString.length; i += 2) {

        swappedNumber += numberString[i + 1] + numberString[i];
    }

    return parseInt(swappedNumber, 10);
}


const originalNumber = 123456;
const swappedNumber = swapAdjacentDigits(originalNumber);
console.log(swappedNumber); 