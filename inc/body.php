<?php 
$pid = $_GET['pid'];
$pid = substr($pid,0,strlen($pid)-11);
$Server_incRoot = "http://www.alankar.net/amalgammag/inc/";
require_once($Server_incRoot . 'functions.inc');
require_once($Server_incRoot . 'arrays.inc');
require_once($Server_incRoot . 'pages/' . $pid . '.inc');
?>
<h1><?php echo $title ?></h1><br/>
<p>By <?php echo $name ?> in <a href="#" onclick="loadPage('<?php echo $cid ?>'); return false"><?php echo getCategory($cid) ?></a> - <a href="#" onclick="loadPage('<?php echo $issueid ?>'); return false"><?php echo $issues[$issueid] ?></a></p>
<p><?php echo $body ?></p>

<?php if ($bio != '') { ?>
      <p class="quote">
		<?php echo $bio ?>
        <span class="bottom">&nbsp;</span>
      </p>
<?php } ?>
<br/>