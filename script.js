function checkPassword() {
    const correctPassword = "karib";
    const userPassword = document.getElementById("passwordInput").value;

    if (userPassword === correctPassword) {
        alert("Access granted!");
        window.location.href = "home.html"; // Your protected page
    } else {
        alert("Incorrect password!");
    }
}
