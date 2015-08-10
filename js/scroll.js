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
    
    $("#bloglink").click(function() {
        $("#main").css("display","none");
        $("#blog").css("display","block");
    });

    $("#mainlink").click(function() {
        $("#main").css("display","block");
        $("#blog").css("display","none");        
    })
});

$(document).ready(function() {   
    $(window).trigger("scroll");        
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("#footer").slideDown();
   } else {
        $("#footer").slideUp();
   }   
});