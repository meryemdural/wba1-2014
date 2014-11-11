<html>
<div id="web">
	<head>
	<title>Fuchsy Entertainment</title>
		
		<link rel="stylesheet" href="css/Style.css">
	</head>
	
			<header>Fuchsy Entertainment</header>
			<body id="body" background="pics/bg.png">
				
				<div>
					
					<div id="navigation">
						<ul>
							<li><a href="index.php"><img src="pics/buttons/home.png"/></a></li>
							<li><a href="sites/news.html"><img src="pics/buttons/news.png"/></a></li>
							<li><a href="sites/games.html"><img src="pics/buttons/games.png"/></a></li>
							<li><a href="sites/media.html"><img src="pics/buttons/media.png"/></a></li>
							<li><a href="sites/forum.html"><img src="pics/buttons/forum.png"/></a></li>
							<li><a href="sites/impressum.html"><img src="pics/buttons/aboutus.png"/></a></li>							
						</ul>
						
					</div>
					
					
					<div id="Slideshow">
						<script type="text/javascript">

							var slideimages = new Array()
							slideimages[0] = new Image()
							slideimages[0].src = "pics/kadse4.jpg"
							slideimages[1] = new Image()
							slideimages[1].src = "pics/kadse5.jpg"
							slideimages[2] = new Image()
							slideimages[2].src = "pics/kadse6.jpg"
							
							</script>
							<a href="javascript:slidelink()"><img src="pics/kadse1.jpg" id="slide"/></a>
							
							<script type="text/javascript">
							
							var step = 0
							var whichimage = 0
							
							function slider(){
							 if (!document.images)
							  return
							 document.getElementById('slide').src = slideimages[step].src
							 whichimage = step
							 if (step<2)
							  step++
							 else
							  step=0
							 setTimeout("slider()",3500)
							}
							
							function slidelink(){
							 if (whichimage == 0)
							  window.location = "link1.htm"
							 else if (whichimage == 1)
							  window.location = "link2.htm"
							 else if (whichimage == 2)
							  window.location = "link3.htm"
							}
							
							slider()
							
						</script>




						</div>
						
					<div id="news">
						<h3>Aktuelle News</h3><br /><br />
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum...
						<br /><a href="sites/news.html">Weiterlesen</a><br /><br /><br />
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum...
						<br /><a href="sites/news.html">Weiterlesen</a><br /><br /><br />
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum...
						<br /><a href="sites/news.html">Weiterlesen</a><br /><br /><br />
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum...
						<br /><a href="sites/news.html">Weiterlesen</a><br /><br /><br />
						</p>
					</div>
					
					<div id="allgames">
						<div id="games">
								<ul class="tabs">
								        <li>
								          <input type="radio" checked name="tabs" id="tab1">
								          <label for="tab1">Game 1</label>
								          <div id="tab-cont1" class="tab-content animated fadeIn">
								          	<a href="sites/games.html"><img src="pics/game1.jpg"width="570" height="400"/></a>
								          </div>
								        </li>
								        <li>
								          <input type="radio" name="tabs" id="tab2">
								          <label for="tab2">Game 2</label>
								          <div id="tab-cont2" class="tab-content animated fadeIn">
								            und hier im Zweiten
								          </div>
								        </li>
								        <li>
								          <input type="radio" name="tabs" id="tab3">
								          <label for="tab3">Game 3</label>
								          <div id="tab-cont3" class="tab-content animated fadeIn">
								            und im letzten!
								          </div>
								        </li>
								</ul>
						</div>
						
					</div>
				</div>
			</body>
			
		<footer>
			<div></div>	
			
			
		</footer>
</div>
</html>