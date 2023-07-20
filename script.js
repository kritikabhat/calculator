const add = document.getElementById("add")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("multiply")
const subtract = document.getElementById("multiply")
const equalsKey = document.getElementById("equalsKey")
const clear = document.getElementById("clear")

const currentDisplay = document.getElementById("currentDisplay")
const finalDisplay = document.getElementById("finalDisplay")

const digits = document.querySelectorAll('.digits')
const operations = document.querySelectorAll('.operation')

let nums1, nums2, sign

const calculator = () => {

    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            currentDisplay.textContent += digit.textContent
            if (!sign) {
               nums1 = (!nums1) ? digit.textContent : (nums1+digit.textContent)
            } else {
                nums2 = (!nums2) ? digit.textContent : (nums2+digit.textContent)
            }
        })
    })

    operations.forEach(operation => { // Except for equalsKey
        operation.addEventListener('click', () => {
            if (sign) return
            sign = operation.textContent
            currentDisplay.textContent += operation.textContent
        })
    })

    clear.addEventListener('click', () => {
        currentDisplay.textContent = ""
        finalDisplay.textContent = 0.0
        nums1 = 0
        nums2 = 0
        sign = null
        console.log("cleared")
    })

    equalsKey.addEventListener('click', () => {
        console.log("number: " + nums1 + " number: " + nums2 + " sign: " + sign)
        let result
        if (!nums1 || !nums2) return

        if(sign === "+") result = +nums1 + +nums2
        if (sign === "-") result = +nums1 - +nums2
        if (sign === "/") result = +nums1 / +nums2
        if (sign === "*") result = +nums1 * +nums2

        finalDisplay.textContent = result
    })

}
calculator()


const equalsOperation = () => {

}

const addOperation = () => {

}

const subtractOperation = () => {

}

const multiplyOperation = () => {

}
const divideaddOperation = () => {

}
