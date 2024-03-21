function handleTypeError() {
    try {
      const block = undefined;
      console.log(block.property);    // This line throws a TypeError
    } 
    catch (error) {
      if (error instanceof TypeError) {
        console.log('Error: Property access to undefined object');
      } else {
        throw error; 
      }
    }
  }
  
  handleTypeError();
  