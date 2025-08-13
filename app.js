const input = document.querySelector("input")

const oneBtn = document.querySelector("#one")
const twoBtn = document.querySelector("#two")
const threeBtn = document.querySelector("#three")
const fourBtn = document.querySelector("#four")
const fiveBtn = document.querySelector("#five")
const sixBtn = document.querySelector("#six")
const sevenBtn = document.querySelector("#seven")
const eightBtn = document.querySelector("#eight")
const nineBtn = document.querySelector("#nine")
const zeroBtn = document.querySelector("#zero")
//const dotBtn = document.querySelector("#dot")
const clearBtn = document.querySelector("#clear")

const equalBtn = document.querySelector("#equal")
const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const multiplyBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")

const digitButtons = [oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn, zeroBtn]
const operationButtons = [plusBtn, minusBtn, multiplyBtn, divideBtn]

digitButtons.forEach((btn) => btn.addEventListener("click", () => {
    input.value += Number(btn.textContent)
}))

clearBtn.addEventListener("click", () => {
    input.value = ""
})

operationButtons.forEach((btn) => btn.addEventListener("click", () => {
    input.value += btn.textContent
}))

equalBtn.addEventListener("click", () => {
    if(input.value.includes(plusBtn.textContent)) {
        let operation = input.value.split("+")
        input.value = String(operate("+", operation[0], operation[1]))
    } else if (input.value.includes(divideBtn.textContent)) {
        let operation = input.value.split(divideBtn.textContent)
        input.value = String(operate("/", operation[0], operation[1]))
    } else if (input.value.includes(minusBtn.textContent)) {
        let operation = input.value.split(minusBtn.textContent)
        input.value = String(operate("-", operation[0], operation[1]))
    } else if (input.value.includes(multiplyBtn.textContent)) {
        let operation = input.value.split(multiplyBtn.textContent)
        input.value = String(operate("*", operation[0], operation[1]))
    } else {
        input.value = "Error"
    }
})
