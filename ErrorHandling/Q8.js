function processData(data)
{
try {
    if(typeof data !== 'string' && typeof data !== 'number')
    {
       throw new TypeError('Invalid data type ! Provide a string or a number') 
    }
    if(typeof data ===  'string' || data.length === 0)
    {
        throw new Error ('Empty String ! it should be filled ')
    }
}catch(error){
    if (error instanceof TypeError){
        console.error('TypeError :', error.message)
    }
    else if (error instanceof Error) 
    {
        console.error('Error:', error.message);
      } else {
        console.error('Unexpected error:', error); 
      }
}
}


processData(42);      // Valid number, processed
processData("hello"); // Valid string, processed
processData("");       // Empty string, throws Error
processData(true);    // Invalid type, throws TypeError
processData(null);     // Unexpected error, re-thrown