var skillsBox = document.getElementById('skills');
var skillsDropdown = document.getElementById('skills-dropdown');
var causesBox = document.getElementById('causes');
var causesDropdown = document.getElementById('causes-dropdown');

var nameplace = document.getElementById('devname');
var name = document.getElementById('defaultForm-name');
var emailplace = document.getElementById('devemail');
var email = document.getElementById('defaultForm-email');

function setName(){
  nameplace.value = name.value;
}

function setEmail(){
emailplace.value = email.value;
}

skillsDropdown.onchange = function(){
     skillsBox.value = skillsBox.value  + this.value + ", ";
}

causesDropdown.onchange = function(){
    causesBox.value = causesBox.value  + this.value + ", ";
}
