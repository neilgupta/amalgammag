// elements to create and clone
var oDiv = document.createElement('div');
var oA = document.createElement('a');
var oP = document.createElement('p');
var oImg = document.createElement('img');
var oSpan = document.createElement('span');
var oUl = document.createElement('ul');
var oLi = document.createElement('li');
var oH5 = document.createElement('h5');

var GAMNav = {
	oNavDiv: new Object(),
	oNavItems: new Array(),
	iIEAdjustments: 24,
	
	init: function() {
		preloader(GAMNav.aNavHeaderImgs);
		GAMNav.oNavDiv = $('nav');
		var oNavHeaders = GAMNav.oNavDiv.getElementsByTagName('h3');
		var iIdToOpen = oNavHeaders[0].id;
		for(var i=0; i<oNavHeaders.length; i++) {
			var oHeaderId = oNavHeaders[i].id;
			var oList = oNavHeaders[i].nextSibling;
			while(!oList.tagName || oList.tagName.toLowerCase() != 'ul') {
				oList = oList.nextSibling;
			}
			oList = new HTMLObject(oList);
			Object.extend(oList,WhizBang.prototype);
			var oListClone = new HTMLObject(oList.cloneNode(true));
			oListClone.addClass('listclone');
			var oListParent = oList.parentNode;
			oListParent.appendChild(oListClone);
			var oListHeight = oListClone.offsetHeight;
			if(browser.isIE == true) { oListHeight -= GAMNav.iIEAdjustments; }
			oListParent.removeChild(oListClone);
			var sBodyId = document.getElementsByTagName('body')[0].id;
			var oAs = oList.getElementsByTagName('a');
			for(var j=0; j<oAs.length; j++) {
				var oAnchor = new HTMLObject(oAs[j]);
				if(oAnchor.hasClass(sBodyId)) { iIdToOpen = oHeaderId; }
			}
			var bIsOpen = false;
			//alert('list height: '+oList.offsetHeight+'\nclone height: '+oListHeight);
			if(oList.offsetHeight == oListHeight) { bIsOpen = true; }
			GAMNav.oNavItems[i] = {
				id: oHeaderId,
				h3: new HTMLObject(oNavHeaders[i]),
				list: oList,
				listheight: oListHeight,
				isopen: bIsOpen
			};
			addEventToObject(oNavHeaders[i],'onclick',GAMNav.processDrawer);
		}
		for(var j=0; j<GAMNav.oNavItems.length; j++) {
			GAMNav.oNavItems[GAMNav.oNavItems[j].id] = GAMNav.oNavItems[j];
		}
		GAMNav.scaleDrawerHeight(iIdToOpen);
	},
	processDrawer: function(ev) {
		stopDefaultAction(ev);
		if(!ev) { ev = window.event; }
		var oClickedHeader = (window.event) ? window.event.srcElement : ev.target;
		while(!oClickedHeader.tagName || oClickedHeader.tagName.toLowerCase() != 'h3') {
			oClickedHeader = oClickedHeader.parentNode;
		}
		var sId = oClickedHeader.id;
		if(GAMNav.oNavItems[sId].isopen == false) {
			GAMNav.scaleDrawerHeight(sId);
		}
	},
	scaleDrawerHeight: function(sId) {
		for(var i=0; i<GAMNav.oNavItems.length; i++) {
			var oItem = GAMNav.oNavItems[i];
			removeEventFromObject(oItem.h3,'onclick');
		}
		var iScaleCount = 0;
		for(var j=0; j<GAMNav.oNavItems.length; j++) {
			var oItem = GAMNav.oNavItems[j];
			var oId = oItem.id;
			var oList = oItem.list;
			var oH3 = oItem.h3;
			var oHeight = oItem.listheight;
			var oListCurrentHeight = oList.offsetHeight;
	
			if(oId == sId && oListCurrentHeight == oItem.listheight) {
				oItem.isopen = true;
				iScaleCount++;
			} else if(oId == sId && oListCurrentHeight != oItem.listheight && oItem.isopen == false) {
				if(browser.isIE == true) { oHeight += GAMNav.iIEAdjustments; }
				if(j > 0) { oH3.style.borderTop = '1px solid #FFFFFF'; }
				oList.scaleAttrib('height','px',0,oHeight,300,30,100,function(){
					if(j > 0) { oH3.style.borderTop = 'none'; }
					iScaleCount++;
				});
				oItem.isopen = true;
			} else if(oListCurrentHeight != 0 && oItem.isopen == true) {
				if(browser.isIE == true) { oHeight += GAMNav.iIEAdjustments; }
				if(j > 0) { oH3.style.borderBottom = '1px solid #FFFFFF'; }
				oList.scaleAttrib('height','px',oHeight,0,300,30,100,function(){
					if(j > 0) { oH3.style.borderBottom = 'none'; }
					iScaleCount++;
				});
				oItem.isopen = false;
			} else {
				iScaleCount++;
			}
	
			switch(oItem.isopen) {
				case true:
					if(!oH3.hasClass('hi')) { oH3.addClass('hi'); }
					break;
				case false:
					if(oH3.hasClass('hi')) { oH3.removeClass('hi'); }
					break;
				default:
					break;
			}
		}
		var fSetClick = function() {
			if(iScaleCount == GAMNav.oNavItems.length) {
				for(var i=0; i<GAMNav.oNavItems.length; i++) {
					var oClickItem = GAMNav.oNavItems[i];
					addEventToObject(oClickItem.h3,'onclick',GAMNav.processDrawer);
				}
			}
			else {
				setTimeout(function(){fSetClick();},10);
			}
		};
		fSetClick();
	}
};

