<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phoneNumber'];
$portfolio = $_POST['portfolioLink'];
$skill_level = $_POST['skillLevel']; 
$challenge_preferences = implode(", ", $_POST['challengePreferences']); 

$sql = "INSERT INTO users (name, email, phone, portfolio, skillLevel, challengePreferences)
VALUES ('$name', '$email', '$phone', '$portfolio', '$skill_level', '$challenge_preferences')";

if ($conn->query($sql) === TRUE) {
    // Retrieve the inserted data
    $sql = "SELECT * FROM users ORDER BY id DESC LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Display the data on the fourth step's form
        echo "<h3>Review and Confirm</h3>";
        echo "<p>Full Name: " . $row['name'] . "</p>";
        echo "<p>Email Address: " . $row['email'] . "</p>";
        echo "<p>Phone Number: " . $row['phone'] . "</p>";
        echo "<p>Portfolio/Github Link: " . $row['portfolio'] . "</p>";
        echo "<p>Skill Level: " . $row['skillLevel'] . "</p>";
        echo "<p>Challenge Preferences: " . $row['challengePreferences'] . "</p>";
    } else {
        echo "Error retrieving data from the database.";
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>