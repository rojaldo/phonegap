cards = [];

$(function () {
    $.get("https://opentdb.com/api.php?amount=10", function (data) {
        console.log(data)
        cards = getCards(data.results);
        $('#main').append(`  <div class="ui-body ui-body-a ui-corner-all">
        <h3>`+ cards[0].question + `</h3><div id="buttons"></div></div>`);

        cards[0].answers.forEach(answer => {
            $('#buttons').append(`<button class="ui-btn">`+ answer + `</button>`);
        }) 
        
    });

});

function getCards(otdbCards) {
    let result = []
    otdbCards.forEach(element => {
        let card = {};
        card.question = element.question;
        card.correctAnswer = element.correct_answer;
        card.answers = [element.correct_answer, ...element.incorrect_answers]
        result = [...result, card]
    });
    return result;
}
