function reverseNumber(num){
    const reversedString = String(num).split('').reverse().join('');
    const reversednumber = parseInt(reversedString)

    return reversednumber;
}
console.log(reverseNumber(32243))