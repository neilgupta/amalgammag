<?php
$ip = $_POST['ip'];
$httpref = $_POST['httpref'];
$httpagent = $_POST['httpagent'];
$name = $_POST['name'];
$email = $_POST['email'];
$general = $_POST['general'];
$staff = $_POST['staff'];

if (!empty($name) && !empty($email)) {

$myemail = "mailinglist@amalgammag.com"; 
$subject = "New Amalgam Mailing List Subscription";

$todayis = date("l, F j, Y, g:i a") ;

$message = "
Name: $name \n
Email: $email \n
General? $general \n
Staff? $staff \n
\n
$todayis [EST] \n
Additional Info : IP = $ip \n
Browser Info: $httpagent \n
Referral : $httpref \n
";

$from = "From: $email\r\n";

mail($myemail, $subject, $message, $from);

$subject2 = "Welcome to the Amalgam Mailing List";

$message2 = "Thank you for joining the Amalgam Mailing List. You have signed up with the following information: \n
\n
Name: $name \n
Email: $email \n
\n
If you did not sign up for this mailing list, please contact mailinglist@amalgammag.com and report the issue. \n
If you wish to be removed from this mailing list for any reason, please reply to this email and mention that you would like to unsubscribe. If you are signed up for both mailing lists, please let us know which of the lists you would like to be removed from. \n
\n
Thanks, \n
The Amalgam Magazine Editors \n
";

$from2 = "From: mailinglist@amalgammag.com\r\n";

mail($email, $subject2, $message2, $from2);
?>
<h1>Thank you</h1><br/>
<p>Thank you for joining the Amalgam Mailing List. You will now be redirected back to the last page you visited. Thanks!</p>
<meta http-equiv='refresh' content='2;URL=javascript:history.go(-1)'>
<?php
}
else {
?>
<h1>Error</h1><br/>
<p>Sorry, there was an error in your form. Please fill in the required fields.</p>
<meta http-equiv='refresh' content='2;URL=javascript:history.go(-1)'>
<?php } ?>