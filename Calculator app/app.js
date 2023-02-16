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


// switch themes //
const toggle = document.querySelector('.switch');
const themeHolder = [...document.querySelectorAll('.swap')];
let clickCount = 0;


toggle.addEventListener('click', () => {
// move the checked attribute based on number of clicks to the corresponding radio
  clickCount++;
  const indexToCheck = clickCount % themeHolder.length;
  themeHolder[indexToCheck].checked = true;
  themeHolder.forEach((theme) => {
      if(theme.checked){
          theme.setAttribute("data-selected", true)
          saveTheme(theme.id)
      } else {
          theme.setAttribute("data-selected", false)
      }
  })
  
});


const colorThemes = document.querySelectorAll('[name="theme"]');

// store user preference
const saveTheme = function(theme) {
    localStorage.setItem("theme", theme)
}

colorThemes.forEach(option => {
    option.addEventListener("click", () => {
        saveTheme(option.id) // save the selected theme id
    })
});

// check the saved theme in local storage
const getTheme = function() {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((option) => {
        if (option.id === activeTheme) {
            option.checked = true; // set selected theme id to checked
            option.setAttribute("data-selected", true) // load theme colors
        }
    });

    // polyfill for :has()
    document.documentElement.className = theme;
};

// Call getTheme() after the DOM has loaded
document.addEventListener("DOMContentLoaded", getTheme);

// this updates the click count based on the index of users
// selected theme onload to avoid the slider moving backwards 
// before it reaches the last index
window.addEventListener('DOMContentLoaded', () => {
    let activeTheme = localStorage.getItem("theme");
    switch (activeTheme) {
        case themeHolder[1].id:
            clickCount = 1;
            break;
        case themeHolder[2].id:
            clickCount = 2;
            break;
        default:
            clickCount = 0;
            break;
    }
});


