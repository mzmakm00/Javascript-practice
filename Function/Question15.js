function computePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Prompt the user to input the base and exponent
const base = parseFloat(prompt("Enter the base (b):"));
const exponent = parseFloat(prompt("Enter the exponent (n):"));

// Check if the inputs are valid numbers
if (!isNaN(base) && !isNaN(exponent)) {
    const result = computePower(base, exponent);
    console.log(`${base}^${exponent} = ${result}`);
} else {
    console.log("Please enter valid numbers for base and exponent.");
}