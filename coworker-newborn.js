chinadata = [{
  "title": "Chinese Baby Clothes",
  "description": " Traditional Chinese baby clothes are a popular gift for new parents. Look for outfits with embroidered designs and soft, comfortable fabric."
},
{
  "title": "Baby Red Egg and Ginger Party Gift Set",
  "description": " A red egg and ginger party is a traditional Chinese celebration for newborns. A gift set with red eggs, ginger candies, and other traditional items is a thoughtful and culturally significant gift."
},
{
  "title": "Chinese Zodiac Baby Blanket",
  "description": " A baby blanket with the Chinese zodiac animal for the year the baby was born is a unique and meaningful gift."
},
{
  "title": "Chinese Lucky Charm Necklace",
  "description": " A necklace with a traditional Chinese lucky charm, such as a red string or jade pendant, is a symbolic gift for new parents."
},
{
  "title": "Chinese Baby Carrier",
  "description": " A traditional Chinese baby carrier, such as a mei tai or baby sling, can be a practical and culturally significant gift."
},
{
  "title": "Chinese Calligraphy Art",
  "description": " A piece of Chinese calligraphy art with a meaningful message, such as a blessing for the baby's future, is a thoughtful and decorative gift."
},
{
  "title": "Chinese Herbal Bath Bundle",
  "description": " A bundle of Chinese herbal bath products, such as ginger or ginseng bath salts, can help new parents relax and recover after childbirth."
},
{
  "title": "Chinese Character Blocks",
  "description": " Wooden blocks with Chinese characters can be a fun and educational gift for parents who want to teach their child Chinese."
},
{
  "title": "Chinese Tea Set",
  "description": " A Chinese tea set with traditional teapot and cups is a practical and cultural gift that can be enjoyed by the whole family."
},
{
  "title": "Chinese New Year Gift Basket",
  "description": " A gift basket filled with traditional Chinese New Year treats, such as pineapple cakes and dried fruits, can be a festive and tasty gift for new parents."
}];

indiandata = [{
  "title": "Silver Kada",
  "description": " A silver kada, or bangle, is a traditional gift for newborns in India. It is believed to bring good luck and protect the baby from evil spirits."
},
{
  "title": "Silver Spoon and Bowl Set",
  "description": " A silver spoon and bowl set is a classic gift for Indian parents with a newborn. It is often engraved with the baby's name and birth date."
},
{
  "title": "Baby Clothes with Indian Embroidery",
  "description": " Indian embroidery is known for its intricate designs and vibrant colors. A set of baby clothes with Indian embroidery is a beautiful and culturally significant gift."
},
{
  "title": "Indian Baby Massage Oil",
  "description": " Baby massage is an important part of Indian culture. A bottle of Indian baby massage oil, such as almond or coconut oil, is a practical and thoughtful gift."
},
{
  "title": "Ghungroo Anklets",
  "description": " Ghungroo anklets are traditional Indian jewelry with small bells attached. They are often worn by babies and are believed to soothe and entertain them."
},
{
  "title": "Silver Laxmi Ganesha Idol",
  "description": " Laxmi and Ganesha are two important deities in Indian culture. A silver idol of Laxmi and Ganesha is a symbolic and auspicious gift for new parents."
},
{
  "title": "Traditional Indian Toys",
  "description": " Traditional Indian toys, such as wooden rattles and handmade dolls, are a unique and nostalgic gift for new parents."
},
{
  "title": "Indian Sari for the Mother",
  "description": " A sari is a traditional Indian garment worn by women. A beautiful sari for the mother is a thoughtful and elegant gift."
},
{
  "title": "Indian Baby Carrier",
  "description": " A traditional Indian baby carrier, such as a ring sling or meh dai, is a practical and culturally significant gift for new parents."
},
{
  "title": "Indian Baby Naming Ceremony Kit",
  "description": " A naming ceremony is an important event in Indian culture. A kit with traditional items for the ceremony, such as a coconut, turmeric, and flowers, is a meaningful gift for new parents."
}];

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
	chinacontent = document.getElementById("giftsdiv");
	chinacontent.classList.remove("hiddenc");
	if (!v) {
		v = "china";
	} else {
    gtag('event', 'culture_picked', {
      'event_category': 'coworker-newborn',
      'event_label': v
    });
  }
	addGifts(chinacontent, cultureinfo[v]);
	ddiv = document.getElementById('culturepickerdiv');
}

var cultureinfo = {
  "china": chinadata,
  "india": indiandata,
  "other": {}
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
