function factorial(Number){
    if(Number === 0 || Number === 1){
        return 1;
    }else{
        return Number *factorial(Number-1);
    }
}
let num = 5;
let result = factorial(num);
console.log(result);