const form = document.getElementById("contact-Form");
const nameInput = document.getElementById("namee");
const emailInput = document.getElementById("emaill");
const messageInput = document.getElementById("messagee");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");


form.addEventListener("submit", function (e) {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (name.trim() === "") {
        nameError.textContent = "Please enter your name.";
        e.preventDefault();
        return; 
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        e.preventDefault();
        return; 
    }

    if (message.trim() === "") {
        messageError.textContent = "Please enter your message.";
        e.preventDefault();
        return; 
    }
   
    let messagess = JSON.parse(localStorage.getItem("contactFormData")) || [];

    const formData = {
        name,
        email,
        message,
    };
    
    messagess.push(formData);
    localStorage.setItem("contactFormData", JSON.stringify(messagess));

    alert("Form data saved in local storage.");
});


