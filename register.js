// register.js
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData && userData.length > 0) {
    window.location.href = "user.html"; // Redirect to the user page if user data exists
  }

  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(this);
      saveDataToLocal(formData);
      window.location.href = "user.html"; // Redirect to the user page
    });

  // Add event listener to the button to generate random users
  document
    .getElementById("generateRandomUserBtn")
    .addEventListener("click", function () {
      fetchRandomUserDataAndRedirect();
    });
};

function saveDataToLocal(formData) {
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  userData.push(Object.fromEntries(formData));
  localStorage.setItem("userData", JSON.stringify(userData));
}

function fetchRandomUserDataAndRedirect() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const userData = JSON.parse(xhr.responseText);
      const randomUser = userData[Math.floor(Math.random() * userData.length)];
      const { name, email } = randomUser;
      const user = { name, email };

      const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
      usersData.push(user);
      console.log(user);
      localStorage.setItem("usersData", JSON.stringify(usersData));

      // Redirect to userlist.html
      window.location.href = "userlist.html";
    } else {
      console.error("Failed to fetch data:", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Failed to fetch data.");
  };
  xhr.send();
}
