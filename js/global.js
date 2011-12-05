function backToTop() {
    var x1 = x2 = x3 = 0;
    var y1 = y2 = y3 = 0;

    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }

    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }

    x3 = window.scrollX || 0;
    y3 = window.scrollY || 0;

    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));

    window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));

    if (x > 0 || y > 0) {
        window.setTimeout("backToTop()", 25);
    }
}

var expectedHash = "";

function handleHistory()
{
  	if ( window.location.hash != expectedHash )
  	{
    	expectedHash = window.location.hash;
    	newHash = expectedHash.substring(1);
    	fixNav();
   		page = determinePage(newHash);
		ajax_loadContent('content',page);
  	}
  	return true;
}

function pollHash() {
	fixNav();
	page_url = parse_url();
	if (page_url == "" && window.location.hash != "") {
		page_url = (window.location.hash).substring(1);
	}
	page = determinePage(page_url);
	ajax_loadContent('content',page);
	//if (page.indexOf('.php') != -1) {
	//	loadobjs("js/sub-js/" + page.substring(page.indexOf('/') + 1,page.indexOf('.php')) + ".js");
	//}
	if (!((BrowserDetect.browser == "Safari") && ((('"' + BrowserDetect.version + '"').indexOf("312") != -1) || (('"' + BrowserDetect.version + '"').indexOf("41") != -1)))) {
		handleHistory();
		window.setInterval("handleHistory()", 500);
	}
	return true;
}

function loadPage(newHash) {
	if ((BrowserDetect.browser == "Safari") && ((('"' + BrowserDetect.version + '"').indexOf("312") != -1) || (('"' + BrowserDetect.version + '"').indexOf("41") != -1))) {
		window.location.href = "?id=" + newHash;
	}
	else {
  		window.location.hash = newHash;
  		expectedHash = window.location.hash;
  		fixNav();
  		ajax_loadContent('content',determinePage(expectedHash.substring(1)));
  	}
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

function form_Validator(form)
{

  if (form.name.value == "")
  {
    alert("Please enter your name.");
    form.name.focus();
	return (false);
  }

  if (form.message.value == "")
  {
    alert("Please enter your message.");
    form.message.focus();
    return (false);
  }
  
  return (true);
}

function sh (id) { 

   whichpost = document.getElementById(id); 
   
   if (whichpost.className=="show") { 
      whichpost.className="hide"; 
   } 
   else { 
      if (whichpost.className=="hide") { 
      whichpost.className="show"; 
      } 
   } 
}
function insertTags(tagOpen, tagClose, sampleText) {

    var txtarea = document.submitcomment.message;
	// IE
	if(document.selection) {
		var theSelection = document.selection.createRange().text;
		if(!theSelection) { theSelection=sampleText;}
		txtarea.focus();
		if(theSelection.charAt(theSelection.length - 1) == " "){
			theSelection = theSelection.substring(0, theSelection.length - 1);
			document.selection.createRange().text = tagOpen + theSelection + tagClose + " ";
		} else {
			document.selection.createRange().text = tagOpen + theSelection + tagClose;
		}
	// Mozilla
	} else if(txtarea.selectionStart || txtarea.selectionStart == '0') {
 		var startPos = txtarea.selectionStart;
		var endPos = txtarea.selectionEnd;
		var myText = (txtarea.value).substring(startPos, endPos);
		if(!myText) { myText=sampleText;}
		if(myText.charAt(myText.length - 1) == " "){ // exclude ending space char, if any
			subst = tagOpen + myText.substring(0, (myText.length - 1)) + tagClose + " "; 
		} else {
			subst = tagOpen + myText + tagClose; 
		}
		txtarea.value = txtarea.value.substring(0, startPos) + subst + txtarea.value.substring(endPos, txtarea.value.length);
		txtarea.focus();
		var cPos=startPos+(tagOpen.length+myText.length+tagClose.length);
		txtarea.selectionStart=cPos;
		txtarea.selectionEnd=cPos;
	// All others
	} else {
		tagOpen=tagOpen.replace(/\n/g,"");
		tagClose=tagClose.replace(/\n/g,"");
		document.infoform.infobox.value=tagOpen+sampleText+tagClose;
		txtarea.focus();
	}
	if (txtarea.createTextRange) { txtarea.caretPos = document.selection.createRange().duplicate(); }
}

function parse_url() {
index = (window.location.href).indexOf("?id=");
if (index == -1) { return ""; }
else { return (window.location.href).substring(index+4); }
}

Array.prototype.in_array = function(search_term) {
  var i = this.length;
	 do {
		if (this[i] === search_term) {
		   return true;
		}
	 } while (i-- && i >= 0)
  return false;
}

function determinePage(page) {
	// If the page is allowed, include it.
    if (staticpages.in_array(page)) {
    	return 'inc/' + page + '.php';
    }
	// If the page is an allowed dynamic page, format it.
	else if (pages.in_array(page)) {
		return 'inc/body.php?pid='+page;
	}
	
	else if (cat.in_array(page)) {
		var pid = page;
		return 'inc/cat.php?pid='+page;
	}
	
	//EDIT WITH LATEST ISSUE NUMBER
    else if (page == "") {
		return 'issues/i9.php';
    }

	else if (issues[page] != -1) {
		return 'issues/' + page + '.php';
	}
	
	// If all else fails, throw an error page.
    else {
    	return 'inc/error.php';
	}
}

var staticpages = new Array('about','contact','submit','unsubscribe')
var cat = new Array('c1','c3','c4','c5','c7','c8','c9','c11','c12','c13','c15','c19','c20','c21','c22')
var pages = new Array('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',
					  '16','17','18','19','20','21','22','23','24','25',
					  '26','29','30','31','32','33','34','35','36','37','38','39','41','42','43','44','45','46','47','48','50','51','52',
			   		  '27','28','49','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79',
			   		  '80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107',
			   		  '108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126',
			   		  '127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148',
			   		  '149','150','151','152','153','154','155','156','157','158','159','160','161','162',
			   		  '163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185')
var issues = new Array()
issues['i1'] = 'December 2005';
issues['i2'] = 'February 2006';
issues['i3'] = 'March 2006';
issues['i4'] = 'April 2006';
issues['i5'] = 'May 2006';
issues['i6'] = 'June 2006';
issues['i7'] = 'July 2006';
issues['i8'] = 'September 2006';
issues['i9'] = 'January 2007';
