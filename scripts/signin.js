document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginEmailInput = document.getElementById("login-email");
    const loginPasswordInput = document.getElementById("login-password");

    const loginEmailError = document.getElementById("login-email-error");
    const loginPasswordError = document.getElementById("login-password-error");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        loginEmailError.textContent = "";
        loginPasswordError.textContent = "";

        const loginEmail = loginEmailInput.value;
        const loginPassword = loginPasswordInput.value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(loginEmail)) {
            loginEmailError.textContent = "Please enter a valid email address.";
            return;
        } else if (loginPassword.length < 6) {
            loginPasswordError.textContent = "Password must be at least 6 characters.";
            return;
        } else {
            const userCredentials = JSON.parse(localStorage.getItem('userData')) || [];

            let isAuthenticated = false;
            for (let i = 0; i < userCredentials.length; i++) {
                if (loginEmail === userCredentials[i].email && loginPassword === userCredentials[i].password) {
                    isAuthenticated = true;
                    break;
                }
            }

            if (isAuthenticated) {
                window.location.href = "../Dashboard/index1.html";
                
            } else {
                loginEmailError.textContent = "Invalid email or password.";
            }
        }
    });
});
