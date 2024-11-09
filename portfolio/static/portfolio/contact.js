// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get the form element
    const contactForm = document.getElementById("contactForm");

    // Get the thank-you message element
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Add an event listener for the form submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally (to avoid page reload)

        // Simulate form submission by hiding the form and showing the thank-you message
        contactForm.style.display = "none"; // Hide the form
        thankYouMessage.style.display = "block"; // Show the thank-you message

        // Optionally, you can clear the form fields (reset the form)
        contactForm.reset();
    });
});
