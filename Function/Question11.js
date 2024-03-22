function secondLowestAndGreatest() {
    let arr = [1, 2, 3, 4, 5];
    let firstLowest = arr[0];
    let firstGreatest = arr[0];
    let secondLowest = Infinity;
    let secondGreatest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstLowest) {
            secondLowest = firstLowest;
            firstLowest = arr[i];
            console.log(firstLowest)
        } else if (arr[i] < secondLowest && arr[i] !== firstLowest) {
            secondLowest = arr[i];
        }

        if (arr[i] > firstGreatest) {
            secondGreatest = firstGreatest;
            firstGreatest = arr[i];
        } else if (arr[i] > secondGreatest && arr[i] !== firstGreatest) {
            secondGreatest = arr[i];
        }
    }

    console.log("Second Lowest:", secondLowest);
    console.log("Second Greatest:", secondGreatest);
}

secondLowestAndGreatest();
