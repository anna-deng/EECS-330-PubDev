function validateSignup(){
    let name = document.getElementById('signup-name');
    let email = document.getElementById('signup-email');
    let password = document.getElementById('signup-pass');

    if (!name.value || !password.value || !isValidEmail(email.value)){
        event.preventDefault();
    }
    if (!name.value){
        let nameValidation = document.createElement("div");
        nameValidation.innerHTML = "Enter your name";
        nameValidation.className = "text-danger";
        nameValidation.id = "nameValidation";
        if (!document.getElementById('nameValidation')){
            name.parentElement.insertBefore(nameValidation, name.nextSibling);
        }
    }
    if (!password.value){
        let passValidation = document.createElement("div");
        passValidation.innerHTML = "Enter your password";
        passValidation.className = "text-danger";
        passValidation.id = "passValidation";
        if (!document.getElementById('passValidation')){
            password.parentElement.insertBefore(passValidation, password.nextSibling);
        }
    }
    if (!isValidEmail(email.value)){
        let emailValidation = document.createElement("div");
        emailValidation.innerHTML = "Enter a valid email address";
        emailValidation.className = "text-danger";
        emailValidation.id = "emailValidation";
        if (!document.getElementById('emailValidation')){
            email.parentElement.insertBefore(emailValidation, email.nextSibling);
        }
    }
}

function validateLogin(){
    let password = document.getElementById('login-pass');
    let email = document.getElementById('login-email');

    if (!password.value || !isValidEmail(email.value)){
        event.preventDefault();
    }

    if (!password.value){
        let passValidation = document.createElement("div");
        passValidation.innerHTML = "Enter your password";
        passValidation.className = "text-danger";
        passValidation.id = "passValidation";
        if (!document.getElementById('passValidation')){
            password.parentElement.insertBefore(passValidation, password.nextSibling);
        }
    }

    if (!isValidEmail(email.value)){
        let emailValidation = document.createElement("div");
        emailValidation.innerHTML = "Enter a valid email address";
        emailValidation.className = "text-danger";
        emailValidation.id = "emailValidation";
        if (!document.getElementById('emailValidation')){
            email.parentElement.insertBefore(emailValidation, email.nextSibling);
        }
    }

}

function isValidEmail(email){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}