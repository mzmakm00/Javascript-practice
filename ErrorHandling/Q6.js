function isEmptyString(str) {
    if (str.length === 0) {
      throw new Error('STRING IS EMPTY ! YOU HAVE TO ADD SOMETHING FOR REMOVING THIS ERROR');
    }
  }
  try {
    isEmptyString(""); 
  } catch (error) {
    console.error(error.message);
  }
  