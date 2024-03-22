function generateCombinations(str) {
    const combinations = [];

    for (let i = 0; i < str.length; i++) {
 
        for (let j = i + 1; j <= str.length; j++) {

            combinations.push(str.substring(i, j));
        }
    }

    return combinations;
}

// Example usage:
const inputString = 'dog';
const combinations = generateCombinations(inputString);
console.log("Combinations:", combinations);
