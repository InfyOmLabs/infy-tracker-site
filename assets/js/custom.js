$(window).on('load', function () {
    // init counterUp
    $('.counter').counterUp();
    // disable download option
    $('#imageGallery').lightGallery({
        download: false
    });
    // init image gallery
    $("#imageGallery").lightSlider({
        gallery: true,
        item: 4,
        loop: true,
        slideMargin: 30,
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        },
        responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:30,
                }
            },
            {
                breakpoint:992,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:20,
                }
            },
            {
                breakpoint:576,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ]

    });
});

