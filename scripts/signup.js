const form = document.getElementById("signup-form");
const namesInput = document.getElementById("names");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password1");

const namesError = document.getElementById("names-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("password1-error");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    namesError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    const names = namesInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (names.trim() === "") {
        namesError.textContent = "Please enter your name.";
        return;
    }
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        return;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return;
    }

    
    let users = JSON.parse(localStorage.getItem("userData")) || [];
    const userData = {
        names,
        email,
        password,
    };

    users.push(userData);
    localStorage.setItem("userData", JSON.stringify(users));

    alert("Signup successful!");
});
