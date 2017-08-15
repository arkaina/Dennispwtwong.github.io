$(document).ready(function(){

	var linkListener = $("div.project-link-wrap")

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

	linkListener.click(function(event){

		console.log("something happened before click");

		chooseTarget(this);

		var data = event.target.attr("src");

		$("section.mainbody").load(data);

		history.pushState(data,null,data);

		console.log("something");

		console.log(data);


	});

	function chooseTarget(e){

		if(e.target !== e.currentTarget){

			e.preventDefault();
		}

		e.stopPropagation();

	}

	window.addEventListener("popstate", function(event){

		console.log("popstate fired!");

		updateContect(event.state);


	});

});

