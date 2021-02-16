$('#green').mouseover(function() {
    $('#text').css('color', 'green');
});
$('#red').mouseover(function() {
    $('#text').css('color', 'red');
});
$('#blue').mouseover(function() {
    $('#text').css('color', 'blue');
});
$('.color').mouseleave(function() {
    $('#text').css('color', 'black');
});