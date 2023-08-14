<?php

$host = "localhost";
$dbname = "speech_to_text";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["text"])) {
    $text = $_POST["text"];
    $time = date("H:i:s"); 

  
    $sql = "INSERT INTO text (time, text) VALUES ('$time', '$text')";

    if ($conn->query($sql) === TRUE) {
        echo "Data saved successfully.";
    } else {
        die("Query failed: " . $conn->error);
    }
}

$conn->close();
?>
