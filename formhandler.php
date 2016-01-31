<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Form Submission</title>
</head>
<body>
<?php
$to       = "shellwe@gmail.com"; // change to your email address
//$to       = $_POST['contact']; // change to your email address
$name     = $_POST['name'];
$email    = $_POST['email'];
$phone    = $_POST['phone'];
$message  = $_POST['message'];
$d        = date('l dS \of F Y h:i:s A');
$sub      = "contact from my site";
$headers  = "From: $name <$email>\n";  
$headers .= "Content-Type: text/plain; charset=iso-8859-1\n";
$mes      = "Name: ".$name."\n";
$mes     .= 'Email: '.$email."\n";
$mes     .= "phone number: ".$phone."\n";
$mes     .= "Message: ".$message."\n";
$mes     .= 'Date & Time: '.$d;


     mail($to, $sub, $mes, $headers);
header('Location: index.html');
?>
</body>
</html>

