function capitalizeFirstLetters(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
   // const capitalizedWords = words.charAt(0).toUpperCase();
    return capitalizedWords.join(" ");
  }
  
console.log(capitalizeFirstLetters("the quick brown fox"));
  