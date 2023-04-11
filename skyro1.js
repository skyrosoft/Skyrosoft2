$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        initialSlide: 0,
        infinite: true,
        centerMode: true,
        cssEase:'ease',
        draggable: true,
        easing:'linear',
        pauseOnHover: true,
        respondTo:'window',
        swipe:true,
        touchMove:true,
        variableWidth: true,

        
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
        });
    }); 

