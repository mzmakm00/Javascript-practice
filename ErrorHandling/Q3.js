function twoNumbers(n1,n2){
    if (n2 == 0){
        throw new Error("Attention Please : Your second nuumber is zero")
    }
}

try{
    twoNumbers(10,0)
}catch(error){
    console.error("Alas : " + error.message)
}