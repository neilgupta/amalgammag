/* ************************************************************************** **
**      new HTMLObject(Object)                                                **
**      Description: Creates an HTMLObject object                             **
**      Arguments: oEl(required) - Object - eg. myHTMLElement                 **
** ************************************************************************** */
HTMLObject = function(oEl) {
	//if(!window.attachEvent) {return oEl;}
	for(property in HTMLObject) { oEl[property] = HTMLObject[property]; }
	return oEl;
}

/* ************************************************************************** **
**      Object.extend(HTMLObject,WhizBang.prototype)                          **
**      Description: Extends an HTMLObject with WhizBang properties           **
**      Arguments: none                                                       **
** ************************************************************************** */
WhizBang = function() { };

/* ************************************************************************** **
**      addEventToObject(Object,String,Function)                              **
**      Description: Event addition                                           **
**      Arguments: oObj(required) - Object - eg. myHTMLObject                 **
**                 sEvt(required) - String - eg. 'onclick'                    **
**                 fFunc(required) - Function - eg. functionName              **
**                                                                            **
**      removeEventFromObject(Object,String)                                  **
**      Description: Event removal                                            **
**      Arguments: oObj(required) - Object - eg. myHTMLObject                 **
**                 sEvt(required) - String - eg. 'onclick'                    **
** ************************************************************************** */
function addEventToObject(oObj,sEvt,fFunc) {
	var oldhandler = oObj[sEvt];
	oObj[sEvt] = (typeof oObj[sEvt] != 'function') ? fFunc : function(){ oldhandler(); fFunc(); };
}

/* ************************************************************************** **
**      stopDefaultAction(Event)                                              **
**      Description: Stops default action of an event                         **
**      Arguments: ev(required) - Event - eg. ev                              **
** ************************************************************************** */
function stopDefaultAction(ev) {
	if(!ev) { ev = window.event; }
	(ev.stopPropagation) ? ev.stopPropagation() : ev.cancelBubble = true;
	(ev.preventDefault) ? ev.preventDefault() : ev.returnValue = false;
	return false;
}

/* ************************************************************************** **
**      getClickedLink(Event)                                                 **
**      Description: Gets the clicked anchor tag                              **
**      Arguments: ev(required) - Event - eg. ev                              **
** ************************************************************************** */
function getClickedLink(ev) {
	if(!ev) { ev = window.event; }
	var clickedLink = (window.event) ? window.event.srcElement : ev.target;
	while (!clickedLink.tagName || clickedLink.tagName.toLowerCase() != "a") clickedLink = clickedLink.parentNode;
	return clickedLink;
}

