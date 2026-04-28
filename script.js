/**
 * Goals: Currently, the currentDisplay only allows a * b operation.
 * Then all bts are disabled. Change this so complex things can be done?
 * Ignore the bracket need. Just go by DMAS
 * 
 * The FinalDisplay also doesn't allow you to use it's value as a starting point
 * Allow that
 * 
 * Update the ID, class names on the html tags
 * There are many redundant names there
 * subtract button currently has a id which seems to be unused. look into that
 */

/**
 * container has otherContainer and operatorsContainer
 * otherContainer has resultBox (which has currentDisplay and FinalDisplay)
 * 
 * currentDisplay shows like 7 x 8
 * finalDisplay has 56
 * 
 * clearSignContainer has a clear btn and a sign btn
 */

const operatorsContainer = document.querySelector('.operatorsContainer')
const otherContainer = document.querySelector('#otherContainer')

// The numbers, operand are shown on the Current Display now
operatorsContainer.addEventListener('click', (e) => {
    otherContainer.querySelector('#currentDisplay').textContent += `${e.target.textContent}`
})

otherContainer.addEventListener('click', (e) => {
    if (e.target.textContent === "CLEAR") {
        otherContainer.querySelector('#currentDisplay').textContent = ''
        otherContainer.querySelector('#finalDisplay').textContent = '0'
    }
        

})

let operand1
let operand2
let operator

// You don't need named functions for this calc, can put func exp in the switch case
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate (operand1, operand2, operator) {
    switch(operator) {
        case '+' : {
            add(operand1, operand2);
            break;
        }
        case '-' : {
            subtract(operand1, operand2);
            break;
        }
        case 'x' : {
            multiply(operand1, operand2);
            break;
        }
        case '/' : {
            divide(operand1, operand2);
            break;
        }
        default: console.log("Unknown operation! Try again");
    }
}

