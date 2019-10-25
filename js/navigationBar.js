$(document).ready(function(){
    let menu 	= $('.navigation__menu');
    let tapMenu 	= $('.navigation__transient');

    $(tapMenu).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle('slow');
    });

    $(window).resize(function(){
        if(menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

});