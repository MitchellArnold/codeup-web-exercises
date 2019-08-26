"use strict";
$(document).ready(function() {
    // $('li','h1','p').css('font-size', '20px').css('font-size', '20px').html();alert("<h1> Welcome to <br>the main page.</h1>");

    $('h1').click(function () {
       $('h1').css('background', 'darkgrey')
    })

    $('p').dblclick(function () {
        $('p').css('font-size', '18px')
    })

    $('li').hover(
        function () {
        $(this).css('color', 'red')
    },
        function () {
            $(this).css('color', 'black')
        })
});