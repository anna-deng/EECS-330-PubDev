function volUp() {
	for (i = 0; i < 6; i++) {
		var color = volLevels[i].style.backgroundColor;
		if (color == "rgb(181, 0, 115)") {}
		else {
			volLevels[i].style.backgroundColor = "rgb(181, 0, 115)";
			break;
    	}
  	}
}

function claimTask() {
	var taskList = document.getElementById('taskList');
	var calendar = document.getElementById(arguments[0]);
	taskList = taskList.appendChild(calendar);
	var btn = arguments[1];
	btn.innerHTML = "Testing";

}

