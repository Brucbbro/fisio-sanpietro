$(document).ready(function() {
    $('#slider').slick({
        infinite:true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        dots: false,
        arrows: false,
        autoplaySpeed: 3000,
        lazyLoad: 'progressive'
    });
    Hyphenator.run();
    correct_height();
});
$(window).load(function(){
    equalize_divs();
    //slides_resize();

    $('.lazyload').each(function() {
        var lazy = $(this);
        var src = lazy.attr('data-src');

        $('<img>').attr('src', src).load(function(){
            //lazy.find('img.spinner').remove();
            lazy.css('background-image', 'url("'+src+'")');
        });

    });
});

$(window).resize(function() {
    setTimeout(function() {
        equalize_divs();
        //slides_resize();
        correct_height();
    },300);

});

function correct_height() {
    var headerH = $('#header').innerHeight();
    var captionH = $('#caption').outerHeight();
    $('#filler').height((headerH - captionH)/2);
}

function equalize_divs() {
    /*sets = $('.fit-boxes');*/
    /*$.each(sets, function(index, el){*/
        /*els = $(this).find('.mythumbnail');*/
        els = $('.fit-boxes').find('.mythumbnail');
        var max = 0;
        $.each(els, function(index, elm) {
            var h = 0;
            borders = $(this).outerHeight(true) - $(this).height();
            $(elm).each(function() {
                h = h + $(this).find('p').innerHeight();
            });
            h = h + borders;
            if (h>max) {
                max = h;
            }
        });
        $.each(els, function(index, ele) {
            $(ele).css('height', (max));
        });
    /*});*/
}