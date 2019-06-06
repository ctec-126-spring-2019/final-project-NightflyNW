<?php include "database.php"; ?>
<?php session_start(); ?>
<?php
	//Create Select Query
	$query="select * from shouts order by time desc limit 100";
  // $shouts = mysqli_query($con,$query);
  $shouts = mysqli_query($mysqli,$query);
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Game of Grones</title>
</head>
<body>

  <!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Game of Grones - Rock Trivia</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <br>
    <br>
    <br>
    <main>
	    <div class="container">
        <h2>You are Done!</h2>
        <p>Congrats! You have completed the test</p>
        <h3>Final score: <?php echo $_SESSION['score']; ?></h3>
        <!-- <a href="question.php?n=1" class="start">Take Test Again</a> -->
        <a href="question.php?n=1" class="btn btn-info" role="button">Take Quiz Again</a>
        <?php session_destroy(); ?>
	    </div>
    </main>
      <!-- Footer -->
      <footer class="py-2 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; 2019 CS Web Design Limited</p>
          <p class="m-0 text-center text-white">The most powerful thing in the world is an idea</p>
        </div>
      </footer>



<!-- jQuery -->
<script src="js/jquery-3.3.1.min.js"></script>
<!-- Bootstrap JavaScript -->
<script src="js/bootstrap.min.js"></script>
</body>
</html>