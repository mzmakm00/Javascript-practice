function check(n){
    if (n % 3 == 0 )
    {
        console.log("Yes this number is multiple of 3")
    }else if(n % 7 == 0)
    {
        console.log("Yes this number is multiple of 7")
    }else
    {
        console.log("Neither divisble of 3 or 7")
    }
}
check(15)
check(55)
check(35)
