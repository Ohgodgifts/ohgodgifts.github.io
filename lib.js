function createMDCSelectWithOptionsAndId(id, optionsarray) {
  var div = document.createElement('div');
  div.classList.add('mdc-select');
  div.id = id;

  var msa = document.createElement('div');
  msa.classList.add('mdc-select__anchor');
  msa.setAttribute('aria-labelledby', id + '-label');
  msa.setAttribute('aria-expanded', 'false');
  msa.setAttribute('aria-haspopup', 'listbox');
  div.appendChild(msa);

  var dropdownicon = document.createElement('i');
  dropdownicon.classList.add('mdc-select__dropdown-icon');
  msa.appendChild(dropdownicon);

  var selectedtextdiv = document.createElement('div');
  selectedtextdiv.classList.add('mdc-select__selected-text');
  msa.appendChild(selectedtextdiv);
  var selectedtextripple = document.createElement('div');
  selectedtextripple.classList.add('mdc-line-ripple');
  msa.appendChild(selectedtextripple);

  var menu = document.createElement('div');
  menu.classList.add('mdc-select__menu');
  menu.classList.add('mdc-menu');
  menu.classList.add('mdc-menu-surface');
  div.appendChild(menu);

  var ul = document.createElement('ul');
  ul.classList.add('mdc-list');
  menu.appendChild(ul);
  for (var i = 0; i < optionsarray.length; i++) {

    var li = document.createElement('li');
    li.classList.add('mdc-list-item');
    li.setAttribute('role', 'option');
    li.setAttribute('tabindex', '0');
    li.setAttribute('data-value', optionsarray[i]);
    li.innerHTML = optionsarray[i];
    ul.appendChild(li);
  }
  return div;
}

function getAmazonResult(search_term) {
  var div = document.createElement('div');

  var elem = document.createElement('script');
  elem.setAttribute('type', 'text/javascript');
  elem.setAttribute('data-cfasync', 'false');
  elem.innerHTML = 'amzn_assoc_placement = "adunit0"; amzn_assoc_tracking_id = "ohgodgifts-20"; amzn_assoc_ad_mode = "search"; amzn_assoc_ad_type = "smart"; amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "US"; amzn_assoc_default_search_phrase = "'+search_term+'"; amzn_assoc_default_category = "All"; amzn_assoc_design = "in_content"';
  div.appendChild(elem);

  var elem2 = document.createElement('script');
  elem2.setAttribute('data-cfasync', 'false');
  elem2.setAttribute('src', 'https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US');
  elem2.setAttribute('async', 'true');
  div.appendChild(elem2);
  return div;
}

function addGift(elem, title, content) {
  console.log("here");
	var el = document.createElement("span");
	el.classList.add("material-icons");
	el.innerHTML = "expand_more";
  el.classList.add("floatright");


	var titledetails = document.createElement("span");
	var el2 = document.createElement("span");
	el2.innerHTML = title;
	el2.classList.add("gifttitle");
	titledetails.appendChild(el2);

	var el3 = document.createElement("div");
	var el3_text = document.createElement("div");
	el3_text.classList.add("giftdetailstext");
	el3.appendChild(el3_text);
  el3.appendChild(createShoppingBar(title));
	el3_text.innerHTML = content;
	el3.classList.add("hiddenc");
	// el3.classList.add("mdc-card");
	el3.classList.add("tbmargin")
	el3.classList.add("giftdetails")


	titledetails.onclick = function(event) {
		if (el.innerHTML == "expand_more") {
			el.innerHTML = "expand_less";
			el3.classList.remove("hiddenc");
      gtag('event', 'gift_details_expanded', {
        'event_category': 'coworker-newborn',
      });
		} else {
			el.innerHTML = "expand_more";
			el3.classList.add("hiddenc");
		}
	}
  el3.appendChild(getAmazonResult(title));
	ee = document.createElement("div");
	ee.classList.add("topmargin");
	ee.classList.add("container");
	ee.classList.add("mdc-card");

	ee.appendChild(titledetails);
	titledetails.appendChild(el);
	titledetails.appendChild(el3);
	elem.appendChild(ee);
}


function addGifts(elem, datatofill) {
  elem.innerHTML = "";
  if (!datatofill) {
    return;
  }
	for(var i = 0; i < datatofill.length; i++) {
		addGift(elem, datatofill[i].title, datatofill[i].description);		
	}
}

function giftCard(cardinfo) {
	btn = document.createElement('button');
	btn.classList.add("mdc-card");
	btn.style.width = "170px";
	btn.style.height = "230px";
	btn.classList.add("scenariocard");
	btn.onclick = function () {
		window.location = cardinfo[2];
	}

	scenarioimage = document.createElement('img');
	scenarioimage.classList.add('scenariocardimage');
	scenarioimage.src = cardinfo[1];
  scenarioimage.style.alignSelf = "center";
  scenarioimage.style.width = "150px";
	btn.appendChild(scenarioimage);

	scenariocontent = document.createElement('div');
	scenariocontent.classList.add('scenariocardcontent');
	scenariocontent.innerHTML = cardinfo[0];
  scenariocontent.height = '100%';
	scenariocontent.style.alignSelf = "center";
	btn.appendChild(scenariocontent);
  return btn;
}


function renderCards(cards) {
  var elem = document.createElement("div");
  elem.classList.add("cardscontainer");
  elem.style.alignSelf = "center";
  elem.style.display = "flex";
  for (var i = 0; i <= cards.length/2; i++) {
    for (var j = 0; j < 2; j++) {
      var ind = i * 2 + j;
      if (ind >= cards.length) {
        break;
      }
      var ec = document.createElement("div");
      ec.appendChild(giftCard(cards[ind]));
      ec.classList.add("tablecard");
      elem.appendChild(ec);
    }
  }
  return elem;
}




