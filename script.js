function togglepassword(){
    var passwordb = document.getElementById("password");
    var checkbox = document.getElementById("showpassword");
    passwordb.type = checkbox.checked ? "text" : "password";
    }

    