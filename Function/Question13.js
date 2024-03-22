function computeFactors(number) {
    if (number <= 0) {
        return "Factors can only be computed for positive integers.";
    }

    const factors = [];

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            factors.push(i); // Add the divisor
            if (i !== number / i) {
                factors.push(number / i); // Add the quotient
            }
        }
    }

    factors.sort((a, b) => a - b); 

    return factors;
}

// Test cases
console.log(computeFactors(12));  // Output: [1, 2, 3, 4, 6, 12]
console.log(computeFactors(28));  // Output: [1, 2, 4, 7, 14, 28]
console.log(computeFactors(36));  // Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]
console.log(computeFactors(60));  // Output: [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]
console.log(computeFactors(1));   // Output: [1]
