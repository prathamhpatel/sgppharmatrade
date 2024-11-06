<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pharma";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if form fields are set
    if (isset($_POST['company_name']) && isset($_POST['email']) && isset($_POST['password'])) {
        $company_name = $_POST['company_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Prepare SQL query to insert data into the database
        $sql = "INSERT INTO users (company_name, email, password) VALUES ('$company_name', '$email', '$password')";

        // Execute the query and check for success
        if ($conn->query($sql) === TRUE) {
            echo "Registration successful!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Form data is missing!";
    }
} else {
    echo "Please submit the form.";
}

$conn->close();
?>
