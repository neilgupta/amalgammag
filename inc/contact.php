<h1>Contact Us</h1><br/>
<p>Send your comments, concerns, or suggestions to the Amalgam Staff to help improve the Amalgam Magazine.</p><br/>

<form method="post" action="inc/sendemail.php">

<!-- DO NOT change ANY of the php sections -->
<?php
$ipi = getenv("REMOTE_ADDR");
$httprefi = getenv ("HTTP_REFERER");
$httpagenti = getenv ("HTTP_USER_AGENT");
?>

<input type="hidden" name="ip" value="<?php echo $ipi ?>" />
<input type="hidden" name="httpref" value="<?php echo $httprefi ?>" />
<input type="hidden" name="httpagent" value="<?php echo $httpagenti ?>" />


Your Name: <br />
<input type="text" name="visitor" size="35" />
<br /><br/>
Your Email:<br />
<input type="text" name="visitormail" size="35" />
<br /><br/>
Attention:<br />
<select name="attn" size="1">
<option value=" Editors ">Editors </option> 
<option value=" General Support ">General Support </option> 
<option value=" Webmaster ">Webmaster </option> 
</select>
<br /><br />
Message:
<br />
<textarea name="notes" rows="4" cols="40"></textarea>
<br /><br/>
<input type="submit" value="Send Mail" />
<br />
</form>