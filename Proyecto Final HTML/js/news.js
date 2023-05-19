// Function to show the pop-up message
function showPopup() {
    document.getElementById('popup-message').style.display = 'block';
  }
  
  // Function to close the pop-up message
  function closePopup() {
    document.getElementById('popup-message').style.display = 'none';
  }
  
  // Function to subscribe the user
  function subscribe() {
    const email = document.getElementById('email-input').value;
    
    // Perform subscription logic here (e.g., send the email to a server)
  
    // Display a thank you message and hide the pop-up
    document.getElementById('popup-message').innerHTML = '<h2>Thank You!</h2><p>You have successfully subscribed to our newsletter.</p>';
    setTimeout(function() {
      document.getElementById('popup-message').style.display = 'none';
    }, 3000); // Hide the message after 3 seconds (adjust as needed)
  }
  
  // Show the pop-up message after a delay (e.g., 5 seconds)
  setTimeout(showPopup, 5000);