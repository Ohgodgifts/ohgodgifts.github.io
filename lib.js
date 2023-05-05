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

function buildContainerWithCardInfo(card) {
      var elem3 = document.createElement("div");
      elem3.classList.add("w3-container");

      var img = document.createElement("img");
      img.src = card[1];
      img.style.width = "100%";
      elem3.appendChild(img);

      elem4 = document.createElement("p");
      elem4.innerHTML = card[0];
      elem3.appendChild(elem4);
      var dest = card[2];
      elem3.onclick = function() {
        window.location = dest;
      }
  return elem3;
}

function renderCards(cards) {
  var elem = document.createElement("div");

  elem.classList.add("w3-row");
  elem.classList.add("w3-grayscale");

  for (var i = 0; i <= cards.length/2; i++) {
    for (var j = 0; j < 2; j++) {
      var ind = i * 2 + j;
      if (ind >= cards.length) {
        break;
      }
      var elem2 = document.createElement("div");
      elem2.classList.add("w3-col");
      elem2.classList.add("l3");
      elem2.classList.add("s6");
     elem2.appendChild(buildContainerWithCardInfo(cards[ind]));
      elem.appendChild(elem2);
    }
  }
  return elem;
}

function gohome() {
  window.location = "index.html";
}

