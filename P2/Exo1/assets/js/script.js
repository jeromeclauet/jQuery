jQuery(document).ready(function() {
    $("#image").mouseover(function() {
        $(this).css('width', '800px');
    });
    $("#image").mouseleave(function() {
        $(this).css('width', '1200px');
    });
});