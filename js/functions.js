console.log("Hello! This works.");

//Start doc, init slider
jQuery(document).ready(function($) {
	$('#container').imagesLoaded()
		.always( function( instance ) {
		  $('.my-slider').unslider({
		    dots: true,
		    arrows: false,
		    fluid: true,
		    infinite: true,
		   }).fadeIn();
	});

	$("#write").typed({
        strings: ["write.", "watch.", "shoot.", "capture."],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true
    });


});

// init Blinking Text
var blink = function() {
    console.log("BLINK FUCKERS");
    $('#blinky').animate({
        opacity: '0'
    }, function(){
        $(this).animate({
            opacity: '1'
        }, 450, blink);
    });
}

blink();
