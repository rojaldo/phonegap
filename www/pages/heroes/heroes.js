heroes = ['Superman', 'Spiderman', 'Batman'];

$(function () {

    heroes.forEach(element => {
        $('<li><a href="#">' + element + '</a></li>').appendTo("#heroeslist");
    });
});

function addHero() {
    const newHero = $('#newhero').val();
    heroes = [...heroes, newHero];
    $("#heroeslist").append('<li class="ui-first-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + newHero + '</a></li>');
}