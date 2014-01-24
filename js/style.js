var mainbottom = $('#top').offset().top;
$(window).on('scroll',function(){
stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('#bar').addClass('past-main');
    } else {
        $('#bar').removeClass('past-main');
    }
});