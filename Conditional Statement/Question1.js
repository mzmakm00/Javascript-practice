function findLargestInteger(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const num1 = 10;
const num2 = 20;

const largestInteger = findLargestInteger(num1, num2);
console.log("The largest integer is: " + largestInteger);
