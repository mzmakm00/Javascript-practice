function removeChar(str , position){
    if(position < 0 || position >= str.length){
       return "Invalid Position"; 
    }else
    {
       return str.substring(0 , position ) + str.substring(position + 1);
    }
}
console.log(removeChar("w3resource" , 5))