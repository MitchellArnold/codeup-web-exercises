"use strict";
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
    $('body').css('box-sizing','borer-box').css('border', '2px solid black').css('opacity', '.9').css('background-image', 'linear-gradient(darkgrey,white)');
    $('div').css('box-sizing','borer-box').css('border', '2px solid black');
    $('#header').css('font-size', '50px').css('color', 'lightgrey').css('align', 'left');
    $('main').css('opacity', '.7')
});
