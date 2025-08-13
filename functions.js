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

function operate(operator, first, second) {
    let result = 0
    switch(operator) {
        case "+":
            result = add(Number(first), Number(second))
            break
        case "-":
            result = subtract(Number(first), Number(second))
            break
        case "*":
            result = multiply(Number(first), Number(second))
            break
        case "/":
            result = divide(Number(first), Number(second))
            break
        default:
            alert("Invalid operator")
            break
    }

    return result
}