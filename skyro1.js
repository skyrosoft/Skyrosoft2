$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        appendDots: $('.slider-dots-box'),
        dotsClass: 'slider-dots',
        
        pauseOnHover: true,
        initialSlide: 0,
        infinite: true,
        centerMode: true,
        cssEase:'ease',
        draggable: true,
        easing:'linear',

        respondTo:'window',
        swipe:true,
        touchMove:true,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
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


    // On before slide change
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.slider-dots-box button').html('');
    }).trigger('beforeChange');
  
  // On before slide change
  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-dots-box button').html('');
       $('.slider-dots-box .slick-active button')
           .html(`<svg class="progress-svg" width="40" height="40">
          <g transform="translate(20,20)">
        <circle class="circle-go" r="19" cx="0" cy="0"></circle>
        <text class="circle-tx" x="0" y="4" alignment-baseline="middle" stroke-width="0" text-anchor="middle">${(currentSlide || 0) + 1}</text>
          </g>
      </svg>`);
  }).trigger('afterChange');

