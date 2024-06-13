let username1 = "Max";
let password1 = "PASSWORD";
let username2 = "Aaron";
let password2 = "ironcup";
let username3 = "Carly";
let password3 = "IM DEAD";
document.getElementById("sub").onclick = function(){
    if(username1 == document.getElementById("user").value){
        if(password1 == document.getElementById("pass").value){
            window.location.replace("Max's Cloud.html");
        }
    }
    else if (username2 == document.getElementById("user").value){
        if(password2 == document.getElementById("pass").value){
            window.location.replace("Aaron's Cloud.html");
        }
    }
    else if (username3 == document.getElementById("user").value){
        if(password3 == document.getElementById("pass").value){
            window.location.replace("https://x.com/Carly1326580");
        }

    }
    else {
        alert("Incorrect Username or Password")
    }

}


