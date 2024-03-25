function arraySum(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + arraySum(arr.slice(1));
    }
}

let numbers = [9, 8, 3, 4, 5];
let sum = arraySum(numbers);
console.log("Sum of the array:", sum);
