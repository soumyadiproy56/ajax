// user.js
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData || userData.length === 0) {
    // Show message with countdown timer
    const messageDiv = document.createElement("div");
    messageDiv.id = "redirectMessage";
    document.body.appendChild(messageDiv);

    let secondsLeft = 10;
    const interval = setInterval(function () {
      messageDiv.textContent = `Please register first. Redirecting to registration page in ${secondsLeft} seconds...`;
      secondsLeft--;

      if (secondsLeft < 0) {
        clearInterval(interval);
        window.location.href = "register.html"; // Redirect to the register page
      }
    }, 1000);
  } else {
    const user = userData[userData.length - 1]; // Get the last registered user
    const greetingDiv = document.getElementById("userGreeting");
    greetingDiv.textContent = `Hi, ${user.name}`;

    document.getElementById("logoutBtn").addEventListener("click", function () {
      localStorage.removeItem("userData"); // Clear user data from local storage
      window.location.href = "register.html"; // Redirect to the register page
    });
  }
};
