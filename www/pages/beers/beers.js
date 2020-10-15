let beers = [];

$(function () {
    $.get("https://api.punkapi.com/v2/beers", function (data) {
        console.log(data)
        beers = data;
        showBeers = { ...beers };
        filterBeers();

    });

});

function checkCahnge() {
    console.log('Cambio');

     filterBeers()
}

function filterBeers() {
    const min = $('#range-1a').val();
    const max = $('#range-1b').val();
    $("#beerslist").empty();
    $.each(beers.filter((element) => {
        return (element.abv >= min && element.abv <= max)
    }), (beerIndex, beer) => {
        $("#beerslist").append('<li class="ui-first-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' +
            beerIndex + ' - ' + beer.name + ': ' + beer.abv + 'º' + '</a></li>');
    });
}