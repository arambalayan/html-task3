$(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top >= 100){
        $('nav').css('position','fixed');
        $('nav').css('width','100%');
        $('nav').css('padding','0');
        $('nav').css('padding','0');
        $('nav').css('background','#000');
        $('nav').css('transition','1.5s');
        $('nav').css('z-index','5');
        $('nav').css('box-shadow','0px 6px 28px -15px rgba(0,0,0,0.73)');
    }
    else{
        $('nav').css('position','static');
        $('nav').css('background','transparent');
        $('nav').css('box-shadow','none');

        $('nav').css('transition','1.5s');
    }
})