function GAMNavOpen() {
	var sBodyId = document.getElementsByTagName('body')[0].id;
	var oNav = $('nav');
	var oLists = oNav.getElementsByTagName('ul');
	for(var i=0; i<oLists.length; i++) {
		var oList = oLists[i];
		var oAnchors = oList.getElementsByTagName('a');
		for(var j=0; j<oAnchors.length; j++) {
			var oAnchor = new HTMLObject(oAnchors[j]);
			if(oAnchor.hasClass(sBodyId)) {
				oList.style.height = 'auto';
				var oHeader = oList.previousSibling;
				while(!oHeader.tagName || oHeader.tagName.toLowerCase() != 'h3') {
					oHeader = oHeader.previousSibling;
				}
				oHeader = new HTMLObject(oHeader);
				if(!oHeader.hasClass('hi')) { oHeader.addClass('hi'); }
			}
		}
	}
}

var imageMovieClickSwap = {
	bIsMovieShowing: false,
	oContainer: false,
	oImage: false,
	sMovieParams: false,
	sMoviePath: false,
	
	init: function() {
		// set variables
		imageMovieClickSwap.oContainer = new HTMLObject($('movieswap')) || false;
		imageMovieClickSwap.oImage = new HTMLObject($('movieswap-img')) || false;
		if(imageMovieClickSwap.oContainer && imageMovieClickSwap.oImage) {
			Object.extend(imageMovieClickSwap.oContainer,WhizBang.prototype);
			Object.extend(imageMovieClickSwap.oImage,WhizBang.prototype);
		}
	},
	processToggle: function() {
		if(imageMovieClickSwap.bIsMovieShowing === false && imageMovieClickSwap.oContainer && imageMovieClickSwap.oImage) {
			imageMovieClickSwap.bIsMovieShowing = true;
			var qtbHeight = imageMovieClickSwap.oContainer.getInfo('height');
			var elem = new HTMLObject(document.createElement('div'));
			elem.id = 'moviediv';
			if(browser.isIE == false) elem.style.height = '312px';
			imageMovieClickSwap.oContainer.appendChild(elem);
			if(browser.isIE == false) elem.style.top = (parseInt(qtbHeight)-parseInt(elem.getInfo('height')))/2;
			
			var innerHTMLTemp = QT_GenerateOBJECTText_XHTML(imageMovieClickSwap.sMoviePath,'528','312','','id','movieswap-obj','bgcolor','#FFFFFF','autoplay','TRUE','controller','TRUE','type','video/quicktime','enablejavascript','TRUE','qtnext1','javascript:imageMovieClickSwap.processToggle();');
			imageMovieClickSwap.oImage.style.opacity = (0 / 101);
			imageMovieClickSwap.oImage.style.MozOpacity = (0 / 100);
			imageMovieClickSwap.oImage.style.KhtmlOpacity = (0 / 100);
			imageMovieClickSwap.oImage.style.filter = "alpha(opacity=" + 0 + ")";
			elem.innerHTML = innerHTMLTemp;
			if(!imageMovieClickSwap.oContainer.hasClass('hi') && browser.isSafari == false) {
				imageMovieClickSwap.oContainer.addClass('hi');
			}
		} else {
			if(imageMovieClickSwap.oContainer.hasClass('hi') && browser.isSafari == false) {
				imageMovieClickSwap.oContainer.removeClass('hi');
			}
			var elem = $('moviediv');
			elem.innerHTML = '';
			elem.style.display = 'none';
			elem.parentNode.removeChild(elem);
			imageMovieClickSwap.bIsMovieShowing = false;
			imageMovieClickSwap.oImage.style.visibility = 'hidden';
			imageMovieClickSwap.oImage.Fade(500,0,100,10,10,10);
		}	
	}
};


/*****************************************************/
/** Gallery Movie ************************************/
/*****************************************************/
if(GalleryMovie == undefined) var GalleryMovie = {};  // Make sure base namespace exists
GalleryMovie.Movie = function() {};
GalleryMovie.Gallery = function() {};
GalleryMovie.SwapAds = function() {};

