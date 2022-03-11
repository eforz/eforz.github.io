const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    
    
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }


})