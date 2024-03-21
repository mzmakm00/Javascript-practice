function findLargest(a, b, c) {
    let largest = a;

    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    return largest;
}

console.log(findLargest(1011, 101, 9500)); 
