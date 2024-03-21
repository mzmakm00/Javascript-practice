// Basic 49
function shiftchar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {

        let charCode = str.charCodeAt(i);
        
        // Handling edge case for 'z'
        if (charCode === 122) {
            result += 'a';
        } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            result += String.fromCharCode(charCode + 1);
        } else {
        
            result += str[i];
        }
    }
    return result;
}

// Example usage:
const string = "hello world! 123";
const replacedString = shiftchar(string);
console.log(replacedString); // Output: "ifmmp xpsme! 123"
