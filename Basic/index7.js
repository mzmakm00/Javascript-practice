for(let year = 2014 ; year <= 2050 ; year++ ){
    const checksunday = new Date(year, 0, 1).getDay();
    if (checksunday === 0){
        console.log("January 1st " + year + " falls on a sunday ");
    }
}