
/*****************************/
/* tooltip */
/*****************************/
var i = 0;


function gettooltip(event) {

    var width = $(document).width();
    var el_width = $(event).width();
    var el_offset = 0;
    tag = $(event).offset();
    //console.log(tag.left);
    var pos = width - el_width - tag.left ;
    if (width < 900){el_offset = 250} else {el_offset = 520}

    if (pos > el_offset){
        $(event).addClass("over");
    } else {
        $(event).addClass("over_l");
    }
    if ( $(event).hasClass('slide-on')){
        return;
    } else {
        var addclass = "slide-on" + i;
        $(event).find('.card__content').addClass(addclass);
        $(event).find('.card__hidden-slider').addClass(addclass);
        var container = '.' + addclass + ' .hidden-slider';
        var control = '.' + addclass + ' #customize-controls';
        var j_current = '.' + addclass + ' .slider-count-current';
        var j_total = '.' + addclass + ' .slider-count-total';

        if ($(event).hasClass('mob-over')) {
            var slider = tns({
                container: container,
                items: 1,
                slideBy: 'page',
                nav: false,
            });
        } else {
            var slider = tns({
                container: container,
                items: 1,
                slideBy: 'page',
                nav: false,
                controlsContainer: control,
            });
        }
        var info = slider.getInfo();
        current = document.querySelector(j_current);
        total = document.querySelector(j_total);

        total.textContent = info.slideCount;
        current.textContent = slider.getInfo().displayIndex;

        slider.events.on('transitionEnd', function(info){
            current = document.querySelector(j_current);
            current.textContent = slider.getInfo().displayIndex;
        });
        $(event).addClass("slide-on");
    }
    i++;
}
/*******************************************/
if ($(window).width() >= '1016') {
    $("div.card_slider").on("mouseover" , function () {
        gettooltip(this);
    });
    $( "div.card_slider" ).mouseout("*", function(ev) {
        $(this).removeClass("over");
        $(this).removeClass("over_l");
    });

} else {
    $(document).mouseup(function (e){
        var div = $(".card__hidden-slider");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.card_slider').removeClass("over");
            $('.card_slider').removeClass("over_l");
        }
    });
}



$( "div.card__mob-zoom" ).on("click", function () {
    var newthis = $(this).closest( ".card_slider" )
    $(newthis).addClass("mob-over");
    gettooltip(newthis);
});

$( "div.card__mob-zoom-close" ).on("click", function () {
    var newthis = $(this).closest( ".card_slider" )
    newthis.removeClass("over");
    newthis.removeClass("over_l");
});


/*****************************/
/* tooltip */
/*****************************/