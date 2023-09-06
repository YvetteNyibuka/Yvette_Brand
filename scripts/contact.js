document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        let valid = true;
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        // Reset error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Validate name field
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            valid = false;
        }

        // Validate email field
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required";
            valid = false;
        }

        // Validate message field
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message is required";
            valid = false;
        }

        // Prevent form submission if there are validation errors
        if (!valid) {
            event.preventDefault();
        }
    });
});