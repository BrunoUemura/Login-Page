let user = 
[
    {
        "user": "bruno.uemura",
        "password": "bruno123"
    },

    {
        "user": "administrador",
        "password": "admin123"
    }
]


    function login(){
    let userName = document.getElementById("user").value;
    let password = document.getElementById("pass").value;


    if(userName === user[0].user && password === user[0].password ||
        userName === user[1].user && password === user[1].password
        ){
        alert("Login Success!");
        window.open('html/main.html');
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
        
    }else if(email !== emailConfirm){
        alert("Please, enter a valid e-mail");
    }else{
        alert("Please, enter an e-mail");
    }
        
}
