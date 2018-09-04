<?php
$headers = 'From: sergeyromanenko@sergeyromanenko.zzz.com.ua' . "\r\n" .
$recepient = "sergeyromanenko911@gmail.com";
$sitename = "портфолио";

$name = trim($_POST["name"]);
$phone = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nПочта: $email \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта- \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers);
