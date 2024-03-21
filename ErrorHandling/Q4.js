function twoNumbers(n1,n2){
    if (n1 < 0 && n2 < 0) {
        throw new Error("Attention Please : Your Both number are negative")
    }else if (n1 < 0 ) {
        throw new Error("Attention Please : Your First number is negative")
    }else if (n2 < 0 ) {
        throw new Error("Attention Please : Your Second number is negative")
    }
}

try{
     twoNumbers(-1,-1)
}
catch(error)
{
    console.error("Alas : " + error.message)
}