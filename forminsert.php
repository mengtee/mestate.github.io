<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "property";

$conn = mysqli_connect($server, $username, $password,$dbname);

if(isset($_POST['submit'])){
    if(!empty($_POST['name']) && !empty($_POST['phoneno']) && !empty($_POST['email']) && !empty($_POST['question'])){
        $name = $_POST['name'];
        $phoneno = $_POST['phoneno'];
        $email = $_POST['email'];
        $question = $_POST['question'];

        $query = "insert into inquiries (name, phoneno, email, question) values('$name', '$phoneno','$email','$question')";

        $run = mysqli_query($conn, $query) or die(mysqli_error());

        if($run){
            echo"<script> alert('Form Submitted');</script>";
        }
        else{
            echo"<script> alert('Error! Form not submitted'); </script>";
        }
    }
    else{
        echo"<script> alert ('all fields are required'); </script>";
    }
}
?>