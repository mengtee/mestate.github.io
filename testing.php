<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "property";

$conn = mysqli_connect($server, $username, $password,$dbname);

if(isset($_POST['submit'])){
    if(!empty($_POST['icname']) && !empty($_POST['nric']) && !empty($_POST['phoneno']) && !empty($_POST['email']) && !empty($_POST['password1']) && !empty($_POST['password2'])){
        $icname = $_POST['icname'];
        $nric = $_POST['nric'];
        $phoneno = $_POST['phoneno'];
        $email = $_POST['email'];
        $password1 = $_POST['password1'];
        $password2 = $_POST['password2'];

        $query = "insert into registry (icname,nric, phoneno, email, password1, password2) values('$icname','$nric', '$phoneno','$email','$password1','$password2')";

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
document.getElementById("form").submit();
?>


