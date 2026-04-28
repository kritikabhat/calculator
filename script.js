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

const operations = ['+', '-', '/', 'x']
let operand1 = ''
let operand2 = ''
let operator = ''
let result = ''

// The numbers, operand are shown on the Current Display now
operatorsContainer.addEventListener('click', (e) => {
    if (e.target.matches('#equalsKey')) {
        console.log("Equals key")
        if (operand1 && operand2 && operator) {
            result = calculate(operand1, operand2, operator)
            otherContainer.querySelector('#finalDisplay').textContent = result

            // Once the calculation is complete, you want to reset the values
            // Unless the clear button is pressed, you continue so
            operand1 = result
            operand2 = ''
            operator = ''
            result = ''
            console.log("operand1: " + operand1)
            console.log("operator: " + operator)
            console.log("operand2: " + operand2)
            console.log("result: " + result)
        }

    } else if (e.target.matches('.operation') && !operator) { // +, -, x, /
        operator = e.target.textContent
        otherContainer.querySelector('#currentDisplay').textContent += `${e.target.textContent}`
    } else { // [0-9], . 
        if (!operator) {
            operand1 += e.target.textContent
            otherContainer.querySelector('#currentDisplay').textContent += `${e.target.textContent}`
        } else {
            operand2 += e.target.textContent
            otherContainer.querySelector('#currentDisplay').textContent += `${e.target.textContent}`
        }
    }
    // console.log("operand1: " + operand1)
    // console.log("operator: " + operator)
    // console.log("operand2: " + operand2)
})



/**
 * First operator- always allowed
 * Two operators together- not allowed: write a check for this
 * if there are two numbers and an operator between them,
 *      instead of disabling operators, when another operator is pressed
 *      the current operation should be completed in the finalDisplay
 *      and that final value should be shown in the currentValue
 * 
 * If you don't do this, and make it work like your phone calc then the box
 *      size will cause overflow.
 * 
 * can use contains to check for the presence of operators
 *
 */

otherContainer.addEventListener('click', (e) => {
    if (e.target.textContent === "CLEAR") {
        otherContainer.querySelector('#currentDisplay').textContent = ''
        otherContainer.querySelector('#finalDisplay').textContent = '0'
        operand1 = ''
        operand2 = ''
        result = ''
        operator = ''
    }
    if (e.target.textContent === "Neg") {
        otherContainer.querySelector('#currentDisplay').textContent += `-`
    }
})

function calculate (operand1, operand2, operator) {
    switch(operator) {
        case '+' : {
            return (+operand1 + +operand2);
            break;
        }
        case '-' : {
            return (+operand1 - +operand2);
            break;
        }
        case 'x' : {
            return (+operand1 * +operand2);
            break;
        }
        case '/' : {
            return (+operand1 / +operand2);
            break;
        }
        default: console.log("Unknown operation! Try again");
    }
}

