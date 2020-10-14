/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

    }
};

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
            updateDisplay(value)
            currentState = state.firstFigure;
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
                updateDisplay(value)
            }
            break;
        case state.secondFigure:
            if (value === '=') {
                doOperation();
                updateDisplay(value + result)
                currentState = state.result;
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
            break;

        default:
            break;

    }
}

function updateDisplay(value) {
    let display = document.getElementById('display');
    display.innerHTML = display.innerHTML + value
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.innerHTML = ''    
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
