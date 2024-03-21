function accessArrayElement(arr, index) {
    try {
      const element = arr[index];

      console.log('Accessed element:', element);

    } 
    catch (error) 
    {
      if (error instanceof RangeError) {
     
        console.log('Error: Invalid index. Please provide a valid index within the array bounds.');
      }
       else
        {
       
            throw error; 

        }
    }
  }
  
  const myArray = [10, 20, 30];
  
  accessArrayElement(myArray, 2); 
  accessArrayElement(myArray, -1); 
  accessArrayElement(myArray, 10);
  