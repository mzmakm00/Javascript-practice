function Longest_Country_Name(countryNames) {
    let longestName = '';

   
    for (let i = 0; i < countryNames.length; i++) {

        if (countryNames[i].length > longestName.length) {

            longestName = countryNames[i]; 
        }
    }

    return longestName;
}


console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

