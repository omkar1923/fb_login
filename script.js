let usr1 = "Omkar";
    let pass1 = "Omkar@123"
    function validate() {
        let usr2 = document.getElementById("usr").value;
        let pass2 = document.getElementById("pass").value;

        if (usr1 === usr2 && pass1 === pass2) {
            open("/3rd/instaaccount.html");
        }
        else {
            alert("please enter correct Credentials")
        }
    }
