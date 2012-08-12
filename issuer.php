<?php $pid = $_GET['pid'];
require_once('inc/functions.inc');
require_once('inc/arrays.inc');
$Server_incRoot = "http://amalgammag.phpfogapp.com/inc/";
?>
<h1><?php echo getIssue($pid) ?> - <?php echo $issues[$pid] ?></h1><br/>
      <ul class="links">
<?php
	for($i = count($pages)-1; $i >= 0; $i--) {
		include ($Server_incRoot . 'pages/' . $pages[$i] . '.inc');
		if ($issueid == $pid) {
			$nodes[] = $pages[$i];
		}
	}
	for ($k = 0; $k < count($nodes); $k++) {
		include ($Server_incRoot . 'pages/' . $nodes[$k] . '.inc');
		if ($cid == c1) {
			$c1n[] = $nodes[$k];
		}
		elseif ($cid == c3) {
			$c3n[] = $nodes[$k];
		}
		elseif ($cid == c4) {
			$c4n[] = $nodes[$k];
		}
		elseif ($cid == c5) {
			$c5n[] = $nodes[$k];
		}
		elseif ($cid == c7) {
			$c7n[] = $nodes[$k];
		}
		elseif ($cid == c8) {
			$c8n[] = $nodes[$k];
		}
		elseif ($cid == c9) {
			$c9n[] = $nodes[$k];
		}
		elseif ($cid == c11) {
			$c11n[] = $nodes[$k];
		}
		elseif ($cid == c12) {
			$c12n[] = $nodes[$k];
		}
		elseif ($cid == c13) {
			$c13n[] = $nodes[$k];
		}
		elseif ($cid == c15) {
			$c15n[] = $nodes[$k];
		}
		elseif ($cid == c19) {
			$c19n[] = $nodes[$k];
		}
		elseif ($cid == c20) {
			$c20n[] = $nodes[$k];
		}
		elseif ($cid == c21) {
			$c21n[] = $nodes[$k];
		}
		elseif ($cid == c22) {
			$c22n[] = $nodes[$k];
		}
	}
	if (count($c19n) != 0) {
		echo '<strong>'.getCategory(c19).':</strong><br/>';
		for ($a = 0; $a < count($c19n); $a++) {
			include ($Server_incRoot . 'pages/' . $c19n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c19n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c1n) != 0) {
		echo '<strong>'.getCategory(c1).':</strong><br/>';
		for ($a = 0; $a < count($c1n); $a++) {
			include ($Server_incRoot . 'pages/' . $c1n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c1n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c3n) != 0) {
		echo '<strong>'.getCategory(c3).':</strong><br/>';
		for ($a = 0; $a < count($c3n); $a++) {
			include ($Server_incRoot . 'pages/' . $c3n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c3n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c4n) != 0) {
		echo '<strong>'.getCategory(c4).':</strong><br/>';
		for ($a = 0; $a < count($c4n); $a++) {
			include ($Server_incRoot . 'pages/' . $c4n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c4n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c5n) != 0) {
		echo '<strong>'.getCategory(c5).':</strong><br/>';
		for ($a = 0; $a < count($c5n); $a++) {
			include ($Server_incRoot . 'pages/' . $c5n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c5n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c15n) != 0) {
		echo '<strong>'.getCategory(c15).':</strong><br/>';
		for ($a = 0; $a < count($c15n); $a++) {
			include ($Server_incRoot . 'pages/' . $c15n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c15n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c8n) != 0) {
		echo '<strong>'.getCategory(c8).':</strong><br/>';
		for ($a = 0; $a < count($c8n); $a++) {
			include ($Server_incRoot . 'pages/' . $c8n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c8n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c7n) != 0) {
		echo '<strong>'.getCategory(c7).':</strong><br/>';
		for ($a = 0; $a < count($c7n); $a++) {
			include ($Server_incRoot . 'pages/' . $c7n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c7n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c9n) != 0) {
		echo '<strong>'.getCategory(c9).':</strong><br/>';
		for ($a = 0; $a < count($c9n); $a++) {
			include ($Server_incRoot . 'pages/' . $c9n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c9n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c21n) != 0) {
		echo '<strong>'.getCategory(c21).':</strong><br/>';
		for ($a = 0; $a < count($c21n); $a++) {
			include ($Server_incRoot . 'pages/' . $c21n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c21n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c12n) != 0) {
		echo '<strong>'.getCategory(c12).':</strong><br/>';
		for ($a = 0; $a < count($c12n); $a++) {
			include ($Server_incRoot . 'pages/' . $c12n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c12n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c13n) != 0) {
		echo '<strong>'.getCategory(c13).':</strong><br/>';
		for ($a = 0; $a < count($c13n); $a++) {
			include ($Server_incRoot . 'pages/' . $c13n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c13n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c14n) != 0) {
		echo '<strong>'.getCategory(c14).':</strong><br/>';
		for ($a = 0; $a < count($c14n); $a++) {
			include ($Server_incRoot . 'pages/' . $c14n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c14n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c11n) != 0) {
		echo '<strong>'.getCategory(c11).':</strong><br/>';
		for ($a = 0; $a < count($c11n); $a++) {
			include ($Server_incRoot . 'pages/' . $c11n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c11n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c20n) != 0) {
		echo '<strong>'.getCategory(c20).':</strong><br/>';
		for ($a = 0; $a < count($c20n); $a++) {
			include ($Server_incRoot . 'pages/' . $c20n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c20n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
	if (count($c22n) != 0) {
		echo '<strong>'.getCategory(c22).':</strong><br/>';
		for ($a = 0; $a < count($c22n); $a++) {
			include ($Server_incRoot . 'pages/' . $c22n[$a] . '.inc');
			echo '<li><a href="#" onclick="loadPage(\''.$c22n[$a].'\'); return false" title="'.$title.'">
					<span class="title">'.$title.'</span>
					<span class="bottom">&nbsp;</span>
				  </a></li>';
		}
	}
?>
</ul>