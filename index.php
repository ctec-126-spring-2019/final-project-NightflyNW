<?php include "database.php"; ?>

<?php
	//Get the total questions
	$query="select * from questions";
	//Get Results
	$results = $mysqli->query($query) or die ($mysqli->error.__LINE__);
	$total = $results->num_rows;

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
        <h2>Questions Are Coming</h2>
	        <p>This is a multiple choice quiz to test your knowledge about Rock History</p>
	    <ul>
            <li><strong>Number of Questions: </strong><?php echo $total; ?></ul>
            <li><strong>Type: </strong>Multiple Choice</ul>
            <li><strong>Estimatd Time: </strong><?php echo $total*0.5; ?> minutes</ul>
        </ul>
        <br>
	    <!-- <a href="question2.php?n=1" class="start">Start Quiz</a> -->
        <a href="question.php?n=1" class="btn btn-info" role="button">Start Quiz</a>
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