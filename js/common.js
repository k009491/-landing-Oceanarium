$(document).ready(function(){
//Slider
    $('.slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
//end Slider

//Events filter
    $('.future-events__item').click(function(){
        $('.future-events__item').removeClass('future-events__item_active');
        $(this).addClass('future-events__item_active');
        $('.future-event').css('display', 'none');
    });
    $('.future-events__item_week').click(function(){
        $('.future-event_week').css('display', 'block');
    });
    $('.future-events__item_month').click(function(){
        $('.future-event_month').css('display', 'block');
    });
    $('.future-events__item_year').click(function(){
        $('.future-event').css('display', 'block');
    });
//end Events filter
//Calendar
    $('.calendar-slider').slick({});
//end Calendar
//Gallery
    $(window).on('load resize', function(){
        var currentWidth = $('.gallery_item').outerWidth();
        $(".gallery_item").height(currentWidth);
    });
    $('.gallery__link').magnificPopup({
        type: 'image'
    });
//end Gallery
});
