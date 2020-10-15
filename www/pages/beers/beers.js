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
        $("#beerslist").append(`<div data-role="collapsible"
        class="ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-themed-content ui-first-child">
        <h3 class="ui-collapsible-heading"><a href="#"
                class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-a ui-icon-minus">`+beer.name+`<span
                    class="ui-collapsible-heading-status"> click to collapse contents</span></a></h3>
        <div class="ui-collapsible-content ui-body-a" aria-hidden="false">
    
            <p>`+beer.description+`</p>
        </div>
    </div>`);
    });
}

