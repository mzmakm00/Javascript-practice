const num1 = -5;
const num2 = -2;
const num3 = -6;
const num4 = 0;
const num5 = -1;

let largestNumber = num1;

if (num2 > largestNumber) {
    largestNumber = num2;
}
if (num3 > largestNumber) {
    largestNumber = num3;
}
if (num4 > largestNumber) {
    largestNumber = num4;
}
if (num5 > largestNumber) {
    largestNumber = num5;
}

console.log("The largest number is: " + largestNumber);
