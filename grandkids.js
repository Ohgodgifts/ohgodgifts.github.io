var agegifts = {
  "0-2 years": "grandkids_0_2",
  "3-5 years": "grandkids_3_5",
  "6-9 years": "grandkids_6_9",
  "10-13 years": "grandkids_10_13",
  "14-17 years": "grandkids_14_17" 
};

function loadgrandkidspage() {
  var div = document.getElementById("ageoptions");

  for (var key in agegifts) {
    var opt = document.createElement("a");
    opt.classList.add("w3-bar-item");
    opt.classList.add("w3-button");
    opt.classList.add("w3-hover-light-grey");
    opt.innerHTML = key;
    opt.onclick = function() {
      console.log("hi");
      window.location.href = agegifts[this.innerHTML] + ".html";
    }
    div.appendChild(opt);
  }
}
