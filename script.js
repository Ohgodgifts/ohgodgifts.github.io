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


function addScenario1(parententry, image, scenariotext, scenariocontenturl) {
	btn = document.createElement('button');
	btn.classList.add("mdc-card");
	btn.style.width = "220px";
	btn.classList.add("scenariocard");
	btn.onclick = function () {
		window.location = scenariocontenturl;
	}

	scenarioimage = document.createElement('img');
	scenarioimage.classList.add('scenariocardimage');
	scenarioimage.src = image;
	btn.appendChild(scenarioimage);

	scenariocontent = document.createElement('div');
	scenariocontent.classList.add('scenariocardcontent');
	scenariocontent.innerHTML = scenariotext;
	scenariocontent.style.width = "100%";
	scenariocontent.style.textAlign = "center";
	btn.appendChild(scenariocontent);

	parententry.appendChild(btn);
}


function addScenario(parententry, scenariotext, scenariocontenturl) {
	btn = document.createElement('button');
	btn.classList.add("mdc-card");
	btn.classList.add("scenariocard");
	btn.onclick = function () {
		window.location = scenariocontenturl;
	}

	scenariocontent = document.createElement('div');
	scenariocontent.classList.add('scenariocardcontent');
	scenariocontent.innerHTML = scenariotext;
	btn.appendChild(scenariocontent);

	parententry.appendChild(btn);
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
