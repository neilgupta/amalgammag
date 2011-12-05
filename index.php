<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<title>Amalgam Magazine</title>
	
	<link rel="stylesheet" type="text/css" href="default.css" />
	<link rel="alternate" type="application/rss+xml" title="RSS feed" href="rss/feed.xml" />
	<link rel="shortcut icon" href="favicon.ico" >

	<script type="text/javascript" src="js/prototype.js"> </script>
	<script type="text/javascript" src="js/scriptaculous.js"> </script>
	<script type="text/javascript" src="js/archivessliderlib.js"> </script>
	<script type="text/javascript" src="js/archivesslider.js"> </script>
	<script type="text/javascript" src="js/global.js"> </script>
	<script type="text/javascript" src="js/navigations.js"> </script>
	<script type="text/javascript" src="js/ajax.js"> </script>
	<script type="text/javascript" src="js/ajax-dynamic-content.js"> </script>
</head>
<body>
</body>
<body onLoad="pollHash()" lang="en">
<div id="header-nav">
		<div id="header-container">
			<ul id="navbar">
			</ul>
			<br class="clear" />
		</div>
</div>

<div id="header">
	<div id="header_inner">
		<div id="amalgamlogo">&nbsp;</div>
		<div id="submitdate">&nbsp;</div>
	</div>
</div>

<div id="archivesslider">
	<div id="ads">
		<noscript><div id="nojs" align="center">Please enable JavaScript to view this page properly.</div></noscript>
	</div>
	<script type="text/javascript" language="JavaScript">
	<!--
		var GAMAds = new GalleryMovie.Movie();
		var GAMSwapAds = new GalleryMovie.SwapAds();
		var GAMGallery = new GalleryMovie.Gallery();
		GAMAds.sObjName = 'GAMAds';
		GAMAds.sNavSwapObjName = GAMSwapAds;
		GAMAds.sMovieGalleryObjName = GAMGallery;
		GAMAds.sXMLFile = 'issues.xml';
		GAMAds.iSwapContainerHeight = 0;
		GAMAds.iSwapContainerPadding = 45;
		GAMAds.sNavContainer = 'ads';
		GAMAds.sNavClass = 'adnav';
		GAMAds.bSetGallery = true;
		GAMGallery.bThumbNamesToggle = true;
		GAMGallery.iGalleryWidth = 1000;
		GAMGallery.sOnImg = 'images/coloreddot.gif',
		GAMGallery.sOffImg = 'images/emptydot.gif',
		GAMGallery.sPrevArrow = 'images/leftarrow.gif',
		GAMGallery.sNextArrow = 'images/rightarrow.gif',
		GAMGallery.iOnOffImgWidth = 7;
		GAMGallery.iOnOffImgHeight = 7;
		GAMGallery.iThumbWidth = 83;
		GAMGallery.iThumbHeight = 63;
		GAMGallery.iThumbFontSize = 11;
		if(browser.isSafari != true) GAMGallery.iGalleryMoveSpeed = 2;
		GAMAds.init();
	//-->
	</script>
	<br/>
</div>

<div id="archivessliderborder">
</div>

