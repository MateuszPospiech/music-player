$(document).ready(function(){
    $('.slider__slider').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        arrows: false,
    });
    
    //buttons
    $('.button-panel__next').on('click', function(){
      $('.slider__slider').slick("slickNext");
    });
    
    $('.button-panel__prev').on('click', function(){
      $('.slider__slider').slick("slickPrev");
    });

});       