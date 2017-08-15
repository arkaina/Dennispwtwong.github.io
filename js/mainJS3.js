$(document).ready(function(){

	var windowResize = false;

	if(window.matchMedia('(max-width: 35.876em)').matches){

		$("ul.nav-list").css("display", "none");

	}


	$("button.menu").click(function(){
	 	

		$("ul.nav-list").toggle();

		// useMenu();

	});

	$(window).resize(function(){

		if(window.matchMedia('(min-width: 35.876em)').matches){

			$("ul.nav-list").css("display", "block");

			
			if(windowResize == false && windowResize != true){

				windowResize = true;

			}


		}
		else{

			if(windowResize == true){

				$("ul.nav-list").css("display", "none");

				windowResize = false;

			}
		}

	});


	// function useMenu(){

	// 	$("ul.nav-list").css("display", "block");

	// 	console.log("itworked");
	// }

});

