// Q 148
function swapArrayHalves(arr) {
    const midpoint = arr.length / 2;

    const firstHalf = arr.slice(0, midpoint);
    console.log(firstHalf)
    const secondHalf = arr.slice(midpoint);

    const swappedArray = secondHalf.concat(firstHalf);

    return swappedArray;
}


const originalArray = [1, 2, 3, 4, 5, 6];
const swappedArray = swapArrayHalves(originalArray);
console.log(swappedArray);
