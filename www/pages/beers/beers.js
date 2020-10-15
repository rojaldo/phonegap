let beers = [];

$(function () {
    $.get("https://api.punkapi.com/v2/beers", function (data) {
        console.log(data)
        beers = data;

        $.each(data, (beerIndex, beer) => { 
            $("#beerslist").append('<li class="ui-first-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + 
            beerIndex + ' - ' + beer.name + ': ' + beer.abv + 'º' + '</a></li>'); 
        });
    });

});