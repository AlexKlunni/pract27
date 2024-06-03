<?php
session_start();
$user_id = $_SESSION["user_id"] ?? false;
require "vendor/autoload.php";
 $db= new Photos\DB();
 $data = $db->get_all_photos();
?>
<!doctype html>
<html lang="en">
<head>
    <meta name="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Практ24-25-26</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php include("header.php"); ?>
<h1>Галерея</h1>
<div id="grid">
    <?php foreach ($data as $photo) : ?>
    <?= (new Photos\photo($photo["id"], $photo["Image"], $photo["Text"]))->get_html() ?>
    <?php endforeach;?>
</div>

 <?php include("add_form.php"); ?>

<div id="popup_photo">
    <img src="" alt="">
</div>

<script src="script.js"></script>
</body>
</html>