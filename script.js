function alertme() {
	alert("hi there");
}

function gotocommonscenarios() {
	window.location = "common-scenarios.html";
}

function addScenarios() {
	maindiv = document.getElementById("maincontent");
	console.log("here");
	//addScenario(maindiv, "Co-worker with new born", "coworker-newborn.html");
	//addScenario(maindiv, "Grand kids", "grandkids.html");
	
	maindiv.appendChild(renderCards([
		["Co-worker with new born", "imgs/parentssm.jpg", "coworker-newborn.html"],
		["Grand kids", "imgs/grandkidsm.jpg", "grandkids.html"],
	  ["Mom", "imgs/momsm.jpg", "mom.html"]]));

  document.querySelectorAll('.mdc-button').forEach(
    function(ele) {
        mdc.ripple.MDCRipple.attachTo(ele);
    });
}


function culturepicked() {
	d = document.getElementById('culturepicker');
	if (d.value == "china") {
		chincontent = document.getElementById("chinacontent");
		console.log(chinacontent);
		chinacontent.classList.remove("hiddenc");
	}
	ddiv = document.getElementById('culturepickerdiv');
	if (ddiv) {
		ddiv.style.display = "none";
	}
}


function gohome() {
  window.location.href = "index.html";
}
