function decodeURIHandleError(uriString) {
    try {
      const decodedURI = decodeURI(uriString);
      console.log('Decoded URI:', decodedURI);
    } catch (error) {
      if (error instanceof URIError) {
        console.error('Error: Invalid URI format. Please provide a valid URI.');
      } else {
        throw error; // Re-throw other errors
      }
    }
  }
  
  decodeURIHandleError('https://www.example.com/');  // Valid URI
  decodeURIHandleError('invalidURI');                // Invalid URI, throws URIError
  