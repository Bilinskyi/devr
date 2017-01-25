<?
if($_SERVER["REQUEST_METHOD"] == "POST")
{
 // Функция отправки email
 function send_mail($to, $subject, $message, $headers)
 {

   

  $popup = $_POST["popup"];
  $diagn = $_POST["diagn"];
  $prod = $_POST["prod"];
  
  $problem = $_POST["problem"];
  $model = $_POST["model"];
  $mark = $_POST["mark"];
  $sel = $_POST["sel"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];

  // $utm_source = $_POST["utm_source"];
  // $utm_medium = $_POST["utm_medium"];
  // $utm_campaign = $_POST["utm_campaign"];
  // $utm_term = $_POST["utm_term"];
  // $utm_content = $_POST["utm_content"];



  
  
  
  $to  = "1unitedcrew@gmail.com";  

  if (isset($problem)) {
    $message = "Выбор: $problem<br>Модель: $model<br>Марка: $mark<br>Год: $sel<br>Телефон: $phone";
  } else if (isset($popup)) {
    $message = "Телефон: $phone";
  } else if (isset($email)) {
    $message = "Email: $email";
  } else if (isset($prod)) {
    $message = "Телефон: $phone<br>$prod";
  } else {
    $message = "Телефон: $phone";
  }

  $subject = "Заявка с сайта"; 

  
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $from = "=?UTF-8?B?".base64_encode("1unitedcrew@gmail.com")."?= <1unitedcrew@gmail.com";
  $headers .= "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";

  $result = mail($to, $subject, $message, $headers);
} 

{
    // Отправка email
  send_mail($to, $subject, $message, $headers);      
  echo 'true'; 
}

}
?>