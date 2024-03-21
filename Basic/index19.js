function isRange(number){
    return(Math.abs( number - 100) <= 20 || Math.abs(number - 400) <= 20);
}
console.log(isRange(20))
console.log(isRange(90))
console.log(isRange(389))