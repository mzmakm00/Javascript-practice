checkInteger = number => {
   if(!Number.isInteger(number)){
    throw new Error('Input should be integer');
   }
}

// try {
//     checkInteger(5);
//     console.log("Valid Integer")
// }catch(error){
//     console.error("Error : " +  error.message)     There will be no error
// }


// try {
//     checkInteger(9.7);
//     console.log("Valid Integer")
// }catch(error){
//     console.error("Error : " +  error.message)     There will throw error
// }