<div id="main">
	<div id="secondary">
		<div id="newsletter">
		<?php
		$ipi = getenv("REMOTE_ADDR");
		$httprefi = getenv ("HTTP_REFERER");
		$httpagenti = getenv ("HTTP_USER_AGENT");
		?>
		<script language="JavaScript" type="text/javascript">
		<!--
		var newsletter = document.getElementById('newsletter');
		if (BrowserDetect.browser == "Opera") { newsletter.innerHTML = 
			'<h2>Get the Newsletter\</h2>' +
			'<p>Sign up today for our mailing list and you\'ll receive notifications when new issues are available.\</p>' +
			'<a class="img"> \</a>' +
			'<div id="news_open">' +
				'<form action="inc/subscribe.php" method="post">' +
				'<input type="hidden" name="ip" value="<?php echo $ipi ?>" />' +
				'<input type="hidden" name="httpref" value="<?php echo $httprefi ?>" />' +
				'<input type="hidden" name="httpagent" value="<?php echo $httpagenti ?>" />' +
					'<div class="setting"><label class="field" for="name">Name:\</label><input type="text" name="name" id="name" />\</div>' +
					'<div class="setting"><label class="field" for="email">Email:\</label><input type="text" name="email" id="email" />\</div>' +
					'<div class="setting2"><label class="field" for="general">Choose list(s):\</label><input type="checkbox" id="general" name="general"> General &nbsp;&nbsp;&nbsp; ' +
					'<input type="checkbox" id="staff" name="staff"> Staff\</div>' +
					'<div class="controls">' +
						'<a class="unsubscribe" href="#" onclick="loadPage(\'unsubscribe\'); return false" title="Click here to unsubscribe">Click here to unsubscribe\</a>' +
						'<input class="submit" type="image" src="images/transparent.gif" value="Subscribe" alt="Subscribe" />' +
					'\</div>' +
				'\</form>'
			'\</div>';
		}
		else { newsletter.innerHTML = 
			'<h2>Get the Newsletter\</h2>' +
			'<p>Sign up today for <a href="#" onclick="Effect.toggle(\'news_open\',\'slide\',{duration:.3}); return false" title="Amalgam Magazine Newsletter">our mailing list\</a> and you\'ll receive notifications when new issues are available.\</p>' +
			'<a class="img" href="#" onclick="Effect.toggle(\'news_open\',\'slide\',{duration:.3}); return false" title="Sign up!"> \</a>' +
			'<div id="news_open" style="display: none">' +
				'<form action="inc/subscribe.php" method="post">' +
				'<input type="hidden" name="ip" value="<?php echo $ipi ?>" />' +
				'<input type="hidden" name="httpref" value="<?php echo $httprefi ?>" />' +
				'<input type="hidden" name="httpagent" value="<?php echo $httpagenti ?>" />' +
					'<div class="setting"><label class="field" for="name">Name:\</label><input type="text" name="name" id="name" />\</div>' +
					'<div class="setting"><label class="field" for="email">Email:\</label><input type="text" name="email" id="email" />\</div>' +
					'<div class="setting2"><label class="field" for="general">Choose list(s):\</label><input type="checkbox" id="general" name="general"> General &nbsp;&nbsp;&nbsp; ' +
					'<input type="checkbox" id="staff" name="staff"> Staff\</div>' +
					'<div class="controls">' +
						'<a class="unsubscribe" href="#" onclick="loadPage(\'unsubscribe\'); return false" title="Click here to unsubscribe">Click here to unsubscribe\</a>' +
						'<input class="submit" type="image" src="images/transparent.gif" value="Subscribe" alt="Subscribe" />' +
					'\</div>' +
				'\</form>'
			'\</div>';
		}
		// -->
		</script>
		</div> <!-- END NEWSLETTER -->
		
    	<div id="block">
			<h2>
				Categories
			</h2>
			<div class="links" id="categories">
			</div>
			<h2>
				Special Editions
			</h2>
			<div class="links" id="specialcategories">
			</div>
		</div> <!-- End Block -->
	</div> <!-- End Secondary -->
	<div id="contentwrapper">
		<div id="content">
		</div> <!-- End Content -->
		<div class="clear"></div>
	</div> <!-- End Content Wrapper -->
</div> <!-- End Main -->
<div id="footerborder"> </div>
<div id="footer">
	<a class="up" href="#" onclick="backToTop(); return false" title="Back to top"></a>
	<div id="feed"><a href="rss/feed.xml" title="Amalgam Magazine RSS Feed"></a></div>
	<a href=".">Home</a> / <a href="#" onclick="loadPage('about'); return false">About</a> / <a href="#" onclick="loadPage('submit'); return false">Submit</a> / <a href="#" onclick="loadPage('contact'); return false">Contact</a><br/><br/>
	&copy; 2007 Amalgam Magazine. All rights reserved.<br/><br/>
	All submissions are the copyright of their respective authors. <a href="#" onclick="loadPage('submit'); return false" title="Read Amalgam Magazine's Terms of Use">More information</a>
</div>
<div id="preload1"></div>
<div id="preload2"></div>
</body>
</html>