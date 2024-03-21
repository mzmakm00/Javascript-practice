function checkFor50(number1, number2) {
    return (number1 === 50 || number2 === 50 || number1 + number2 === 50);
}

console.log(checkFor50(50, 10)); 
console.log(checkFor50(20, 30)); 
console.log(checkFor50(15, 35)); 
console.log(checkFor50(25, 15)); 

