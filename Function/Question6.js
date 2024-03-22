function findLongestWord(str) {
    const words = str.split(" ");
  
    let longestWord = "";
    let longestWordLength = 0;
  
    for (const word of words) {
      
        if (word.length > longestWordLength) {
        longestWord = word;
        longestWordLength = word.length;
      }
    }
    return longestWord;
  }
                                                                                                                    
console.log(findLongestWord("Web Development Backentdlippolo  Tutorial"));
  