// Movie
GalleryMovie.Movie.prototype = {
	aMovies: new Array(),
	aMovieSizes: new Array(),
	aMovieSizesNavLinks: new Array(),
	bSwapAds: false,
	bSetGallery: false,
	bEndStateSwap: false,
	bBeginningStateSwap: false,
	bPlayInitMovie: false,
	bPlayRandInitMovie: false,
	bNavSwapFlag: false,
	bMovieContainer: true,
	iSwapContainerPadding: 0,
	iSwapContainerHeight: 0,
	iMoviesLength: false,
	fFunc: false,
	oSwapContainer: false,
	oMovieContainer: false,
	oMovieTitle: false,
	oMovieSizesNav: false,
	oMovieSizesNavGuts: oDiv.cloneNode(true),
	oMovieNav: new Object(),
	oCurrentSizeLink: new Object(),
	oLastSizeLink: false,
	oCurrentMovie: new Object(),
	oLastMovie: false,
	sObjName: 'GalleryMovie.Movie',
	sNavSwapObjName: 'GalleryMovie.SwapAds',
	sXMLFile: null,
	sSwapContainer: false,
	sMovieContainer: false,
	sTitleContainer: false,
	sTitleClass: 'movietitle',
	sSizesContainer: false,
	sNavContainer: false,
	sNavClass: false,
	sCurrentSize: false,
	movieGallery: function() {},
	movieGalleryProperties: function() {},
	results: false,
	sNoQTLink: '',
	
	
	init: function() {
		if(this.sSwapContainer && !this.oSwapContainer) {
			this.oSwapContainer = new HTMLObject($(this.sSwapContainer));
			Object.extend(this.oSwapContainer,WhizBang.prototype);
		}
		if(!this.oMovieContainer) this.oMovieContainer = $(this.sMovieContainer);
		if(this.sTitleContainer && !this.oMovieTitle) this.oMovieTitle = $(this.sTitleContainer);
		this.oMovieNav = $(this.sNavContainer);

		if(this.bSetGallery) {
			// set scrolling gallery
			var self = this;
			AppleJAX.getXMLwithResults(this.sXMLFile,function(results) {
				self.results = results;
				self.setMovieGallery();
			});			
		} else {
			this.setMovies();
			if(this.fFunc) this.fFunc();
		}
		var self = this;
		addEventToObject(window,'onunload',function() {self.oCurrentMovie.movieobj = null;});
	},
	setMovieGallery: function() {
		var self = this;
		this.sMovieGalleryObjName.sGalleryContainer = this.sNavContainer;
		this.sMovieGalleryObjName.results = this.results;
		this.sMovieGalleryObjName.oMovieSelf = this;
		this.sMovieGalleryObjName.oSelf = GalleryMovie.Gallery.movieGallery;
		this.sMovieGalleryObjName.sTitleClass = this.sTitleClass;
		this.sMovieGalleryObjName.fFunc = function() {
			var galleryimages = self.results.getElementsByTagName('galleryimage');
		};
		
		this.sMovieGalleryObjName.init();
		this.sMovieGalleryObjName.setGalleryFromXML();
		if(this.fFunc) this.fFunc();
	},
	traverseXML: function(tree, elmAppendTo) {
		var nodeCount = tree.childNodes.length;
		var children = tree.childNodes;
		for(var i = 0; i < nodeCount; i++) {
			var child = children[i];
			if(child.tagName) {
				var htmlElm = document.createElement(''+child.nodeName+'');
				if(child.nodeName == 'img' && browser.isIE == true) {
					htmlElm.width = child.width;
					htmlElm.height = child.height;
				}
				for(var j=0; j<child.attributes.length; j++) {
					var attrKey = child.attributes[j].nodeName;
					var attrValue = child.getAttribute(attrKey);
					var link = '';
					if(attrKey == 'href') {
						link = encodeURI(attrValue);
						if(browser.isSafari == true) {
							link = link.replace(/&#38;/g, "&");
						}
						attrValue = link;
					}
					if(attrKey == 'class' && browser.isIE == true && attrValue != null) {
						htmlElm.className = attrValue;
					} else {
						htmlElm.setAttribute(attrKey, attrValue);
					}
				}
				try {
					if(child.firstChild.data) {
						var text = document.createTextNode(child.firstChild.data);
						htmlElm.appendChild(text);
					}
				} catch(e) {}
				if(elmAppendTo != null) {
					elmAppendTo.appendChild(htmlElm);
				}
				if(child.childNodes.length>0) this.traverseXML(child, htmlElm);
			}
		}

	}
};


// Gallery
GalleryMovie.Gallery.prototype = {
	results: false,
	oMovieSelf: GalleryMovie.Movie,
	sGalleryContainer: false,
	sTitleClass: '',
	oSelf: false,
	fFunc: false,
	oGalleryXML: false,
	oGalleryImagesXMLObj: false,
	aGalleryHash: new Array(),
	oGalleryContainerHTML: new Object(),
	oGalleryRuleHTML: oDiv.cloneNode(true),
	oGalleryImgGalleryNavHTML: oDiv.cloneNode(true),
	oGalleryLeftOpacHTML: oDiv.cloneNode(true),
	oGalleryRightOpacHTML: oDiv.cloneNode(true),
	oGalleryMovingGalleryHTML: oDiv.cloneNode(true),
	iGalleryMoveSpeed: 4,
	iThumbsAcross: 3,
	iThumbWidth: 72,
	iThumbHeight: 55,
	iThumbPadding: 10,
	iThumbAlt: 'View Issue',
	iGalleryWidth: 0,
	sTextColor: '#666',
	iThumbFontSize: 10,
	iThumbNavWidth: false,
	oGalleryHTML: new HTMLObject(oDiv.cloneNode(true)),
	iMoveSpeed: false,
	oGalleryNavPrevHTML: oA.cloneNode(true),
	oGalleryNavPrevImgHTML: oImg.cloneNode(true),
	oGalleryNavNextHTML: oA.cloneNode(true),
	oGalleryNavNextImgHTML: oImg.cloneNode(true),
	oGalleryNavHTML: oDiv.cloneNode(true),
	oGalleryPageNavHTML: oDiv.cloneNode(true),
	oGalleryMotionContainerHTML: oDiv.cloneNode(true),
	oGalleryListContainerHTML: oDiv.cloneNode(true),
	oGalleryListHTML: oUl.cloneNode(true),
	sRuleColor: '#666',
	iThumbNavHeight: false,
	bThumbNamesToggle: false,
	bFullSizeImgToggle: false,
	aRequiredAttributes: new Array(),
	iThumbNum: 0,
	iCurrentGalleryImg: 0,
	iCurrentBeginningThumb: 0,
	iNextBeginningThumbLeft: false,
	aMovingThumbLeft: new Array(),
	aMovingThumbs: new Array(),
	aThumbImgs: new Array(),
	aFullSizeImgs: new Array(),
	sErrorMsg: '',
	sOnImg: '',
	sOffImg: '',
	sPrevArrow: '',
	sNextArrow: '',
	iNextArrowHeight: 14,
	iNextArrowWidth: 14,
	iPrevArrowHeight: 14,
	iPrevArrowWidth: 14,
	iOnOffImgWidth: 0,
	iOnOffImgHeight: 0,
	oFullSizeImgHTML: oImg.cloneNode(true),
	oDateHTML: oH5.cloneNode(true),
	oDescriptionHTML: oP.cloneNode(true),
	sRequiredAttributeErrors: '',
	iRemainder: 0,
	sError100: function() { return 'What are you thinking? A gallery with no images? That won\'t work! '; },
	sError101: function() { return 'You need to add attributes to the gallery tag.  Please add: '
				+ this.sRequiredAttributeErrors + '. '; },
	sError102: function() { return 'You have an incorrect number of gallery images.  ' +
				'Please check your XML file. ' + this.aGalleryHash.length +
				' gallery images and ' + this.iThumbsAcross + ' thumbnails across. You need ' +
				(this.iThumbsAcross-parseInt(this.iRemainder)) + ' more or ' + this.iRemainder + ' less. '; },
	sError103: function() { return 'Watch your speed! Your speed will not work ' +
				'in this scenario. Your current speed is ' + this.iGalleryMoveSpeed +
				' and your image width with padding is ' +
				(this.iThumbWidth+(this.iThumbPadding*2)) +
				'. This results in an actual speed of ' + this.iMoveSpeed +
				', which may be a repeating decimal. '; },
	
	init: function() {
		this.oGalleryXML = this.results.getElementsByTagName('gallery')[0];
		this.oGalleryImgsXMLObj = this.oGalleryXML.getElementsByTagName('galleryimage');
		this.oGalleryContainerHTML = $(this.sGalleryContainer);
		this.iThumbNavWidth = ((this.iThumbWidth+(this.iThumbPadding*2))*this.iThumbsAcross);
		Object.extend(this.oGalleryHTML,WhizBang.prototype);
		this.iMoveSpeed = parseFloat((this.iThumbWidth+(this.iThumbPadding*2))/this.iGalleryMoveSpeed);
	},
	moveRight: function(scroll,nextBeginningThumbnail) {
		for(i=0;i<(this.aGalleryHash.length);i++) {
			this.aGalleryHash[i].movingthumbnailleft += this.iMoveSpeed;
			if(isFinite(this.aGalleryHash[i].movingthumbnailleft)) {
				this.aGalleryHash[i].movingthumbnail.style.left =
					this.aGalleryHash[i].movingthumbnailleft + 'px';
			}
		}

		if(this.aGalleryHash[nextBeginningThumbnail].movingthumbnailleft == 0) scroll = false;

		var moveTimeout;
		var obj = this;
		if(scroll == true) {moveTimeout = window.setTimeout(function(){obj.moveRight(scroll,nextBeginningThumbnail);},10);}
		else {clearTimeout(moveTimeout); return true;}
		this.iCurrentBeginningThumb = nextBeginningThumbnail;		
	},
	moveLeft: function(scroll,nextBeginningThumbnail) {
		for(i=(this.aGalleryHash.length)-1;i>=0;i--) {
			this.aGalleryHash[i].movingthumbnailleft -= this.iMoveSpeed;
			//obj.aMovingThumbLeft[i] -= obj.iMoveSpeed;
			if(isFinite(this.aGalleryHash[i].movingthumbnailleft)) {
				this.aGalleryHash[i].movingthumbnail.style.left =
					this.aGalleryHash[i].movingthumbnailleft + 'px';
			}
		}

		if(this.aGalleryHash[nextBeginningThumbnail].movingthumbnailleft == 0) scroll = false;

		var moveTimeout;
		var obj = this;
		if(scroll == true) {moveTimeout = window.setTimeout(function(){obj.moveLeft(scroll,nextBeginningThumbnail);},10);}
		else {clearTimeout(moveTimeout); return true;}
		this.iCurrentBeginningThumb = nextBeginningThumbnail;	
	},
	move: function(direction,nextBeginningThumbnail) {
		this.iThumbNum = nextBeginningThumbnail;
		this.displayMovingThumbnailsHTML(direction);
		var scroll = true;
		// scroll left or right
		if(direction == 'right') this.moveRight(scroll,nextBeginningThumbnail);
		else if(direction == 'left') this.moveLeft(scroll,nextBeginningThumbnail);
		this.displayPageNavHTML();		
	},
	processMovingGalleryNavItem: function(obj,ev) {
		stopDefaultAction(ev);
		var clickedLink = getClickedLink(ev);

		if(clickedLink === obj.oGalleryNavPrevHTML) {
			var nextBeginningThumbnail = (obj.iCurrentBeginningThumb > 0) ?
				obj.iCurrentBeginningThumb - obj.iThumbsAcross :
				obj.aGalleryHash.length - obj.iThumbsAcross;
			obj.move('right',nextBeginningThumbnail);
		}
		else if(clickedLink === obj.oGalleryNavNextHTML) {
			var nextBeginningThumbnail =
				((obj.iCurrentBeginningThumb + obj.iThumbsAcross) <
				obj.aGalleryHash.length) ?
				obj.iCurrentBeginningThumb + obj.iThumbsAcross : 0 ;
			obj.move('left',nextBeginningThumbnail);
		}
		else {
			var clickedNum = parseInt(clickedLink.id.split('_')[1]);
			if(clickedNum < obj.iCurrentBeginningThumb)	obj.move('right',clickedNum);
			else if(clickedNum > obj.iCurrentBeginningThumb) obj.move('left',clickedNum);
		}
		return false;		
	},
	processGalleryImageItem: function(ev) {
		stopDefaultAction(ev);
		var clickedLink = getClickedLink(ev);
		myGalleryObj.iCurrentGalleryImg = clickedLink.parentNode.id.split('_')[1];
		return false;		
	},
	findClickedGalleryDiv: function(obj) {
		var nextBeginningThumbnail =
			((obj.iCurrentBeginningThumb + obj.iThumbsAcross) <
			obj.aGalleryHash.length) ?
			obj.iCurrentBeginningThumb + obj.iThumbsAcross : 0 ;
		obj.move('left',nextBeginningThumbnail);	
	},
	setGalleryFromXML: function() {
		for(var i=0, oItem; oItem = this.oGalleryImgsXMLObj[i]; i++) {
			this.aGalleryHash[i] = {
				obj:oItem,
				href:oItem.getAttribute('href'),
				thumbnail:oItem.getElementsByTagName('thumbnail')[0].firstChild.data,
				alt:oItem.getAttribute('alt'),
				name:oItem.getElementsByTagName('name')[0].firstChild.data,
				id:oItem.getAttribute('id'),
				classstr:oItem.getAttribute('class'),
				onclick:oItem.getAttribute('onclick'),
				onmouseover:oItem.getAttribute('onmouseover'),
				movingthumbnail:new Object(),
				movingthumbnailleft:0,
				isdisplayed:true
			};
		}
		for(var i=0; i<this.aGalleryHash; i++) {
			this.aGalleryHash[this.aGalleryHash[i].id] = this.aGalleryHash[i];
		}
		this.displayHTML();
		if(this.fFunc) {this.fFunc();}
	},
	errorCheck: function() {
		this.iPages = parseInt(this.aGalleryHash.length/this.iThumbsAcross);
	
		if(this.aGalleryHash.length <= 0) this.sErrorMsg += this.sError100();
		
		for(i=0;i<this.aRequiredAttributes.length;i++) {
			if(!(this.oGalleryXML.getAttribute(this.aRequiredAttributes[i]))) {
				if(i == (this.aRequiredAttributes.length-1)) {
					this.sRequiredAttributeErrors += 'and ' + this.aRequiredAttributes[i];
				} else {
					this.sRequiredAttributeErrors += this.aRequiredAttributes[i] + ', ';
				}
			}
		}
		if(this.sRequiredAttributeErrors.length > 0) this.sErrorMsg += this.sError101();
	
		if(this.oGalleryXML.getAttribute('rulecolor')) { //should be hasAttribute but doesn't work in IE
			this.sRuleColor = this.oGalleryXML.getAttribute('rulecolor');
		}
		if(this.oGalleryXML.getAttribute('thumbnailnavheight')) { //should be hasAttribute
			this.iThumbNavHeight = parseInt(this.oGalleryXML.getAttribute('thumbnailnavheight'));
		} else {
			this.iThumbNavHeight = this.iThumbHeight+60+this.iOnOffImgHeight;
		}	

		this.iRemainder = (this.aGalleryHash.length%this.iThumbsAcross);
		if(this.iRemainder > 0) {
			this.sErrorMsg += this.sError102();
		}
		var moveSpeedString = this.iMoveSpeed.toString();
		var moveSpeedDecimal = this.iMoveSpeed.toString().split('.')[1];

		if(moveSpeedDecimal && moveSpeedDecimal.length >= 10) this.sErrorMsg += this.sError103();
	},
	displayHTML: function() {
		this.errorCheck();
		
		this.oGalleryHTML.setAttribute('id',this.sGalleryContainer+'gallery');
		this.oGalleryRuleHTML.setAttribute('id',this.sGalleryContainer+'galleryrule');
		this.oGalleryImgGalleryNavHTML.setAttribute('id',this.sGalleryContainer+'imagegallerynav');
		this.oGalleryPageNavHTML.setAttribute('id',this.sGalleryContainer+'pagenav');
		this.oGalleryMotionContainerHTML.setAttribute('id',this.sGalleryContainer+'motioncontainer');
		this.oGalleryLeftOpacHTML.setAttribute('id',this.sGalleryContainer+'leftopacity');
		this.oGalleryRightOpacHTML.setAttribute('id',this.sGalleryContainer+'rightopacity');
		this.oGalleryMovingGalleryHTML.setAttribute('id',this.sGalleryContainer+'movinggallery');
		
		var gallerynavtoggle = false;
		if(this.aGalleryHash.length > this.iThumbsAcross) {
			gallerynavtoggle = this.displayPrevNextNavHTML();
			this.displayPageNavHTML();
		}
		
		this.oGalleryMotionContainerHTML.appendChild(this.oGalleryMovingGalleryHTML);
		this.oGalleryImgGalleryNavHTML.appendChild(this.oGalleryPageNavHTML);
		this.oGalleryImgGalleryNavHTML.appendChild(this.oGalleryMotionContainerHTML);
	
		if(this.sErrorMsg.length > 0) {
			var errorText = document.createTextNode(this.sErrorMsg);
			this.oGalleryContainerHTML.appendChild(errorText);
		} else {	
			this.preloadImages();
			this.displayThumbnailsHTML();
			this.styleHTML();

			if(gallerynavtoggle) this.oGalleryContainerHTML.appendChild(this.oGalleryNavHTML);
			this.oGalleryContainerHTML.appendChild(this.oGalleryImgGalleryNavHTML);
		}

		this.iThumbNavHeight = this.aGalleryHash[0].movingthumbnail.offsetHeight;
		this.oGalleryMotionContainerHTML.style.height = this.iThumbNavHeight + 'px';
		this.oGalleryMovingGalleryHTML.style.height = this.iThumbNavHeight + 'px';
		
		//MOVES SLIDER TO LAST PAGE ON LOAD
		this.move("left",6);
	},
	preloadImages: function() {
		for(i=0;i<this.aGalleryHash.length;i++) {
			if(this.aGalleryHash[i].length > 0 && this.aGalleryHash[i].thumbnail) {
				this.oThumbImgs[i] = new Image();
				this.oThumbImgs[i].src = this.aGalleryHash[i].thumbnail;
			}
		}
	},
	styleHTML: function() {
		this.oGalleryContainerHTML.style.width = this.iGalleryWidth + 'px';

		this.oGalleryRuleHTML.style.width = this.iGalleryWidth + 'px';
		if(this.sRuleColor) {
			this.oGalleryRuleHTML.style.borderTop = '1px solid ' + this.sRuleColor;
		}
	
		this.oGalleryPageNavHTML.style.width = this.iGalleryWidth + 'px';
		this.oGalleryPageNavHTML.style.textAlign = 'center';
		this.oGalleryPageNavHTML.style.margin = '0 0 10px 0';
	
		this.oGalleryMotionContainerHTML.style.width = this.iThumbNavWidth + 'px';
		this.oGalleryMotionContainerHTML.style.height = this.iThumbNavHeight + 'px';
		this.oGalleryMotionContainerHTML.style.margin = '0 ' +  (this.iGalleryWidth-this.iThumbNavWidth)/2 + 'px'; 
		this.oGalleryMotionContainerHTML.style.padding = '0';
		this.oGalleryMotionContainerHTML.style.overflow = 'hidden';
		this.oGalleryMotionContainerHTML.style.position = 'relative';
	
		this.oGalleryMovingGalleryHTML.style.width = this.iThumbNavWidth + 'px';
		this.oGalleryMovingGalleryHTML.style.height = this.iThumbNavHeight + 'px';
		this.oGalleryMovingGalleryHTML.style.position = 'relative';	
	},
	displayPageNavHTML: function() {
		var pagenavonimg = oImg.cloneNode(true);
		pagenavonimg.setAttribute('width',this.iOnOffImgWidth);
		pagenavonimg.setAttribute('height',this.iOnOffImgHeight);
		pagenavonimg.setAttribute('border','0');
		pagenavonimg.style.margin = '2px 4px 0pt'; // '0 2px'; // nat
	
		while(this.oGalleryPageNavHTML.hasChildNodes()) { this.oGalleryPageNavHTML.removeChild(this.oGalleryPageNavHTML.firstChild); }
	
		for(i=0;i<this.iPages;i++) {
				var pagenavoffa = oA.cloneNode(true);
				var pagenavoffimg = pagenavonimg.cloneNode(true);
		
				pagenavoffa.setAttribute('id',this.sGalleryContainer+'pagenav_'+(this.iThumbsAcross*i));				
				pagenavoffa.setAttribute('href','#');
				pagenavoffimg.setAttribute('src',this.sOffImg);
	
				pagenavoffa.appendChild(pagenavoffimg);
				this.oGalleryPageNavHTML.appendChild(pagenavoffa);

				var myObj = this;
				addEventToObject(pagenavoffa,'onclick',function(ev){myObj.processMovingGalleryNavItem(myObj,ev);});

		}
	
	return true;	
	},
	displayPrevNextNavHTML: function() {
		this.oGalleryNavHTML.setAttribute('id',this.sGalleryContainer+'gallerynav');

		this.oGalleryNavPrevHTML.setAttribute('href','#');
		this.oGalleryNavNextHTML.setAttribute('href','#');
		this.oGalleryNavPrevHTML.setAttribute('id',this.sGalleryContainer+'prevgallerynav');
		this.oGalleryNavNextHTML.setAttribute('id',this.sGalleryContainer+'nextgallerynav');

		this.oGalleryNavPrevImgHTML.setAttribute('src',this.sPrevArrow);
		this.oGalleryNavNextImgHTML.setAttribute('src',this.sNextArrow);
	
		this.oGalleryNavPrevImgHTML.setAttribute('width',this.iPrevArrowWidth);
		this.oGalleryNavNextImgHTML.setAttribute('width',this.iNextArrowWidth);
		this.oGalleryNavPrevImgHTML.setAttribute('height',this.iPrevArrowHeight);
		this.oGalleryNavNextImgHTML.setAttribute('height',this.iNextArrowHeight);
		this.oGalleryNavPrevImgHTML.setAttribute('border','0');
		this.oGalleryNavNextImgHTML.setAttribute('border','0');

		this.oGalleryNavPrevImgHTML.setAttribute('alt','Previous');
		this.oGalleryNavNextImgHTML.setAttribute('alt','Next');
		
		this.oGalleryNavPrevHTML.appendChild(this.oGalleryNavPrevImgHTML);
		this.oGalleryNavNextHTML.appendChild(this.oGalleryNavNextImgHTML);
		
		this.oGalleryNavHTML.appendChild(this.oGalleryNavPrevHTML);
		this.oGalleryNavHTML.appendChild(this.oGalleryNavNextHTML);
	
		this.oGalleryNavHTML.style.width = this.iGalleryWidth + 'px';
		this.oGalleryNavHTML.style.position = 'relative';

		this.oGalleryNavPrevHTML.style.position = 'absolute';
		this.oGalleryNavNextHTML.style.position = 'absolute';

		if(this.oGalleryXML.getElementsByTagName('gallerypagenav')[0]) {
			this.oGalleryNavPrevHTML.style.top = (((this.iThumbNavHeight-parseInt(this.iPrevArrowHeight))/2)+parseInt(this.iOnOffImgHeight)+((this.bThumbNamesToggle) ? 0 : 0)) + 'px';
			this.oGalleryNavNextHTML.style.top = (((this.iThumbNavHeight-parseInt(this.iNextArrowHeight))/2)+parseInt(this.iOnOffImgHeight)+((this.bThumbNamesToggle) ? 0 : 0)) + 'px';
		} else {

			this.oGalleryNavPrevHTML.style.top = (((this.iThumbNavHeight-parseInt(this.iPrevArrowHeight))/2)-parseInt(this.iPrevArrowHeight)) + 'px';
			this.oGalleryNavNextHTML.style.top = (((this.iThumbNavHeight-parseInt(this.iNextArrowHeight))/2)-parseInt(this.iNextArrowHeight)) + 'px';
		}

		this.oGalleryNavPrevHTML.style.left = (((this.iGalleryWidth-this.iThumbNavWidth)/2)-(parseInt(this.iPrevArrowWidth)+10)) + 'px';
		this.oGalleryNavNextHTML.style.right = (((this.iGalleryWidth-this.iThumbNavWidth)/2)-(parseInt(this.iNextArrowWidth)+10)) + 'px'; 
		
		this.oGalleryNavPrevHTML.style.zIndex = 100;
		this.oGalleryNavNextHTML.style.zIndex = 100;

		var myObj = this;
		
addEventToObject(this.oGalleryNavPrevHTML,'onclick',function(ev){myObj.processMovingGalleryNavItem(myObj,ev);});
		addEventToObject(this.oGalleryNavNextHTML,'onclick',function(ev){myObj.processMovingGalleryNavItem(myObj,ev);});

		return true;
	},
	removeExtraThumbnails: function() {
		var childrenLength = this.oGalleryMovingGalleryHTML.childNodes.length;
		for(var i=0;i<childrenLength;i++) {
			if((i < this.iCurrentBeginningThumb) || (i >= (this.iCurrentBeginningThumb+this.iThumbsAcross))) {
				var childToRemove = $(this.sGalleryContainer+'imagenav_'+i) || $(this.aGalleryHash[i].id);
				if(childToRemove) {
					this.oGalleryMovingGalleryHTML.removeChild(childToRemove);
					this.aGalleryHash[i].isdisplayed = false;
				}
			}
		}
	},
	displayMovingThumbnailsHTML: function(direction) {
		this.removeExtraThumbnails();
		var endingThumbnail = (this.iThumbNum+this.iThumbsAcross);
		var i = this.iThumbsAcross;
		var j = this.iThumbsAcross;
		for(this.iThumbNum;this.iThumbNum<endingThumbnail;this.iThumbNum++) {
			
			var thumbnailLeft;

			if(direction === 'right') {
				thumbnailLeft = (-(this.iThumbWidth+(this.iThumbPadding*2))*i);
				i--;
			}
			else if(direction === 'left') {
				thumbnailLeft = ((this.iThumbWidth+(this.iThumbPadding*2))*j);
				j++;
			}
			else {
				thumbnailLeft = (this.iThumbNum*(this.iThumbWidth+(this.iThumbPadding*2)));
			}

			var thumbnail = this.aGalleryHash[this.iThumbNum].movingthumbnail;

			thumbnail.style.left = thumbnailLeft + 'px';
			this.aGalleryHash[this.iThumbNum].movingthumbnailleft = thumbnailLeft;

			this.oGalleryMovingGalleryHTML.appendChild(this.aGalleryHash[this.iThumbNum].movingthumbnail);
			this.aGalleryHash[this.iThumbNum].isdisplayed = true;
		
		}

		return true;
	
	},
	displayThumbnailsHTML: function() {
		for(this.iThumbNum;this.iThumbNum<this.aGalleryHash.length;this.iThumbNum++) {
			var galleryimagedivHTML = oDiv.cloneNode(true);
			var galleryimageaHTML = oA.cloneNode(true);
			var galleryimagetitleaHTML = new HTMLObject(oA.cloneNode(true));
			var galleryimageimgHTML = oImg.cloneNode(true);
			var galleryimagespanHTML = oSpan.cloneNode(true);
			var galleryimagelearnmoreimgHTML = oImg.cloneNode(true);
			var galleryimagebuynowimgHTML = oImg.cloneNode(true);
			var galleryimagelearnmoreaHTML = oA.cloneNode(true);
			var galleryimagebuynowaHTML = oA.cloneNode(true);
			var galleryimagelearnmorespanHTML = oSpan.cloneNode(true);
			var galleryimagebuynowspanHTML = oSpan.cloneNode(true);
		
			var myMovieObj = this.oMovieSelf;

			if(this.aGalleryHash[this.iThumbNum].id != '') {
				galleryimagedivHTML.setAttribute('id',this.aGalleryHash[this.iThumbNum].id);
			} else {
				galleryimagedivHTML.setAttribute('id',this.sGalleryContainer+'imagenav_'+this.iThumbNum);
			}
			if(this.aGalleryHash[this.iThumbNum].classstr != '') {
				galleryimagedivHTML.className = this.aGalleryHash[this.iThumbNum].classstr;
			}
			galleryimagedivHTML.style.position = 'absolute';
			galleryimagedivHTML.style.width = (this.iThumbWidth+(this.iThumbPadding*2)) + 'px';
			galleryimagedivHTML.style.height = 'auto';

			galleryimagedivHTML.style.top = '0px';

			var thumbnailLeft;

			thumbnailLeft = (this.iThumbNum*(this.iThumbWidth+(this.iThumbPadding*2)));

			galleryimagedivHTML.style.left = thumbnailLeft + 'px';
			this.aGalleryHash[this.iThumbNum].movingthumbnailleft = thumbnailLeft;
			//this.aMovingThumbLeft.push(thumbnailLeft);

			galleryimagedivHTML.style.padding = '0 ' + this.iThumbPadding + 'px';

			// add link to a thumbnail
			if(this.aGalleryHash[this.iThumbNum].href){
				galleryimageaHTML.setAttribute('href',this.aGalleryHash[this.iThumbNum].href);
			}


			if(this.aGalleryHash[this.iThumbNum].thumbnail) {
				galleryimageimgHTML.setAttribute('src',this.aGalleryHash[this.iThumbNum].thumbnail);
			}

			galleryimageimgHTML.setAttribute('width',this.iThumbWidth);
			galleryimageimgHTML.setAttribute('height',this.iThumbHeight);

			if(this.aGalleryHash[this.iThumbNum].alt) {
				galleryimageimgHTML.setAttribute('alt',this.aGalleryHash[this.iThumbNum].alt);
			}

			galleryimageimgHTML.setAttribute('border','0');

			// display title with a link underneath of each thumbnail
			if(this.bThumbNamesToggle && this.aGalleryHash[this.iThumbNum].name) {
				var childTitle = document.createTextNode(this.aGalleryHash[this.iThumbNum].name);
				if(this.aGalleryHash[this.iThumbNum].href)
				{
					galleryimagetitleaHTML.setAttribute('href',this.aGalleryHash[this.iThumbNum].href);
					galleryimagetitleaHTML.style.color = '#666';
				
				}
				if(galleryimagetitleaHTML.hasClass(this.sTitleClass) == false) galleryimagetitleaHTML.addClass(this.sTitleClass);
				galleryimagetitleaHTML.appendChild(childTitle);
				galleryimagespanHTML.appendChild(galleryimagetitleaHTML);
			
			}
		
			// SPAN that wraps thumb image and title
			galleryimagespanHTML.style.display = 'block';
			galleryimagespanHTML.style.width = this.iThumbWidth + 'px';
			galleryimagespanHTML.style.textAlign = 'center';
			//galleryimagespanHTML.style.margin = '0 ' + thumbnailpadding + 'px';
			galleryimagespanHTML.style.fontSize = this.iThumbFontSize + 'px';
			galleryimagetitleaHTML.style.fontSize = this.iThumbFontSize + 'px';
		
			//if(this.glryimgsX[this.thumbnum].hasChildNodes()) {
			galleryimageaHTML.appendChild(galleryimageimgHTML);
			galleryimagedivHTML.appendChild(galleryimageaHTML);
			galleryimagedivHTML.appendChild(galleryimagespanHTML);
		
			this.oGalleryMovingGalleryHTML.appendChild(galleryimagedivHTML);
			
			this.aGalleryHash[this.iThumbNum].movingthumbnail = galleryimagedivHTML;
			//this.aMovingThumbs.push(galleryimagedivHTML);
		}

		this.iThumbNum = this.iThumbsAcross;
		return true;
	}
};

// SwapAds
GalleryMovie.SwapAds.prototype = {
	sMovieObjName: false,
	aNavSwapImgs: new Array(),
	oNavSwapTimeout: false,
	iLastNavNum: 0,
	oNavSwapAnchor: false,
	oNavSwapImg: false,
	iSwapInterval: 10000,
	
	init: function() {
		var aNavSwapImgSrcs = new Array();
		for(var i=0; i<this.aNavSwapImgs.length; i++) {
			aNavSwapImgSrcs[aNavSwapImgSrcs.length] = this.aNavSwapImgs[i].src;
		}
		preloader(aNavSwapImgSrcs);
		if(!this.oNavSwapAnchor) this.oNavSwapAnchor = $('navmoreswap');
		if(!this.oNavSwapImg) this.oNavSwapImg = this.oNavSwapAnchor.getElementsByTagName('img')[0];
	},
	stopSwap: function () {
		clearTimeout(this.oNavSwapTimeout);
	},
	beginSwap: function() {
		var iRandNum = Math.floor(Math.random() * this.aNavSwapImgs.length);
		if(iRandNum == this.iLastNavNum) {
			if(iRandNum < this.aNavSwapImgs.length-1) {iRandNum++;}
			else {iRandNum = 0;}
		}
		this.oNavSwapAnchor.href = this.aNavSwapImgs[iRandNum].href;
		this.oNavSwapImg.src = this.aNavSwapImgs[iRandNum].src;
		this.oNavSwapImg.alt = this.aNavSwapImgs[iRandNum].alt;
		this.iLastNavNum = iRandNum;
		var self = this;
		this.oNavSwapTimeout = setTimeout(function() {self.beginSwap();},this.iSwapInterval);	
	}
};

function preloader(aImgs) {
	var aPreloadImgs = new Array();
	for(i=0;i<aImgs.length;i++) {
		aPreloadImgs[i] = new Image();
		aPreloadImgs[i].src = aImgs[i];
	}
}