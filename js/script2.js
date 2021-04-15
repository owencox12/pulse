$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="image/strela2.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="image/strela.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {  
                    dots: true,
                    autoplay: true,
                    infinite: true,
                    arrows: false
                }
            }
        ]
      });
  });
