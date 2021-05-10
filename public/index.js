window.onload = function() {
    //set the loading screen for a few seconds - then route to home page
    //TODO make index.html a loading screen
    
    setTimeout(function(){ 
      var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
        "./Images/back1.jpg",
        "./Images/back2.jpg",
        "./Images/background.png",
        "./Images/background1.png",
        "./Images/busyquizzy.png",
        "./Images/codersplatform.png",
        "./Images/fresh.jpeg",
        "./Images/junior.jpeg",
        "./Images/lax.jpeg",
        "./Images/laxback.jpg",
        "./Images/liam1.png",
        "./Images/liam2.JPG",
        "./Images/livyliam.JPG",
        "./Images/loading.gif",
        "./Images/pride.jpg",
        "./Images/quirky.jpeg",
        "./Images/resume.jpeg",
        "./Images/senior.jpeg",
        "./Images/shayna.jpeg",
        "./Images/soph.jpeg",
        "./Images/stogie.jpeg",
        "./Images/textback.JPG",
        "./Images/wyattmaddie.jpeg",
				"https://www.youtube.com/embed/wae5ZGp-v3w",
				"https://www.youtube.com/embed/npn1Jncglu8",
				"https://www.youtube.com/embed/vc_nom7fSYc",
        "https://www.youtube.com/embed/olz4c-x_jvc"
			)
      window.location.href = "./HomePage/home.html";
      }, 2500);
  
  }