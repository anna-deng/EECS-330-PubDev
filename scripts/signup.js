var skillsdata = ["Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "C++",
    "TypeScript",
    "C",
    "React.js",
    "Redux.js",
    "SQL",
    "Node.js",
    "MongoDB",
    "Remit.js",
    "Vue.js"];


var skills = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: $.map(skillsdata, function (skill) {
      return {
          name: skill
      };
  })
});
skills.initialize();

$('.skills-container > input').tagsinput({
  typeaheadjs: {
    name: 'skills',
    displayKey: 'name',
    valueKey: 'name',
    source: skills.ttAdapter()
  }
});

var causesdata = ["Women's Rights",
    "Poverty",
    "Racial Equality",
    "Health & Medicine",
    "Seniors",
    "Arts & Culture",
    "Education & Literacy",
    "Accessibility",
    "Homelessness & Hoursing",
    "Redux.js",
    "Advocacy & Human Rights",
    "Community",
    "Children & Youth"]


var causes = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: $.map(causesdata, function (skill) {
      return {
          name: skill
      };
  })
});
causes.initialize();

$('.causes-container > input').tagsinput({
  typeaheadjs: {
    name: 'causes',
    displayKey: 'name',
    valueKey: 'name',
    source: causes.ttAdapter()
  }
});

function validateForm(){
  let skills = document.getElementById('skills');
  let causes = document.getElementById('causes');
  let bio = document.getElementById('bio');
  let form = document.getElementById("signup");

  if (!skills.value || !causes.value || !bio.value){
    event.preventDefault();
  }

  if(!skills.value){
    let skillsValidation = document.createElement("div");
    skillsValidation.innerHTML = "Enter your skills.";
    skillsValidation.className = "text-danger";
    skillsValidation.id = "skillsValidation";
    if (!document.getElementById('skillsValidation')){
      skills.parentElement.insertBefore(skillsValidation, skills);
    }
  }
  if(!causes.value){
    let causesValidation = document.createElement("div");
    causesValidation.innerHTML = "Enter your volunteer interests.";
    causesValidation.className = "text-danger";
    causesValidation.id = "causesValidation";
    if (!document.getElementById('causesValidation')){
      console.log(causes.parentElement)
      causes.parentElement.insertBefore(causesValidation, causes);
    }
  }
  if(!bio.value){
    let bioValidation = document.createElement("div");
    bioValidation.innerHTML = "Enter your about me.";
    bioValidation.className = "text-danger";
    bioValidation.id = "bioalidation";
    if (!document.getElementById('bioValidation')){
      bio.parentElement.insertBefore(bioValidation, bio);
    }
  }
  else{
    form.action = "newdeveloper.html"
  }
}

$(document).ready( function() {
  $(document).on('change', '.btn-file :file', function() {
var input = $(this),
  label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
input.trigger('fileselect', [label]);
});

$('.btn-file :file').on('fileselect', function(event, label) {
    
    var input = $(this).parents('.input-group').find(':text'),
        log = label;
    
    if( input.length ) {
        input.val(log);
    } else {
        if( log ) alert(log);
    }
  
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#img-upload').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
}); 	
});