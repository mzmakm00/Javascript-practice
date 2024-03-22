function identityMatrix(n) {
    
    if (n <= 0 || !Number.isInteger(n)) {
      throw new Error("Invalid input: n must be a positive integer");
    }
  
    const matrix = [];
  
    // Loop for rows
    for (let i = 0; i < n; i++) {

    const row = [];
  
      // Loop for columns in the current row
    for (let j = 0; j < n; j++) {
    
    row.push(i === j ? 1 : 0);
    }

    matrix.push(row);
    }
  
    // Return the complete identity matrix
    return matrix;
  }
  
  // Example usage
  const size = 4;
  const matrix = identityMatrix(size);
  console.log("Identity matrix of size", size, "x", size, ":");
  console.log(matrix);
 
  