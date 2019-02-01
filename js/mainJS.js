$(document).ready(function(){

	var windowResize = false;
	var secondaryBlue = "#4db8ff";
	var buttonBlue = "#1a4182";

/*

//check if element is on screen function
	$.fn.isInViewport = function(){
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};
//first check if intro is on viewport
	if($(".intro.isOnScreen").isInViewport()) {
		$("a.intro").css('background', secondaryBlue);
	}
//change button color when visible on viewport
	$(window).on('resize scroll', function() {
		$(".isOnScreen").each(function() {
			if($(this).isInViewport()) {
				if($(this).hasClass('intro')){
					$("a.intro").css('background', secondaryBlue);
				}
				if($(this).hasClass('process')){
					$("a.process").css('background', secondaryBlue);
				}
				if($(this).hasClass('takeaway')){
					$("a.takeaway").css('background', secondaryBlue);
				}
			}
			else {
				if($(this).hasClass('intro')){
					$("a.intro").css('background', buttonBlue);
				}
				if($(this).hasClass('process')){
					$("a.process").css('background', buttonBlue);
				}
				if($(this).hasClass('takeaway')){
					$("a.takeaway").css('background', buttonBlue);
				}
			}
		});
	});

/*
check viewport function requires jquery to look at hover
otherwise clean css hover will not activate

//on hover changes button color
	$("a.intro").hover(function(){
		$(this).css('background', secondaryBlue);
	}, function(){
		if($(".intro.isOnScreen").isInViewport()) {
			$(this).css('background', secondaryBlue);
		}
		else {
			$(this).css('background', buttonBlue);
		}

	});
//on hover changes button color
	$("a.process").hover(function(){
		$(this).css('background', secondaryBlue);
	}, function(){
		if($(".process.isOnScreen").isInViewport()) {
			$(this).css('background', secondaryBlue);
		}
		else {
			$(this).css('background', buttonBlue);
		}

	});
//on hover changes button color
	$("a.takeaway").hover(function(){
		$(this).css('background', secondaryBlue);
	}, function(){
		if($(".takeaway.isOnScreen").isInViewport()) {
			$(this).css('background', secondaryBlue);
		}
		else {
			$(this).css('background', buttonBlue);
		}

	});	
//scroll to intro section
	$("a.intro").click(function(){
		$("html, body").animate({scrollTop:0}, "2500", "swing");

		return false;
	});
//scroll to process section
	$("a.process").click(function(){
		$("html, body").animate({scrollTop: ($('#process').offset().top-48)}, "2500", "swing");

		return false;
	});
//scroll to takeaway section
	$("a.takeaway").click(function(){
		$("html, body").animate({scrollTop:($('#takeaway').offset().top-48)}, "2500", "swing");

		return false;
	});

*/

//to top scrolling animation
	$("a#toTop").click(function(){
		$("html, body").animate({scrollTop:0}, "2500", "swing");

		return false;
	});


});

