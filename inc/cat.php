<?php 
$pido = $_GET['pid'];
$pid = substr($pido,0,strlen($pid)-11);
$Server_incRoot = "http://amalgammag.phpfogapp.com/inc/";
require_once($Server_incRoot . 'arrays.inc');
require_once($Server_incRoot . 'functions.inc');
?>

<h1><?php echo getCategory($pid) ?></h1><br/>
<ul class="links">
<?php
	for($i = count($pages)-1; $i >= 0; $i--) {
		include ($Server_incRoot . 'pages/' . $pages[$i] . '.inc');
		if ($cid == $pid) {
			$nodes[] = $pages[$i];
		}
	}
	if (count($nodes) == 0) {
		echo '<p>Sorry, there are currently no articles in this category.</p>';
	}
	for($k = 0; $k < count($nodes); $k++) {
		include ($Server_incRoot . 'pages/' . $nodes[$k] . '.inc');
		echo '<li><a href="#" onclick="loadPage(\''.$nodes[$k].'\'); return false" title="'.$title.'">
				<span class="title">'.$title.' - '.$issues[$issueid].'</span>
				<span class="bottom">&nbsp;</span>
			  </a></li>';
	}
?>
</ul>