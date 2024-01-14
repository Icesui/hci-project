function logout() {

    localStorage.removeItem("users");
    window.location.href = "login.html";
}