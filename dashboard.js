var modal = document.getElementById('modal1');
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById('submit')
span.onclick = function() {
    modal.style.display = "none";
}

function claimTask() {
	var taskList = document.getElementById('taskList');
	var calendar = document.getElementById(arguments[0]);
	taskList = taskList.appendChild(calendar);
	var btn = arguments[1];
	btn.innerHTML = "Testing";
}

function sendMessage() {
	event.preventDefault();
	btn.innerHTML = "Submitted!";
	btn.setAttribute("class", "btn btn-primary disabled");
}