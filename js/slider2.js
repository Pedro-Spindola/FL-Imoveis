$('.slider-box-imagem').slick({
    arrows: false,
    dots: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
            {
                breakpoint: 1367,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 999,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ],
    });