function Threechar(str)
{
    if (str.length >= 3){
        
        const midstring = str.slice(0 , str.length)
        const lastthree = str.substring(str.length - 3)
        return lastthree + midstring + lastthree ;
    }
    return "String must be at least Three Characters"
}

console.log(Threechar("Hl"))
console.log(Threechar("Hello"))