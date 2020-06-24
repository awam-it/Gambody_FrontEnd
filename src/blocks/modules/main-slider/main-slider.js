$(document).ready(function() {
    $('.main-slider__block').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1,
        responsive:{
            750:{
                nav:true,
            },
        }
    });
});