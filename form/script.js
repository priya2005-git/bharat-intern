document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("errorMessage");

    if(password !== confirmPassword){
        errorMessage.textContent = "Passwords do not match!";
    } else {
        errorMessage.textContent = "";
        alert("Registration successful!");
        // Optionally submit the form data here using AJAX or similar method.
    }
});