function login(){
    
    let userName = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if(userName === "admin" && password === "admin"){
        alert("Login Success!");
    }else{
        alert("Login Failed!");
    }
        
}

function recover(){
    
    const email = document.getElementById("email").value;
    const emailConfirm = document.getElementById("confEmail").value;
    //const emailFormat = ["@gmail.com", "@outlook.com", "@yahoo.com"]

    if(email === emailConfirm && email !== ""){

        if(email.includes("@gmail.com")){
            alert(`Sent a new password to ${email}`);
        }else{
            alert("Please, enter a valid e-mail");
        }
        
    }else{
        alert("Please, enter a valid e-mail");
    }
        
}
