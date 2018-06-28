<?php
$email = "fantasiagreekband@gmail.com";

$client = $_POST["name"];
$clientemail = $_POST["email"];

$subjectclient = "Automated reply";
$messageclient = "We have received your message and will get back to you as soon as we can.";

$subject = "Contact Alert: ".$client;
$message = $_POST["comment"];

$headers = "From:".$email;

#Email to client - Email to me
if(mail($clientemail, $subjectclient, $messageclient, $headers) && mail($email, $subject, $message, $headers)) {
  echo "<script type='text/javascript'>alert('Message successfully sent!');</script>";
} else {
  echo "<script type='text/javascript'>alert('Message delivery failed...');</script>";
}
?>
