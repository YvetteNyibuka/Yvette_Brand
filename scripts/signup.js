// Select the form and error message elements
const form = document.getElementById("signup-form");
const namesInput = document.getElementById("names");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password1");

const namesError = document.getElementById("names-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("password1-error");

// Event listener for form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Reset error messages
    namesError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Get form input values
    const names = namesInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate email using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    // Validate that names are not empty
    if (names.trim() === "") {
        namesError.textContent = "Please enter your name.";
        return;
    }
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    // Validate password length and matching passwords
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        return;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return;
    }

    // If all validation passes, you can submit the form or perform other actions
    // For example, you can submit the form using form.submit() here

    // Uncomment the following line to submit the form
    // form.submit();
});