/* ************************************************************************** **
**      Object.getHeight()                                                    **
**      Description: Gets the height of an HTMLObject                         **
**      Arguments: none                                                       **
**                                                                            **
**      Object.getWidth()                                                     **
**      Description: Gets the width of an HTMLObject                          **
**      Arguments: none                                                       **
**                                                                            **
**      Object.getTop()                                                       **
**      Description: Gets the top value of an HTMLObject                      **
**      Arguments: none                                                       **
**                                                                            **
**      Object.getLeft()                                                      **
**      Description: Gets the left value of an HTMLObject                     **
**      Arguments: none                                                       **
**                                                                            **
**      Object.getInfo(String)                                                **
**      Description: Gets the style value of the passed string from the       **
**                   HTMLObject                                               **
**      Arguments: selector(required) - String - eg. 'top'                    **
**                                                                            **
**      Object.addClass(String)                                               **
**      Description: Adds a class to an HTMLObject                            **
**      Arguments: class_name(required) - String - eg. 'myClassName'          **
**                                                                            **
**      Object.removeClass(String)                                            **
**      Description: Removes a class from an HTMLObject                       **
**      Arguments: class_name(required) - String - eg. 'myClassName'          **
**                                                                            **
**      Object.hasClass(String)                                               **
**      Description: Checks to see if an HTMLObject has a certain class       **
**      Arguments: class_name(required) - String - eg. 'myClassName'          **
**                                                                            **
**      Object.addEvent(String,Function)                                      **
**      Description: Adds an event to an HTMLObject                           **
**      Arguments: evt(required) - String - eg. 'onclick'                     **
**                 func(required) - Function - eg. myFunctionName             **
**                                                                            **
**      Object.removeEvent(String)                                            **
**      Description: Removes an event from an HTMLObject                      **
**      Arguments: evt(required) - String - eg. 'onclick'                     **
** ************************************************************************** */
Object.extend(HTMLObject, {
	getHeight: function() { return this.offsetHeight; },
	getWidth: function() { return this.offsetWidth; },
	getTop: function() {
		var styleValue = 0;
		var obj = this;
		if(obj.offsetParent) {
			while(obj.offsetParent) {
				styleValue += obj.offsetTop;
				obj = obj.offsetParent;
			}
		} else if(obj.x) { styleValue += obj.y; }
		return styleValue;
	},
	getLeft: function() {
		var styleValue = 0;
		var obj = this;
		if(obj.offsetParent) {
			while(obj.offsetParent) {
				styleValue += obj.offsetLeft;
				obj = obj.offsetParent;
			}
		} else if(obj.x) { styleValue += obj.x; }
		return styleValue;
	},
	getInfo: function(selector) {
		var viewCSS = (typeof document.defaultView == 'function') ? document.defaultView() : document.defaultView;
		if(viewCSS && viewCSS.getComputedStyle) {
			var s = viewCSS.getComputedStyle(this,null);
			return s && s.getPropertyValue(selector);
		}
		return this.currentStyle && (this.currentStyle[selector] || null) || null;
	},
	addClass: function(class_name) {
		if(this.className !== '') { this.className += ' ' + class_name; }
		else { this.className = class_name; }
	},
	removeClass: function(class_name) {
		var oldClass = this.className;
		var re = new RegExp('\\s?'+class_name+'\\b');
		if(oldClass.indexOf(class_name) != -1) { this.className = oldClass.replace(re,''); }
	},
	hasClass: function(class_name) {
		var re = new RegExp('(^|\\s+)'+class_name+'(\\s+|$)');
		if(this.getAttributeNode("class") !== null) { return re.test(this.getAttributeNode("class").value); }
		else if(this.className) { return re.test(this.className); }
		else { return false; }
	},
	addEvent: function(evt,func) { addEventToObject(this,evt,func); },
	removeEvent: function(evt) { removeEventFromObject(this,evt); }
});

/* ************************************************************************** **
**      new AppleJAX()                                                        **
**                                                                            **
**      AppleJAX.ahah(String,String,Function)                                 **
**      Description: Puts XHTML page into an XHTML page                       **
**      Arguments: url(required) - String - eg. '/myXHTMLpage.html'           **
**                 target(required) - String - eg. 'myHTMLElementId'          **
**                 func(optional) - Function - eg. function() { myFunctions } **
**                                                                            **
**      AppleJAX.ahahdone(String,Function)                                    **
**      Description: Used with ahah. See above.                               **
**      Arguments: target(required) - String - eg. 'myHTMLElementId'          **
**                 func(optional) - Function - eg. function() { myFunctions } **
**                                                                            **
**      AppleJAX.getXML(String,Function)                                      **
**                                                                            **
**      AppleJAX.getXML2(String,Function)                                     **
**                                                                            **
**      AppleJAX.getXMLdone(Function)                                         **
**                                                                            **
**      AppleJAX.getXMLwithResults(String,Function)                           **
**                                                                            **
**      AppleJAX.getXMLdoneWithResults(XMLHttpRequest,Function)               **
**                                                                            **
** ************************************************************************** */
var AppleJAX = new Object();

