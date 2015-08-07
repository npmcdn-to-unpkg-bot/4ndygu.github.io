$(function() {

    var $sidebar   = $("#sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});

$(document).ready(function() {   
    $(window).trigger("scroll");        
});

$("#resume").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.open(files/resume.pdf);
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("#footer").slideDown();
   } else {
        $("#footer").slideUp();
   }   
});