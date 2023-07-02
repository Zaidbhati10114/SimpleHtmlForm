<?php
// Establish a connection to the MySQL database
$servername = "localhost"; // Replace with your database server name
$username = "root"; // Replace with your database username
$password = "password"; // Replace with your database password
$dbname = "database"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the email ID from the query string or form submission
$email = $_GET["email"]; // Assuming you're passing the email ID through the query string

// Fetch the health report file path from the database based on the email ID
$sql = "SELECT health_report FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $filepath = $row["health_report"];

    // Check if the file exists
    if (file_exists($filepath)) {
        // Set the appropriate headers to force download the file
        header("Content-Type: application/pdf");
        header("Content-Disposition: attachment; filename=\"" . basename($filepath) . "\"");
        header("Content-Length: " . filesize($filepath));

        // Read the file and output it to the browser
        readfile($filepath);
    } else {
        echo "File not found.";
    }
} else {
    echo "User not found.";
}

// Close the database connection
$conn->close();
?>