Object.extend(AppleJAX, {
	ahah: function(url,target,func) {
		if(window.XMLHttpRequest) {
			req = new XMLHttpRequest();
			req.onreadystatechange =
				(func) ? function() { AppleJAX.ahahdone(target,func); } : function() { ahahDone(target); };
			req.open("GET", url, true);
			req.send(null);
		} else if(window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
			if(req) {
				req.onreadystatechange =
					(func) ? function() { AppleJAX.ahahdone(target,func) ;} : function() { ahahDone(target); };
				req.open("GET", url, true);
				req.send();
			}
		}
	},
	ahahdone: function(target,func) {
		if(req.readyState == 4) {
			if(req.status == 200 || req.status == 304) {
				results = req.responseText;
				$(target).innerHTML = results;
				if(func) { func(); }
			} else { $(target).innerHTML = 'ahah error:\n' + req.statusText; }
		}
	},
	getXML: function(url,func) {
		if(window.XMLHttpRequest) {
			req = new XMLHttpRequest();
			req.onreadystatechange = function() { AppleJAX.getXMLdone(func); };
			req.open("GET", url, true);
			req.send(null);
		} else if (window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
			if(req) {
				req.onreadystatechange = function() { AppleJAX.getXMLdone(func); };
				req.open("GET", url, true);
				req.send();
			}
		}
	},
	getXML2: function(url,func) {
		if(window.XMLHttpRequest) {
			req = new XMLHttpRequest();
			if(func) { req.onreadystatechange = function() { AppleJAX.getXMLdone(func); }; };
			req.open("GET", url, true);
			req.send(null);
		} else if(window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
			if(req) {
				if(func) { req.onreadystatechange = function() { AppleJAX.getXMLdone(func); }; };
				req.open("GET", url, true);
				req.send();
			}
		}
	},
	getXMLdone: function(func) {
		if(req.readyState == 4) {
			results = req.responseXML;
			if(func) { func(); }
		}
	},
	getXMLwithResults: function(url,func) {
		if(window.XMLHttpRequest) {
			req = new XMLHttpRequest();
			req.onreadystatechange = function() { AppleJAX.getXMLdoneWithResults(req,func); };
			req.open("GET", url, true);
			req.send(null);
		} else if(window.ActiveXObject) {
			var req = new ActiveXObject("Microsoft.XMLHTTP");
			if(req) {
				req.onreadystatechange = function() { AppleJAX.getXMLdoneWithResults(req,func); };
				req.open("GET", url, true);
				req.send();
			}
		}
	},
	getXMLdoneWithResults: function(req,func) {
		if(req.readyState == 4) {
			var results = req.responseXML;
			if(func) { func(results); }
		}
	}
});

/* ************************************************************************** **
**      Browser                                                               **
** ************************************************************************** */

var Browser = {
	isSafari1: function() {
		var agent = navigator.userAgent.toLowerCase();
		if(agent.indexOf('safari') != -1 && !Browser.isSafari2()) {return true;}
	},
	isSafari2: function() {
		var agent = navigator.userAgent.toLowerCase();
		if(agent.indexOf('safari') != -1 && (parseFloat(agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).substring(0,agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).indexOf(' '))) >=  300)) {return true;}
	},
	isIE7: function() {
		var agent = navigator.userAgent.toLowerCase();
		if(agent.indexOf('msie 7.0') != -1) {return true;}
	},
	isIE: function() {
		var agent = navigator.userAgent.toLowerCase();
		if(agent.indexOf('msie') != -1) {return true;}
	}
};

/* ************************************************************************** **
**      Browser stuff                                                         **
** ************************************************************************** */
function detect() {
	// simplify things
	var agent 	= navigator.userAgent.toLowerCase();
	
	// detect platform
	this.isMac		= (agent.indexOf('mac') != -1);
	this.isWin		= (agent.indexOf('win') != -1);
	this.isWin2k	= (this.isWin && (
			agent.indexOf('nt 5') != -1));
	this.isWinSP2	= (this.isWin && (
			agent.indexOf('xp') != -1 || 
			agent.indexOf('sv1') != -1));
	this.isOther	= (
			agent.indexOf('unix') != -1 || 
			agent.indexOf('sunos') != -1 || 
			agent.indexOf('bsd') != -1 ||
			agent.indexOf('x11') != -1 || 
			agent.indexOf('linux') != -1);
	
	// detect browser
	this.isSafari	= (agent.indexOf('safari') != -1);
	this.isSafari2 = (this.isSafari && (parseFloat(agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).substring(0,agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).indexOf(' '))) >=  300));
	this.isOpera	= (agent.indexOf('opera') != -1);
	this.isNN		= (agent.indexOf('netscape') != -1);
	this.isIE		= (agent.indexOf('msie') != -1);
	
	// itunes compabibility
	this.isiTunesOK	= this.isMac || this.isWin2k;
}
var browser = new detect();