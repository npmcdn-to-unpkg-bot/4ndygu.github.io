console.log("Hello! This works.");
// init Slider
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
