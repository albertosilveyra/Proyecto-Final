<?php
// Get the email from the POST request
$email = $_POST['email'];

// Connect to the database (replace 'your_host', 'your_username', 'your_password', and 'your_database' with your actual database credentials)
$host = 'localhost';
$username = 'id19935081_alberto';
$password = 'Themaine10!';
$database = 'id19935081_escuela';

// Create a new MySQLi instance
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
  die('Database connection error: ' . $conn->connect_error);
}

// Prepare and execute the SQL query to insert the email into the database (replace 'subscribers' with your table name)
$stmt = $conn->prepare("INSERT INTO Proyecto (Correo) VALUES ($email)");
$stmt->bind_param("s", $email);

if ($stmt->execute()) {
  // Return a success response
  echo 'Email saved successfully.';
} else {
  // Return an error response
  echo 'Error: ' . $stmt->error;
}

// Close the statement and database connection
$stmt->close();
$conn->close();
?>
