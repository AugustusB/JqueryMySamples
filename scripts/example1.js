$(function() {

    // Selecting elements by their attributes 
    $('#myContent').html('Hello World');
    $('td[style="width:30%;"],td[style="width:70%;"]').each(function(){
        $(this).css('border', '3px solid red');
    });

    // Selecting specific inputs in form
    $('input[type="text"').each(function(){
        $(this).css('background-color', 'Yellow');
    });

    // Selecting all inputs in form
    $(':input').each(function(){
        console.log(this);
        $(this).val('Set by input selector');
    });

 });