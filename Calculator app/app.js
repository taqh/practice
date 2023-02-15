// screen Sections
const operatorValue = document.querySelector('.operator');
const prevNumValue = document.querySelector('.previous-operand');
const currNumValue = document.querySelector('.current-operand');
// Key types
const numberKeys = document.querySelectorAll('.num-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const del = document.querySelector('.delete');
const clear = document.querySelector('.reset'); 
const evaluate = document.querySelector('.equal');

class Calculator {
    constructor(prevNumValue, currNumValue, operatorValue) {
        this.prevNumValue = prevNumValue
        this.currNumValue = currNumValue
        this.operatorValue = operatorValue
        this.reset()
    }

    reset() {
        this.currNum = ''
        this.prevNum = ''
        this.operator = ''
    }

    delete() {
        this.currNum = this.currNum.toString().slice(0, -1)
    }

    appendNumber(number) {
        // prevent multiple decimals
        if(number === '.' && this.currNum.includes('.')) return

        
        // prevent adding more digits if the number is too long
        if (this.currNum.length >= 9) return

        // append new inputs
        this.currNum = this.currNum.toString() + number.toString()
    }

    chooseOperator(operator){   
        if(this.currNum === '') return
        // check if user presses another operator 
        if(this.prevNum !== '') {
            this.calculate()
        }
        this.operator = operator
        this.prevNum = this.currNum
        this.currNum = '';
    }

    calculate() {
        let calculation
        const previous = parseFloat(this.prevNum)
        const current = parseFloat(this.currNum)

        if (isNaN(previous) || isNaN(current)) return
        
        switch (this.operator) {
            case '+':
                calculation = previous + current
                break
            case '-':
                calculation = previous - current
                break
            case 'x':
                calculation = previous * current
                break
            case '/':
                calculation = previous / current
                break
            default:
                return
        }
        this.currNum = calculation
        this.operator = ''
        this.prevNum = ''
    }

    // Adds commas to large numbers
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]

        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        }   else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        }   else {
            return integerDisplay
        }
        
    }

    updateScreen() {
        this.currNumValue.innerText = this.getDisplayNumber(this.currNum)

        this.operatorValue.innerText = this.operator
 
        this.prevNumValue.innerText = this.getDisplayNumber(this.prevNum)
    }  
}


const calculator = new Calculator(prevNumValue, currNumValue, operatorValue)

numberKeys.forEach(key => {
    key.addEventListener('click', () => {
        calculator.appendNumber(key.innerText)
        calculator.updateScreen();
    })
});

operatorKeys.forEach(key => {
    key.addEventListener('click', () => {
        calculator.chooseOperator(key.innerText)
        calculator.updateScreen()
    })
});

evaluate.addEventListener('click', (e) => {
    calculator.calculate()
    calculator.updateScreen()
});

clear.addEventListener('click', (e) => {
    calculator.reset()
    calculator.updateScreen()
});

del.addEventListener('click', (e) => {
    calculator.delete()
    calculator.updateScreen()
});





// ----- Reset calclation to zero
// clear.addEventListener('click', (e) => {
//     if(currNum.innerText){
//         currNum.innerText = 0;
//     }
//     if(operator.innerText){
//         operator.innerText = '';
//     }
//     if(prevNum.innerText){
//         prevNum.innerText = '';
//     }
// });

// //  delete integer
// del.addEventListener('click', (e) =>{
//     let input = currNum.innerText.toString();
//     currNum.innerText = input.substr(0, input.length - 1)
// });

// eval.addEventListener('click', (e) => {
//     if(!currNum.innerText){
//         currNum.innerText = 'NaN';
//         setTimeout(() => (currNum.innerText = ''), 1000)
//     } else if(currNum.innerText && operator.innerText){
//         currNum.innerText = eval(operator.innerText && currNum.innerText);
//     } 
// });

