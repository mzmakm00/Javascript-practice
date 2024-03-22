function sortLetters(str) {

    const sortedLetters = str.split("").sort(); 
     
     return sortedLetters.join("");
  }
  
  const exampleString = "webmaster";
  const sortedString = sortLetters(exampleString);
  console.log(sortedString); 
  