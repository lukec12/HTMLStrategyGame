$.getJSON("Agile-Carousel-master/agile_carousel_data.php", function (data) {
	        $(document).ready(function () {
	            $("#basic_slideshow").agile_carousel({
	                carousel_data: data,
	                carousel_outer_height: 450,
	                carousel_height: 220,
	                slide_height: 400,
	                carousel_outer_width: 900,
	                slide_width: 900,
	                transition_type: "fade",
	                timer: 4000
	            });
	        });
	    });