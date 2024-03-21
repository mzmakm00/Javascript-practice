function withinHunderd(num1 , num2){
    n1 = Math.abs(num1 - 100);
    n2 = Math.abs(num2 - 100);
    if (n1 > n2)
    {
        return n2
    }
    return n1

}
console.log(withinHunderd(90,95))