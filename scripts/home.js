(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 550) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

});
  }(jQuery));


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
        nameValidation.id = "signupNameValidation";
        if (!document.getElementById('signupNameValidation')){
            name.parentElement.insertBefore(nameValidation, name.nextSibling);
        }
    }
    if (!password.value){
        let passValidation = document.createElement("div");
        passValidation.innerHTML = "Enter your password";
        passValidation.className = "text-danger";
        passValidation.id = "signupPassValidation";
        if (!document.getElementById('signupPassValidation')){
            password.parentElement.insertBefore(passValidation, password.nextSibling);
        }
    }
    if (!isValidEmail(email.value)){
        let emailValidation = document.createElement("div");
        emailValidation.innerHTML = "Enter a valid email address";
        emailValidation.className = "text-danger";
        emailValidation.id = "signupEmailValidation";
        if (!document.getElementById('signupEmailValidation')){
            email.parentElement.insertBefore(emailValidation, email.nextSibling);
        }
    }
}

function validateLogin(){
    let password = document.getElementById('login-pass');
    let email = document.getElementById('login-email');
    let form = document.getElementById("login-form");

    if (!password.value || !isValidEmail(email.value)){
        event.preventDefault();
    }

    if (!password.value){
        let passValidation = document.createElement("div");
        passValidation.innerHTML = "Enter your password";
        passValidation.className = "text-danger";
        passValidation.id = "loginPassValidation";
        if (!document.getElementById('loginPassValidation')){
            password.parentElement.insertBefore(passValidation, password.nextSibling);
        }
    }

    if (!isValidEmail(email.value)){
        let emailValidation = document.createElement("div");
        emailValidation.innerHTML = "Enter a valid email address";
        emailValidation.className = "text-danger";
        emailValidation.id = "loginEmailValidation";
        if (!document.getElementById('loginEmailValidation')){
            email.parentElement.insertBefore(emailValidation, email.nextSibling);
        }
    }

    if(email.value == 'pm@pm.com')
    {
     form.action ="pm.html";
    }
    else
    {
      form.action ="dashboard.html";
    }
}

function isValidEmail(email){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

$(function(){
    $('#signup').on('hide.bs.modal', function(e){
        removeElementsByClass('text-danger');
    })
    $('#login').on('hide.bs.modal', function(e){
        removeElementsByClass('text-danger');
    })
})
