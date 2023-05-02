var agegifts = {
  "0-2 years": "grandkids_0_2",
  "3-5 years": "grandkids_3_5",
  "6-9 years": "grandkids_6_9",
  "10-13 years": "grandkids_10_13",
  "14-17 years": "grandkids_14_17" 
};

function loadgrandkidspage() {
  var div = document.getElementById("agepickerdiv");
  var optionarray = [];
  for (var key in agegifts) {
    optionarray.push(key);
  }
  div.appendChild(createMDCSelectWithOptionsAndId("grandkids-select", optionarray));
  var select = new mdc.select.MDCSelect(document.getElementById("grandkids-select"));
  select.listen("MDCSelect:change", function() {
    gtag('event', 'grandkids_age_picked', {
      'event_category': 'coworker-newborn',
      'event_label': select.value
    });
    window.location.href = agegifts[optionarray[select.selectedIndex]] + ".html";
  });
  document.getElementById("giftsdiv").style.display = "block";
}
