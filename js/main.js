$(document).ready(function () {
    'use strict';
    
    $('header .burger').click(function () {
        $('nav').slideToggle();
        $(this).hide();
        $('html, body').css('overflow', 'hidden');
        $('.close-btn').css('display', 'inline-block');
    });
    $('.close-btn').click(function () {
        $(this).hide();
        $('html, body').css('overflow', 'visible');
        $('nav').slideToggle();
        $('.burger').show();
    });
    
    
    // slick slider
    $('.slides').slick({
        nextArrow: '.main-section .slider-btn .btn-right',
        prevArrow: '.main-section .slider-btn .btn-left',
    });
    
    
    // window scroll
    var header = $('header');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
        
    });
    
    // Counter
    $(window).scroll(function () {
//        if ($(this).scrollTop() > $('.users-section').offset().top - 250) {
        if ($(this).scrollTop() > $('.study-section').position().top + 500) {
            $('.count').countTo();
        }
    });

});


//    counter 
//var waypoint = new Waypoint({
//  element: document.getElementById('counter'),
//  handler: function(down) {
//
//        $('.count').each(function () {
//        'use strict';
//        $(this).prop('Counter', 0).animate({
//            Counter: $(this).text()
//        }, {
//            duration: 4000,
//            easing: 'swing',
//            step: function (now) {
//                $(this).text(Math.ceil(now));
//            }
//            });
//        });
//      
//        },
//    offset: '90%'
//});


