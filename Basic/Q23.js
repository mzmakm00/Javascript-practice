function swapFirstLast(str) {
     if (str.length <= 1) {
      return str;     }
    const lastindex = str.substring(1 , str.length - 1 )

    return str.charAt(str.length - 1) + lastindex + str.charAt(0);
} 
  

  const originalString = "Hello";
  const newString = swapFirstLast(originalString);
  console.log(newString); 
  