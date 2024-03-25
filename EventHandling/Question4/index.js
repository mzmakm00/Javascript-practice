document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
  
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
  
    // Check if any required field is empty
    if (nameInput.value === '' || emailInput.value === '') {
      // Show error message
      errorMessage.style.display = 'block';
    } else {
      // Hide error message and submit form
      errorMessage.style.display = 'none';
      this.submit();
    }
  });