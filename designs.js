// Select color input
var color ;
// Select size input
var height ;
var width ;
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(evt) {
evt.preventDefault();
height = $('#inputHeight').val();
width = $('#inputWidth').val();
makeGrid(height , width);
})

function makeGrid(n,m) {
// Your code goes here!
$('tr').remove();
for(var i = 1 ; i <= n ; i++ ){
    $('#pixelCanvas').append('<tr id=table'+ i + '></tr>');
    for(var j = 1; j <= m ; j++){
        $('#table' +i).append('<td></td>');
    }
}
$('td').click(function addColor() {
    color = $('#colorPicker').val();

    if($(this).attr('style')) {
        $(this).removeAttr('style')
    } 
    else {
        $(this).attr('style', 'background-color:' +color);
    }
})
}
