$(document).ready(function(){

	var windowResize = false;

	$("a#toTop").click(function(){
		$("html, body").animate({scrollTop:0}, "2500", "swing");

		return false;
	});

});

