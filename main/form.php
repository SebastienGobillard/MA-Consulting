
<?php
 
 if(isset($_POST['submit'])){

 $to = 'contact@maconsulting.test';
 
 $prenom = mysql_real_escape_string($_POST['prenom_user']);
 $nom = $_POST['nom_user'];
 $mail = $_POST['mail_user'];
 $msg = $_POST['message_user'];
 $subject = "form contact";
 
 $headers = "From: " .$prenom. "\r\n";
 $headers .= "Reply-To: ".$mail."\r\n";
 $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";

 $msg = " Prenom: " . $prenom . "\r\n Nom: " . $nom . "\r\n Mail: " . $mail . "\r\n Message: " . $msg;

 mail($to, $subject, $message, $headers);

 echo "Message envoyé.";

 }
?>