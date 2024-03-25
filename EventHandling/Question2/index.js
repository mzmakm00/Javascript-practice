
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownOptions = document.getElementById('dropdownOptions');

  dropdownBtn.addEventListener('click', function() {
    if (dropdownOptions.style.display === 'block') {
      dropdownOptions.style.display = 'none';
    } else {
      dropdownOptions.style.display = 'block';
    }
  });