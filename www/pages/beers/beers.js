$(function () {
    $.get("https://api.punkapi.com/v2/beers", function (data) {
        console.log(data)
    });
});