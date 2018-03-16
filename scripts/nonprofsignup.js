function validateForm(){
  let name = document.getElementById('orgname');
  let website = document.getElementById('website');
  let sentence = document.getElementById('sentence');
  let impact = document.getElementById('impact');
  let form = document.getElementById("signup");

  if (!name.value || !website.value || !sentence.value || !impact.value){
    event.preventDefault();
  }

  if(!name.value){
    let nameValidation = document.createElement("div");
    nameValidation.innerHTML = "Enter your organization's name.";
    nameValidation.className = "text-danger";
    nameValidation.id = "skillsValidation";
    if (!document.getElementById('nameValidation')){
      name.parentElement.insertBefore(nameValidation, name);
    }
  }
  if(!website.value){
    let websiteValidation = document.createElement("div");
    websiteValidation.innerHTML = "Enter your organization's website.";
    websiteValidation.className = "text-danger";
    websiteValidation.id = "websiteValidation";
    if (!document.getElementById('websiteValidation')){
      website.parentElement.insertBefore(websiteValidation, website);
    }
  }
  if(!sentence.value){
    let sentenceValidation = document.createElement("div");
    sentenceValidation.innerHTML = "Enter your organization's description.";
    sentenceValidation.className = "text-danger";
    sentenceValidation.id = "sentenceValidation";
    if (!document.getElementById('sentenceValidation')){
      sentence.parentElement.insertBefore(sentenceValidation, sentence);
    }
  }
  if(!impact.value){
    let impactValidation = document.createElement("div");
    impactValidation.innerHTML = "Enter your organization's impact.";
    impactValidation.className = "text-danger";
    impactValidation.id = "impactValidation";
    if (!document.getElementById('impactValidation')){
      impact.parentElement.insertBefore(impactValidation, impact);
    }
  }
  else{
    form.action = "newnonprofit.html"
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
            let img = document.createElement('img');
            img.style.width = "30%";
            img.style.height = "auto";
            img.style.marginTop = "10px";
            img.style.marginRight = "10px";
            let mount = document.getElementById('form');
            if (mount.childElementCount >=3){
                return;
            }
            mount.appendChild(img);
            $('#form').children().last().attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
}); 	
});