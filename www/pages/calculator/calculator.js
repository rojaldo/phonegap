const state = {
    init: 0,
    firstFigure: 1,
    secondFigure: 2,
    result: 3
}

let currentState = state.init;

let firstFigure = 0;
let secondFigure = 0;
let result = 0;
let operator = '';

function insertNumber(value) {
    switch (currentState) {
        case state.init:
            firstFigure = value;
            updateDisplay(value);
            currentState = state.firstFigure;
            updateState()
            break;
        case state.firstFigure:
            firstFigure = firstFigure * 10 + value;
            updateDisplay(value)
            break;
        case state.secondFigure:
            secondFigure = secondFigure * 10 + value;
            updateDisplay(value)
            break;
        case state.result:
            removeValues();
            clearDisplay();
            firstFigure = value;
            updateDisplay(value);
            currentState = state.firstFigure;
            updateState()
            break;

        default:
            break;
    }
}

function insertSymbol(value) {
    switch (currentState) {
        case state.init:

            break;
        case state.firstFigure:
            if (isOpertor(value)) {
                operator = value;
                currentState = state.secondFigure;
                updateState()
                updateDisplay(value)
            }
            break;
        case state.secondFigure:
            if (value === '=') {
                doOperation();
                updateDisplay(value + result)
                currentState = state.result;
                updateState()
            }
            break;
        case state.result:
            const temp = result;
            removeValues();
            firstFigure = temp;
            operator = value;
            clearDisplay();
            updateDisplay(firstFigure + value);
            currentState = state.secondFigure;
            updateState()
            break;

        default:
            break;

    }
}

function updateState() {
    switch (currentState) {
        case state.init:
            $('.number').prop('disabled', false);
            $('.operator').prop('disabled', false);
            $('.equal').prop('disabled', true);
            break;
        case state.firstFigure:
            $('.number').prop('disabled', false);
            $('.operator').prop('disabled', false);
            $('.equal').prop('disabled', true);

            break;
        case state.secondFigure:
            $('.number').prop('disabled', false);
            $('.operator').prop('disabled', true);
            $('.equal').prop('disabled', false);
            break;
        case state.result:
            $('.number').prop('disabled', false);
            $('.operator').prop('disabled', false);
            $('.equal').prop('disabled', true);
            break;
        default:
            break;
    }
}

function updateDisplay(value) {
    console.log('updateDisplay');
    $('#display').html($('#display').html() + value);
}

function clearDisplay() {

    $('#display').html('');
}

function removeValues() {
    firstFigure = 0;
    secondFigure = 0;
    result = 0;
    operator = '';
}

function doOperation() {
    switch (operator) {
        case '+':
            result = firstFigure + secondFigure;
            break;
        case '-':
            result = firstFigure - secondFigure;
            break;
        case '*':
            result = firstFigure * secondFigure;
            break;
        case '/':
            result = firstFigure / secondFigure;
            break;
        default:
            break;
    }
}

function isOpertor(value) {
    if ((value === '+') || (value === '-') || (value === '*') || (value === '/')) {
        return true
    }

    return false
}
