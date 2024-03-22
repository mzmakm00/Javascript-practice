function firstNotRepeatedCharacter(str) {
    const charCount = {}; // Object to store character counts

    // Count occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1 (not repeated)
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if no non-repeated character found
}

// Test the function
console.log(firstNotRepeatedCharacter('abacddbec')); // Output: 'e'
