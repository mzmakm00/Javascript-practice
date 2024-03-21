function checkOppositeSigns(num1, num2) {
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const num1 = 5;
const num2 = 5;

if (checkOppositeSigns(num1, num2)) {
    console.log("True ! The two numbers have opposite signs.");
} else {
    console.log("False ! The two numbers do not have opposite signs.");
}
