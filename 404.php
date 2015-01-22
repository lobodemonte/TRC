<!DOCTYPE html>
<html>
<head>
	<title>Texas Running Club</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<?php include('config/css.php');	?>
	<?php include('config/setup.php');	?>
	
	<style>
		video{
			width: 320px;
			height: auto;
			margin: 0 auto;
			background-color: black;
		}
		.jumbotron{
			margin-bottom:0;
		}
	</style>
	
</head>
<body>
	<div class='wrap'>
		
		<?php include('template/header.php');?>
		
		<div class='jumbotron body'>
			<h1>404 Oops (Page not Found)</h1>
			<h2>Instead have this video of Greg and Matty P dancing</h2>
			
			<video class="center-block" controls>
				<source src="video/gregmattyp.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</div>
		
		<?php include('template/footer.php');?>
	</div>
</body>
</html>