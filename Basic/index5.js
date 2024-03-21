function rotateString(str) {
    let rotatedString = str;
    for (let i = 0; i < str.length; i++) 
    
    {
        const lastChar = rotatedString.charAt(rotatedString.length - 1);
        
        rotatedString = lastChar + rotatedString.slice(0, -1);

        console.log(rotatedString);
    }
}

// Example usage:
rotateString('w3resource');
