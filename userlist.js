window.onload = function () {
  displayUserData();
};

function displayUserData() {
  const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
  const userList = document.getElementById("userDataList");
  usersData.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
    userList.appendChild(listItem);
  });
}

document.getElementById("removeBtn").addEventListener("click", function () {
  localStorage.removeItem("usersData"); // Clear user data from local storage
  window.location.href = "register.html"; // Redirect to the register page
});
