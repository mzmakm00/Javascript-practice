function AddFirstLast(str) {
    if (str.length <= 1) {
     return str;     
    }
   const midstring = str.substring(0 , str.length)

   return str.charAt(0) + midstring + str.charAt(0);
} 
 

 const originalString = "String";
 const newString = AddFirstLast(originalString);
 console.log(newString); 