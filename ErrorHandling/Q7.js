function accessArrayElement(arr, index) {
  try {
      const element = arr[index];

      if (element === undefined) {
          throw new RangeError('Invalid index. Please provide a valid index within the array bounds.');
      }

      console.log('Accessed element:', element);
  } catch (error) {
      if (error instanceof RangeError) {
          console.error("Error:", error.message);
      } else {
          console.error("An Unexpected error occurred:", error);
      }
  }
}

const myArray = [10, 20, 30];

accessArrayElement(myArray, 2); 
accessArrayElement(myArray, -1); 
accessArrayElement(myArray, 10); 
