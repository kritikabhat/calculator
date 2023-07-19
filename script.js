// Definitely needed to call event listener on these buttons
const add = document.getElementById("add")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("multiply")
const subtract = document.getElementById("multiply")
const equalsKey = document.getElementById("equalsKey")
const clear = document.getElementById("clear")

// Use this in a for 0to9 loop and refer each button by id${i} I think
let digitButton

// To access .textContent mainly, to update in the event listeners above
const currentOperation = document.getElementById("currentOperation")
const finalDisplay = document.getElementById("finalDisplay")


