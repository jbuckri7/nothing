function toggleMenu() {
  var menu = document.querySelector('.menu');
  var isOpen = menu.style.left === '-250px';

  if (isOpen) {
    menu.style.left = '0';
  } else {
    menu.style.left = '-250px';
  }
}

// Function to show custom popup message
function showPopup(message, duration) {
  var popup = document.getElementById('popup');
  var popupMessage = document.getElementById('popupMessage');

  // Set popup message
  popupMessage.textContent = message;

  // Show popup
  popup.classList.add('show');

  // Hide popup after duration (in milliseconds)
  setTimeout(function() {
    popup.classList.remove('show');
  }, duration);
}

document.addEventListener('DOMContentLoaded', function() {
  // Your existing code goes here

  // Example usage of the showPopup function:
  showPopup('Welcome to OceanGames!', 3000); // Show popup for 3 seconds
});
