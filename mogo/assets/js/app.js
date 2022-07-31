$(function() {


    var header = $("#header"), 
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


        /* Fixed header */

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        

    });
 
    function checkScroll(scrollOffset) {

        

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /*smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockoffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockoffset
        });

    })


    /* menu nav toggle */ 
    
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    /* accordion collapse */
    
    $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');


        $this.toggleClass("active");


    });

/* slider */ 

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
        
    });

}); 