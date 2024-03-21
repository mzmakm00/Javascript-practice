// Basic Q54 
function countVowels(str) {

    str = str.toLowerCase();
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let count = 0;
    
    for (let char of str) {

        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


const inputString = "w3resource";
const numOfVowels = countVowels(inputString);
console.log("Number of vowels:", numOfVowels); 
