function removeScript(str) {
    if (str.slice(4, 10) === "Script") {
      return str.substring(0, 4) + str.substring(10);
    }

    return str;
  }
  
  // Example usage
  const originalString = "JavaScript";
  const modifiedString = removeScript(originalString);
  console.log(modifiedString); 
  