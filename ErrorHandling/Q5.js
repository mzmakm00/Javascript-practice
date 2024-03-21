
function EmptyArray(arr) {
    if (arr.length === 0) {
        throw new Error("HEY MR! YOUR GIVEN ARRAY IS EMPTY");
    }
}

const array = [];

try {
    EmptyArray(array);
    console.log("Array is not empty.");
} catch (error) {
    console.log(error.message);
}
