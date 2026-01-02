document.getElementById("forgot-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const idInput = document.getElementById("id");
    const successMsg = document.getElementById("success-msg");

    if (idInput.value.trim() === "") {
        alert("Please enter your ID");
        return;
    }

    // Simulating backend email send
    successMsg.style.display = "block";

    // Optional: disable button after click
    const button = document.querySelector("button");
    button.disabled = true;
    button.innerText = "Sending...";

    setTimeout(() => {
        button.disabled = false;
        button.innerText = "Send Reset Link";
        idInput.value = "";
    }, 3000);
});
