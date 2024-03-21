// Basics Q 48

// function reversedString(str){
//    return str.split('').reverse().join('')
// }

// const originalString = "thehelloworld";
// console.log(reversedString(originalString))




const originalString = "thehelloworld";
let reversed = '';
for (let i = originalString.length - 1 ; i >= 0 ; i--){
   reversed = reversed + originalString[i]
}
console.log(reversed)



