console.log('test concat');

//        $('.slider__slider').slick({
//            slidesToShow: 3,
//            slidesToScroll: 1,
//            autoplay: false,
//            
//        });
$(document).ready(function(){
    $('.slider__slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
         prevArrow:'<div class="col button-panel__button--shadow button-panel__prev slick-prev"><img src="img/previous_ico.svg" alt="prev song"></div>',
        arrows: false,
    });
    
    $('.button-panel__next').on('click', function(){
      $('.slider__slider').slick("slickNext");
    });
    
    $('.button-panel__prev').on('click', function(){
      $('.slider__slider').slick("slickPrev");
    });

});       
    
//    $('.right-selector').on('click', function(){
//      $('.carousel-selector').slickPrev();
//    });
