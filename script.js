$(document).ready(function(){

	var isBlack = false;
	$(window).on('scroll', function(){
		var winHeight = $(this).scrollTop();
		if($(this).scrollTop() > 150 && isBlack == false){
			$("#topBan").css("background-color", "black")
			isBlack = true;
		}
		if($(this).scrollTop() < 150 && isBlack == true){
			$("#topBan").css("background-color", "")
			isBlack = false;
		}
	});

	//Queue for rotating titles
	var titleQueue = [];
	titleQueue.push("#analyst");
	titleQueue.push("#friend");
	titleQueue.push("#developer");
	titleQueue.push("#designer");
	titleQueue.push("#leader");

	//function to execute rotateTiles every 6000 milliseconds
	function rotateTimer(){
		intervalChange = setInterval(rotateTitles, 6000);
	}

	function rotateTitles(){
		//Animate the last item to go right behind picture, to the top, then slide back in
		$(titleQueue[0]).animate({
			right: '-=300'
		}, 500, function(){
			$(this).css('top', 25);
			$(this).animate({
				right: '+=300'
			}, 500);
		});

		//Animate fourth item to drop, and decrease size
		$(titleQueue[1]).animate({
			fontSize: '-=14',
			top: '+=90',
			right: '-=25'
		}, 1000);

		//Animate third item to drop, and decrease size
		$(titleQueue[2]).animate({
			fontSize: '-=40',
			top: '+=135',
			right: '-=25'
		}, 1000, function(){
			$(this).css('color', 'rgb(160,177,203)');
		});

		//Animate 2nd item to drop, increase to largest size, and turn color
		$(titleQueue[3]).animate({
			fontSize: '+=40',
			top: '+=50',
			right: '+=25'
		}, 1000, function(){
			$(this).css('color', 'rgb(255,253,171)');
		});

		//Animate top item to drop and increase font size
		$(titleQueue[4]).animate({
			fontSize: '+=14',
			top: '+=45',
			right: '+=25'
		}, 1000);

		//Push the 0 position item out and add it back to the 4 position at the end
		var out = titleQueue.shift();
		titleQueue.push(out);
	}

	rotateTimer();



	/* code to change a picture as it slides down a page, may still use in the future
	var points = [
		[$("#about").offset().top, "images\\aboutPic.jpg"],
		[$("#resume").offset().top, "images\\bemisPic.jpg"],
		[$("#uwec").offset().top, "images\\college.jpg"],
		[$(".achieveContain").offset().top, "images\\achieve.jpg"],
		[$("#techSkills").offset().top, "images\\skills.jpg"],
		[$("#projects").offset().top, "images\\projects.jpg"],
		[$("#contact").offset().top, "images\\contact.jpg"],
	];
	var currentPic = $("#mePic").attr("src");
	
	$(window).on('scroll', function(){
		var picHeight = ($("#mePic").offset().top);
		foundHeight = false;
		for(i = 0; (foundHeight == false) && (i < points.length); i++){
			if(picHeight > points[i][0] && picHeight < points[i+1][0]){
				if(currentPic != points[i][1]){
					$("#mePic").attr("src", points[i][1]);
					currentPic = points[i][1];
					foundHeight = true;
				}
			}
		}
	}); */
});