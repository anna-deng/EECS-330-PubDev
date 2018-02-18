var skillsBox = document.getElementById('skills');
var skillsDropdown = document.getElementById('skills-dropdown');
var causesBox = document.getElementById('causes');
var causesDropdown = document.getElementById('causes-dropdown');

skillsDropdown.onchange = function(){
     skillsBox.value = skillsBox.value  + this.value + ", ";
}

causesDropdown.onchange = function(){
    causesBox.value = causesBox.value  + this.value + ", ";
}