<?php
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $gender = $_POST['gender'];
    $password = $_POST['pwd'];

    $conn = new mysqli('localhost','root','','form_test');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(firstName, lastName, email, number, gender, password)
            values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssiss",$firstName, $lastName, $email, $number, $gender, $password);
        $stmt->execute();
        echo "registration Successfully...";
        $stmt=>close();
        $conn->close();
    }
?>