function isPerfectNumber(number) {
    if (number <= 0) {
        return false; // Perfect numbers are defined for positive integers only
    }

    let sum = 0;

    // Find the divisors of the number
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== 1 && i !== number / i) {
                sum += number / i;
            }
        }
    }

    // Check if the sum of divisors is equal to the number
    return sum === number;
}

// Test cases
console.log(isPerfectNumber(6));   // Output: true
console.log(isPerfectNumber(28));  // Output: true
console.log(isPerfectNumber(496)); // Output: true
console.log(isPerfectNumber(8128));// Output: true
console.log(isPerfectNumber(7));   // Output: false
console.log(isPerfectNumber(12));  // Output: false
