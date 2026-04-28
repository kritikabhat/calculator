/**
 * Update the ID, class names on the html tags. There are many redundant names there
 */

const operatorsContainer = document.querySelector('.operatorsContainer')
const otherContainer = document.querySelector('#otherContainer')

const operations = ['+', '-', '/', 'x']
let operand1 = ''
let operand2 = ''
let operator = ''
let result = ''
let currentSign = '+'

operatorsContainer.addEventListener('click', (e) => {
    if (e.target.matches('#equalsKey')) {
        if (operand1 && operand2 && operator) {
            result = calculate(operand1, operand2, operator)
            otherContainer.querySelector('#finalDisplay').textContent = result

            // This allows additional arithematic using the first result value
            operand1 = result
            operand2 = ''
            operator = ''
            currentSign = (+result > 0) ? '+' : '-'
            console.log("result now: " + result)
            console.log("Current sign: " + currentSign)
        }
    } else if (e.target.matches('.operation') && !operator) { // +, -, x, /
        if (!result) {
            operator = e.target.textContent
            otherContainer.querySelector('#currentDisplay').textContent += `${e.target.textContent}`
        } else {
            operator = e.target.textContent
            otherContainer.querySelector('#currentDisplay').textContent = `${result}${e.target.textContent}`
            otherContainer.querySelector('#finalDisplay').textContent = 0
        }
    } else { // [0-9], . 
        if (!operator) {
            operand1 += e.target.textContent
            otherContainer.querySelector('#currentDisplay').textContent += `${e.target.textContent}`
        } else {
            operand2 += e.target.textContent
            otherContainer.querySelector('#currentDisplay').textContent += `${e.target.textContent}`
        }
    }
})

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
        if (!result) { // first arithematic operation
            if (currentSign === "+") {
                if (!operand1) {
                    operand1 = "-"   
                } else if (operand1 && !operator) {
                    operand1 = "-" + operand1
                }
                otherContainer.querySelector('#currentDisplay').textContent = operand1
                currentSign = "-"
            }
        } else { // "result" is used to allow additional arithematic
            console.log("result so")
            if (currentSign === "+") {
                if (!operator) {
                    result = "-" + result
                    operand1 = result
                    otherContainer.querySelector('#currentDisplay').textContent = result
                    otherContainer.querySelector('#finalDisplay').textContent = result
                }
            }
            if (currentSign === "-") { // changes result sign to positive during additional arithematic
                if(!operator) {
                    result = result.toString().slice(1)
                    operand1 = result
                    otherContainer.querySelector('#currentDisplay').textContent = result
                    otherContainer.querySelector('#finalDisplay').textContent = result
                }

            }
        }  
        if (operator && !operand2) { // this allows operand2 to be negative
            operand2 = "-"
            otherContainer.querySelector('#currentDisplay').textContent += "-"
        } 
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

