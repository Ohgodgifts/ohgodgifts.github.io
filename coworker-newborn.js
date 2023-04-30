function BuildLInkButton(url, text) {
  var button = document.createElement("div");
  button.innerHTML = text;
  button.classList.add("mdc-button");
  button.onclick = function(event) {
    gtag('event', 'click', {
      'event_category': 'link',
      'event_label': url
    });
    window.open(url, '_blank');
  }
  return button;
}


function createShoppingBar(title) {
  var parentdiv = document.createElement("div");

  var amazonLinkUrl = "https://www.amazon.com/s?k=" + title + "&ref=nb_sb_noss_2";
  var googleLinkUrl = "https://www.google.com/search?tbm=shop&q=" + title + "&ref=nb_sb_noss_2";

  parentdiv.appendChild(BuildLInkButton(amazonLinkUrl, "Amazon"));
  parentdiv.appendChild(BuildLInkButton(googleLinkUrl, "Google"));
  return parentdiv;
}



function culturepicked(v) {
	if (!v) {
		v = "china";
	} else {
    gtag('event', 'culture_picked', {
      'event_category': 'coworker-newborn',
      'event_label': v
    });
  }
  window.location.href = cultureinfo[v];
}
var cultureinfo = {
  "china": "coworker_china.html",
  "india": "coworker_india.html",
};

function getUrlParam(key) {
  var url = window.location.href;
  var index = url.indexOf(key);
  if (index == -1) {
    return null;
  }
  var value = url.substring(index + key.length + 1);
  var index2 = value.indexOf("&");
  if (index2 != -1) {
    value = value.substring(0, index2);
  }
  return value;
}

var select = null;
function onloadf() {
  var d = document.getElementById("culturepicker");
  select = new mdc.select.MDCSelect(d);
  select.listen('MDCSelect:change', () => {
    culturepicked(select.value);
  });
  var culture = getUrlParam("cultr");
  if(culture) {
    culturepicked(culture);
  }

 document.querySelectorAll('.mdc-button').forEach(
    function(ele) {
        mdc.ripple.MDCRipple.attachTo(ele);
    });
}

function gohome() {
  window.location.href = "index.html";
}
