function integersInRange(x, y) {
    if (x <= y) {
        console.log(x);
        integersInRange(x + 1, y);
    }
}

integersInRange(3, 9);