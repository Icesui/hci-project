function register() {
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
    
        const users = JSON.parse(localStorage.getItem("users")) || [];
    
        if (users.some(u => u.username === newUsername)) {
            document.getElementById("registerMessage").innerText = "Username already taken. Choose a different one.";
        } else {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "login.html";
        }
    }

    function reveal(){
   
        var Usernameoutput = document.getElementById("newUsername").value;
        var Passwordoutput = document.getElementById("newPassword").value;
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var age = document.getElementById("age").value;
        var birthday = document.getElementById("birthday").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var gender = document.querySelector("#gender input:checked").value;
        var program = document.getElementById("program").value;
     
        document.getElementById("usershow").innerHTML=Usernameoutput;
        document.getElementById("passwordshow").innerHTML=Passwordoutput;
        document.getElementById("firstnameshow").innerHTML=firstname;
        document.getElementById("lastnameshow").innerHTML=lastname;
        document.getElementById("ageshow").innerHTML=age;
        document.getElementById("birthdayshow").innerHTML=birthday;
        document.getElementById("emailshow").innerHTML=email;
        document.getElementById("contactshow").innerHTML=contact;
        document.getElementById("gendershow").innerHTML=gender;
        document.getElementById("programshow").innerHTML=program;
     
     }