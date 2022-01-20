$('.owl-carousel').owlCarousel({
    loop: ( $('.owl-carousel .items').length > 1 ),
    singleItem: true,
    // margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200: {
            items:1
        },
        1400: {
            items:1
        },
        1600: {
            items:1
        },
        1800: {
            items:1
        }
    }
})