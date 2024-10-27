// Function to validate passwords
function validatePasswords() {
    const password = document.getElementById("user_password").value;
    const confirmPassword = document.getElementById("user_password_confirm").value;
    const message = document.getElementById("message");

    // Check if the passwords match
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return false; // Prevent form submission
    } else {
        message.textContent = ""; // Clear any previous message
        return true; // Allow form submission
    }
}

// Function to check passwords on input
function checkPasswordMatch() {
    const password = document.getElementById("user_password").value;
    const confirmPassword = document.getElementById("user_password_confirm").value;
    const message = document.getElementById("message");

    if (confirmPassword && password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
    } else {
        message.textContent = ""; // Clear the message when they match
    }
}

// Adding event listeners
document.getElementById("user_password_confirm").addEventListener("input", checkPasswordMatch);
document.getElementById("user_password").addEventListener("input", checkPasswordMatch);
