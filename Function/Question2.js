
function isPalindrome(str){
    const cleanStr = str.replace(/[^A-Za-z0-9]/g , '').toLowerCase(); 
    let start = 0 ;
    let end = cleanStr.length - 1;

    while(start<end)
    {
        if (cleanStr[start] !== cleanStr[end]){
            return false ; 
        }
        start++
        end--
    }
    return true ;
}

const str1 = "madam";
const str2 = "nurses run";
const str3 = "hello";

console.log(str1 + " is a palindrome:", isPalindrome(str1)); // Expected Output: true
console.log(str2 + " is a palindrome:", isPalindrome(str2)); // Expected Output: true
console.log(str3 + " is not a palindrome:", isPalindrome(str3)); // Expected Output: false