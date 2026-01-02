// auth.js

document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.querySelector("button");

    registerBtn.addEventListener("click", function (e) {
        e.preventDefault(); // stop page refresh

        // Get input values
        const role = document.querySelector("select").value;
        const name = document.querySelector('input[placeholder="Enter your full name"]').value.trim();
        const roll = document.querySelector('input[placeholder="Enter your ID"]').value.trim();
        const password = document.querySelector('input[placeholder="Enter password"]').value;
        const confirmPassword = document.querySelector('input[placeholder="Re-enter password"]').value;

        // Basic validation
        if (name === "" || roll === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // If everything is valid
        alert(
            "Registration successful!\n\n" +
            "User Type: " + role + "\n" +
            "Name: " + name + "\n" +
            "ID: " + roll
        );

        // Clear form (optional)
        document.querySelector("form")?.reset();
    });
});
