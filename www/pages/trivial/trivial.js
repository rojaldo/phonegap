cards = [];

$(function () {
    $.get("https://opentdb.com/api.php?amount=10", function (data) {
        console.log(data)
        cards = getCards(data.results);
        $('#main').append(`  <div class="ui-body ui-body-a ui-corner-all">
        <h3>`+ cards[0].question + `</h3><div id="buttons"></div></div>`);

        cards[0].answers.forEach(answer => {
            $('#buttons').append(`<button onclick="handleClick('`+ answer +`')" class="ui-btn">`+ answer + `</button>`);
        }) 
        
    });

});

function handleClick(answer) {
    console.log('HandleClick');
    $('#buttons').empty();
    cards[0].answers.forEach(answer => {
        if(cards[0].correctAnswer === answer){
            $('#buttons').append(`<button  class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-check" disabled>`+ answer + `</button>`);    
        }else {
            $('#buttons').append(`<button  class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-delete" disabled>`+ answer + `</button>`);    
        }
    }) 
}

// <button class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-check">check</button>
// <button class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-delete">delete</button>

function getCards(otdbCards) {
    let result = []
    otdbCards.forEach(element => {
        let card = {};
        card.question = element.question;
        card.correctAnswer = element.correct_answer;
        card.answers = [element.correct_answer, ...element.incorrect_answers];
        shuffleArray(card.answers);
        result = [...result, card]
    });
    return result;
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}