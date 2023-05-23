document.addEventListener("DOMContentLoaded", function() {
  const popupContainer = document.getElementById("popup-container");
  const closeBtn = document.querySelector(".close-btn");
  const newsletterForm = document.getElementById("newsletter-form");

  closeBtn.addEventListener("click", function() {
    popupContainer.style.display = "none";
  });


});
