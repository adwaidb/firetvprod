
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    sessionStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}

if (window.location.pathname.includes("dashboard.html") && sessionStorage.getItem("auth") !== "true") {
  window.location.href = "index.html";
}

function logout() {
  sessionStorage.removeItem("auth");
  window.location.href = "index.html";
}
