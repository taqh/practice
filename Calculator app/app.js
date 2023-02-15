const digit = document.querySelectorAll('.num-key');
const del = document.querySelector('.delete');
const clear = document.querySelector('.reset');

const opScreen = document.querySelector('.op');
const operand = document.querySelector('.previous-operand');
const result = document.querySelector('.current-operand');

const eval = document.querySelector('.equal');

// ----- Reset calclation to zero
clear.addEventListener('click', (e) => {
    if(result.innerText){
        result.innerText = 0;
    }
    if(opScreen.innerText){
        opScreen.innerText = '';
    }
    if(operand.innerText){
        operand.innerText = '';
    }
});

//  delete integer
del.addEventListener('click', (e) =>{
    let input = result.innerText.toString();
    result.innerText = input.substr(0, input.length - 1)
});

eval.addEventListener('click', (e) => {
    if(!result.innerText){
        result.innerText = 'NaN';
        setTimeout(() => (result.innerText = ''), 2000)
    } else if(result.innerText && opScreen.innerText){
        result.innerText = eval(opScreen.innerText && result.innerText);
    } 
});





// Maps innerHTML text of buttons
const keys = {
    ZERO: '0',
    ONE: '1',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    PERIOD: '.',
    PLUS: '+',
    MINUS: '-',
    PRODUCT: 'x',
    DIVIDE: '/',
    EQUAL: '=',
    BACKSPACE: 'DEL',
    CLEAR: 'RESET'
};

const keyCode = new Map();
keyCode.set('Digit1', keys.ONE);
keyCode.set('Digit2', keys.TWO);
keyCode.set('Digit3', keys.THREE);
keyCode.set('Digit4', keys.FOUR);
keyCode.set('Digit5', keys.FIVE);
keyCode.set('Digit6', keys.SIX);
keyCode.set('Digit7', keys.SEVEN);
keyCode.set('Digit8', keys.EIGHT);
keyCode.set('Digit9', keys.NINE);
keyCode.set('Digit0', keys.ZERO);
keyCode.set('Backspace', keys.BACKSPACE);
keyCode.set('Minus', keys.MINUS);
keyCode.set('Equal', keys.EQUAL);
keyCode.set('Slash', keys.DIVIDE);
keyCode.set('Period', keys.PERIOD);