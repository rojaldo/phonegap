apod = {};

$(function () {
    $.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", function (data) {
        console.log(data)
        apod = data;
        $('#title').html(apod.title);
        $('#image').attr('src', apod.url);
        $('#explanation').html(apod.explanation);
    });

});


