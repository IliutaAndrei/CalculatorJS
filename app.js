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
    return Math.round(a / b * 100) / 100
}

let firstOperand = ""
let secondOperand = ""
let operator = ""

function operate(operator, first, second) {
    let result = 0
    switch(operator) {
        case "+":
            result = add(first, second)
            break
        case "-":
            result = subtract(first, second)
            break
        case "*":
            result = multiply(first, second)
            break
        case "/":
            result = divide(first, second)
            break
        default:
            alert("Invalid operator")
            break
    }
    
    return result
}