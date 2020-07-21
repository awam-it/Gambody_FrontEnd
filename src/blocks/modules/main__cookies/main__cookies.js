/*****************************/
/* Cookies */
/*****************************/
jQuery(document).on('click','.cookies__close',function(){
    jQuery('.cookies').css( "display", "none" );
});
jQuery(document).on('click','.cookies__button',function(){
    jQuery('.cookies__close').trigger( "click" );
});