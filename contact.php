<?php
    $destination= "finiesalarcon@gmail.com";
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $mail = $_POST["mail"];
    $content = "name: " . $name . "\nPhone: " . $phone . "\nMail: " . $mail;
    mail($destination,"Contact", $content);
    echo "Your Message was sent. Thanks!";