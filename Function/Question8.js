function isPrime(number, divisor = 2) {
    // Base cases:
    if (number <= 1) {
        return false; 
    }
    if (divisor * divisor > number) {
        return true;
    }
    if (number % divisor === 0) {
        return false; 
    }
 
    return isPrime(number, divisor + 1); 
}

const num = 4;
console.log(num + " is prime:", isPrime(num)); 
