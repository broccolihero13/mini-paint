$(document).ready(function() {
    var color = 'white';
    var colors = 'white green red blue yellow';
    var clickOn = false;
    console.log(clickOn);
    $('.box').on('click', function() {
        if(clickOn === false) {
          clickOn = true;
        } else {
          clickOn = false;
        }
    })
    $('.box').on('mouseover', function() {
        console.log(clickOn);
        if (clickOn === true) {
            $(this).addClass(color);
        }
    })
    $('.box').on('dblclick', function() {
        $(this).removeClass(color);
    })
    $('#reset').on('click', function() {
        $('.box').removeClass(colors);
    })
    $('#red').on('click', function() {
        color = 'red';
    })
    $('#green').on('click', function() {
        color = 'green';
    })
    $('#blue').on('click', function() {
        color = 'blue';
    })
    $('#yellow').on('click', function() {
        color = 'yellow';
    })
    $('#white').on('click', function() {
        color = 'white';
    })
})
