
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.textContent = "Please enter your Student ID and password.";
    } else {
        message.textContent = "Login successful! Welcome, " + username;
    }
}
