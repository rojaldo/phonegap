heroes = ['Superman', 'Spiderman', 'Batman'];

$(function () {

    heroes.forEach(element => {
        $( '<li><a href="#">'+element+'</a></li>' ).appendTo( "#heroeslist" );
    });
});