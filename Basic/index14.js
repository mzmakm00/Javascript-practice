function getFileExtension(filename) {
    // Split the filename by '.' and get the last part
    const parts = filename.split('.');

    const extension = parts[parts.length - 1];
    
    return extension;
}

// Test the function
const filename1 = "example.txt";
const filename2 = "document.pdf";
const filename3 = "image.jpeg";

console.log("File extension of", filename1, ":", getFileExtension(filename1));
console.log("File extension of", filename2, ":", getFileExtension(filename2));
console.log("File extension of", filename3, ":", getFileExtension(filename3));
