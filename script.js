const equalsKey = document.getElementById("equalsKey")
const clear = document.getElementById("clear")
const currentDisplay = document.getElementById("currentDisplay")
const finalDisplay = document.getElementById("finalDisplay")
const digits = document.querySelectorAll('.digits')
const operations = document.querySelectorAll('.operation')
const signChange = document.getElementById('signChange')

let nums1, nums2, sign, currentSign = "+"

const calculator = () => {
    digitsMethod()
    operationsMethod()
    signChangeMethod()
    clearMethod()
    equalsKeyMethod()
}
const digitsMethod = () => {
    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            currentDisplay.textContent += digit.textContent
            if (!sign || sign === null) {
                nums1 = (!nums1) ? digit.textContent : (nums1+digit.textContent)
            } else {
                nums2 = (!nums2) ? digit.textContent : (nums2+digit.textContent)
            }
        })
    })
}
const operationsMethod = () => {
    operations.forEach(operation => { // Except for equalsKey
        operation.addEventListener('click', () => {
            if (sign) return
            sign = operation.textContent
            currentDisplay.textContent += operation.textContent
        })
    })
}
const signChangeMethod = () => {
    signChange.addEventListener('click', () => {
        if (currentSign === "+") {
            if (!nums1) {
                currentDisplay.textContent = "-"
                nums1 = "-"
            } else if (nums1 && !sign) {
                nums1 = "-" + nums1
                currentDisplay.textContent = nums1
            }
            if (sign && !nums2) {
                currentDisplay.textContent += "-"
                nums2 = "-"
            } 
            currentSign = "-"
        }
        if (currentSign === "-" && sign && nums1) {
            if (!nums2) {
                currentDisplay.textContent += "-"
                nums2 = "-"
            }
        }
    })
}
const clearMethod = () => {
    clear.addEventListener('click', () => {
        currentDisplay.textContent = ""
        finalDisplay.textContent = 0.0
        nums1 = 0
        nums2 = 0
        sign = null
        currentSign = "+"
    })
}
const equalsKeyMethod = () => {
    equalsKey.addEventListener('click', () => {
        let result
        if (!nums1 || !nums2) return

        if(sign === "+") result = +nums1 + +nums2
        if (sign === "-") result = +nums1 - +nums2
        if (sign === "/") result = +nums1 / +nums2
        if (sign === "x") result = +nums1 * +nums2

        finalDisplay.textContent = result
    })
}

calculator()
