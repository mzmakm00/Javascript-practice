function commonDivisior(a, b) {
    if (b === 0) {
        return a;
    } else {
        return commonDivisior(b, a % b);
    }
}
let num1 = 12;
let num2 = 48;
let result = commonDivisior(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${result}`);
