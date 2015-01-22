$(document).ready(function(){
	var currentSlide = 0;
	var MAX_SLIDE = 4;
	var MIN_SLIDE = 0;
	
	var interval = function() {
		nextSlide = currentSlide+1;
		if (nextSlide > MAX_SLIDE){ //wrap around
			nextSlide = MIN_SLIDE;
		}
		clearSlide(currentSlide);
		showSlide(nextSlide);
	}
	
	showSlide(currentSlide);
	
	var timer = setInterval(interval, 4000);
	
	
	$('.slideshow ul li').hover(
		function()
		{
			$(this).addClass('hover');
		}, 	
		function()
		{
			if ($(this).hasClass('hover'))
			{
				$(this).removeClass('hover');
			}
		}
	);
	
	$('div.arrows img').click(
		function(){
			var arrowDirection = $(this).attr('id');
			var requestedSlide;
			if (arrowDirection =='left'){
				requestedSlide = currentSlide - 1;
			}
			else{
				requestedSlide = currentSlide + 1;
			}
			
			if (requestedSlide < MIN_SLIDE){
				
				requestedSlide = MAX_SLIDE; //WRAP AROUND 
			
			}
			else if (requestedSlide > MAX_SLIDE ){
				requestedSlide = MIN_SLIDE; //WRAP AROUND
			}
			clearSlide(currentSlide);
			showSlide(requestedSlide);
			clearInterval(timer);
			timer = setInterval(interval, 4000);
			
		}
	);
		
	
	
		
	$('.slideshow ul li').click(
		function(){
			var slideRequested = parseInt($(this).attr('class').split(' ')[0]); 
			if (slideRequested != currentSlide){
				clearSlide(currentSlide);
				showSlide(slideRequested);
			}
			clearInterval(timer);
			timer = setInterval(interval, 4000);
		}
	);
	
	function clearSlide(currentSlide){
		$('.slideshow #'+currentSlide).fadeOut();
	}
	function showSlide(slideRequested){
		$('.slideshow #'+slideRequested).animate({left:0, opacity:"show"}, 600);
		currentSlide = slideRequested;
		$('.slideshow ul li.active').removeClass('active');
		$('.slideshow ul li.'+currentSlide).addClass('active');
	}
	

});
