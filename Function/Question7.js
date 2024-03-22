function countVowels(str) {

    const lowerCaseStr = str.toLowerCase();

    let vowelCount = 0;

    for (let i = 0; i < lowerCaseStr.length; i++) {
        const char = lowerCaseStr[i];
        console.log(char)
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}
console.log("Number of vowels:", countVowels("The Quick brown fox"));
