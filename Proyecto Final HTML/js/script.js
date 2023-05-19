document.addEventListener("DOMContentLoaded", function() {
  const popupContainer = document.getElementById("popup-container");
  const closeBtn = document.querySelector(".close-btn");
  const newsletterForm = document.getElementById("newsletter-form");

  // Show the pop-up when the page loads
  popupContainer.style.visibility = "visible";

  // Close the pop-up when the close button is clicked
  closeBtn.addEventListener("click", function() {
      popupContainer.style.visibility = "hidden";
  });

  // Handle the form submission
  newsletterForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Perform any additional form validation if needed

      // Create a new FormData object to capture the form data
      const formData = new FormData(newsletterForm);

      // Send the form data to the server using AJAX
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "submit.php", true);
      xhr.onload = function() {
          if (xhr.status === 200) {
              // Success! Display the response message
              alert(xhr.responseText);
              // Reset the form
              newsletterForm.reset();
              // Hide the pop-up
              popupContainer.style.visibility = "hidden";
          } else {
              // Error! Display an error message
              alert("An error occurred. Please try again.");
          }
      };
      xhr.onerror = function() {
          // Error! Display an error message
          alert("An error occurred. Please try again.");
      };
      xhr.send(formData);
  });
});
