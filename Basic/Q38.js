function repeatString(str, numCopies) {

    if (numCopies < 0) {
      return "Invalid: Number of copies must be non-negative.";
    }
  
    return str.repeat(numCopies);
  }
  
 
  console.log(repeatString("abc", 3));    
  console.log(repeatString("hello", 2));  
  console.log(repeatString("!", 5));      
  console.log(repeatString("abc", 0));    
  