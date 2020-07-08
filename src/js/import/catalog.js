$( "ul.sidebar__block__colapse" ).each(function() {
    $(this).find(' li:gt(4)').hide();
var l = $('.sidebar__block__colapse li').length;
if (l > 5) {
    $('span').show();
} else {
    $('span').hide();
}
});
$('.sidebar__block__show-more.colapse-more').click(function () {
    $(this).closest( ".sidebar__block" ).find('ul li:gt(4)').toggle('slide');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')){
        $(this).html('Show less');
    } else {
        $(this).html('Show more');
    }

});

$( "ul.sidebar__block__colapse-full" ).each(function() {
    $(this).find(' li').hide();
    var l = $('.sidebar__block__colapse li').length;
    if (l > 0) {
        $('span').show();
    } else {
        $('span').hide();
    }
});
$('.sidebar__block__show-more.colapse-full').click(function () {
    $(this).closest( ".sidebar__block" ).find('ul li').toggle('slide');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')){
        $(this).html('Show less');
    } else {
        $(this).html('Show more');
    }

});



