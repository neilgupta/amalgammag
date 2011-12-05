/***********************************************
* Dynamic Ajax Content- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

function loadobjs(){
	for (i=0; i<arguments.length; i++) {
		var file=arguments[i];
		var fileref="";
		if (file.indexOf(".js")!=-1) { //If object is a js file
			fileref=document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src", file);
		}
		else if (file.indexOf(".css")!=-1) { //If object is a css file
			fileref=document.createElement("link");
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			fileref.setAttribute("href", file);
		}
		if (fileref!="") {
			document.getElementsByTagName("head").item(0).appendChild(fileref);
		}
	}
}