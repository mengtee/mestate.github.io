<!DOCTYPE html>
<html lang="en">
    <link rel="stylesheet" href="./css/style.css">
    <script defer src="generalscript.js"></script>
    <head><title> MESTATE-About Us</title></head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <body style="background-image: url(./picture/background.png);
            background-position: center;
            background-size: cover;
            align-items: center; " >
        <head>
        
        <header>
            <img style="margin-top:1% ;" class= "logo" src="./picture/goldlogo.svg"  height="100" width="" alt="My company logo">
                <nav class="navigation">
                    <ul class="nav-link">
                        <li><a href="index.html"> Home </a> </li>&nbsp; 
                        <li><a href="aboutus.html"> About us </a> </li> &nbsp; 
                        <li><a href="testimony.html"> Testimonial </a> </li> &nbsp;
                        <li><a href="https://wa.me/60179788286?text=PropertyProject">Contact us</a></li> 
                        &nbsp;
                        &nbsp; 
                        <li><a href="login.html" style="color: black;" > <button style="color: black;">Login</button></a></li> &nbsp;<br> 
                        <img src="./picture/menu.png" alt="menu imange" class="menu">
                    </ul>
                </nav>
            </header>
            
            <div style ="margin-left:15%; margin-bottom:10%">
                    <h1>Appointment </h1>
                    <h2>Let us contact you!</h2>
                    <form action="appointment.php" method="post">
                    <p>Name:</p>
                    <input id="text" type="text" name="name"> 
                    <p>Phone No:</p>
                    <input id="phoneno" type="text" name="phoneno">
                    <p>E-mail address:</p>
                    <input id="email" type="text" name="email"> <br>
                    <p>Prefer date for showroom viewing:</p>
                    <input id="date" type="text" name="date"> <br>
                    <br>
                    <br>
                    <button style="color: white; padding: 1% 3%;
                    font-weight: 300;
                    font-size: 13px;" type="submit" name="submit"> Submit</button>
                    </form>
                    <button id="backbtn" style="color: white; padding: 1% 3%;margin-top:3%;
                    font-weight: 300;
                    font-size: 13px;"> Back</button>
            </div>
            
            </head>

    </body>
<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "property";

$conn = mysqli_connect($server, $username, $password,$dbname);

if(isset($_POST['submit'])){
    if(!empty($_POST['name']) && !empty($_POST['phoneno']) && !empty($_POST['email']) && !empty($_POST['date'])){
        $name = $_POST['name'];
        $phoneno = $_POST['phoneno'];
        $email = $_POST['email'];
        $date = $_POST['date'];

        $query = "insert into appointment (name, phoneno, email, date) values('$name', '$phoneno','$email','$date')";

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