<?php
$servername = "localhost";
$username = "root";
$password = "769015S";
$dbname = "MovieSuggestionDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch a random movie
$sql = "SELECT * FROM Movies ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(array("error" => "No movie found"));
}

$conn->close();
?>
