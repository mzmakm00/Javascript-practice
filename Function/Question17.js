function extractUniqueCharacters(str) {
    const uniqueChars = new Set(); // Using a Set to store unique characters
    let result = '';

    for (let char of str) {
        if (!uniqueChars.has(char)) {
            uniqueChars.add(char);
            result += char;
        }
    }

    return result;
}

// Test
const inputString = "thequickbrownfoxjumpsoverthelazydog";
console.log(extractUniqueCharacters(inputString));
