let displayContent = `0`
let Ans = 0

let equalsButtonClicked = false

let display = document.getElementById(`display`)
let operation = ``
let set1 = 0
let set2 = 0

let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById(`btn1`)
let btn2 = document.getElementById(`btn2`)
let btn3 = document.getElementById(`btn3`)
let btn4 = document.getElementById(`btn4`)
let btn5 = document.getElementById(`btn5`)
let btn6 = document.getElementById(`btn6`)
let btn7 = document.getElementById(`btn7`)
let btn8 = document.getElementById(`btn8`)
let btn9 = document.getElementById(`btn9`)
let btnDiv = document.getElementById(`btnDiv`)
let btnMult = document.getElementById(`btnMult`)
let btnSub = document.getElementById(`btnSub`)
let btnSum = document.getElementById(`btnSum`)
let btnClear = document.getElementById(`btnClear`)
let btnAns = document.getElementById(`btnAns`)
let btnComma = document.getElementById(`btnComma`)
let btnEquals = document.getElementById(`btnEquals`)

let operationsButtons = [btnDiv, btnSum, btnSub, btnMult]

btn0.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `0`
    updateDisplay()
}
btn1.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `1`
    console.log(displayContent)
    updateDisplay()
}
btn2.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `2`
    updateDisplay()
}
btn3.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `3`
    updateDisplay()
}
btn4.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `4`
    updateDisplay()
}
btn5.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `5`
    updateDisplay()
}
btn6.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `6`
    updateDisplay()
}
btn7.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `7`
    updateDisplay()
}
btn8.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `8`
    updateDisplay()
}
btn9.onclick = () => {
    hadEqualsButtonBeenPressed()
    checkZeroAtFirstPosOndisplayContent()
    displayContent += `9`
    updateDisplay()
}
btnDiv.onclick = () => {
    firstset()
    operation = `div`
    operationButtonPressed(btnDiv)
}
btnMult.onclick = () => {
    firstset()
    operation = `mult`
    operationButtonPressed(btnMult)
}
btnSub.onclick = () => {
    firstset()
    operation = `sub`
    operationButtonPressed(btnSub)
}
btnSum.onclick = () => {
    firstset()
    operation = `sum`
    operationButtonPressed(btnSum)
}
btnClear.onclick = () => {
    clearDisplay()
    set1 = 0
    set2 = 0
}

btnAns.onclick = () => {
    displayContent = Ans.toString()
    updateDisplay()
}

btnComma.onclick = () => {
    displayContent += `.`
    updateDisplay()
}

btnEquals.onclick = () => {
    secondset()
    let op = 0
    if (operation == `div`) {
        op = (set1 / set2)
        displayContent = op.toString()
    } 
    if (operation == `mult`) {
        op = (set1 * set2)
        displayContent = op.toString()
    }
    if (operation == `sub`) {
        op = (set1 - set2)
        displayContent = op.toString()
    }
    if (operation == `sum`) {
        op = (set1 + set2)
        displayContent = op.toString()
    }
    Ans = op
    updateDisplay()
    operationButtonClear()
    equalsButtonClicked = true
}

function updateDisplay() {
    display.innerHTML = displayContent
}

function clearDisplay() {
    displayContent = `0`
    updateDisplay()
}

function checkZeroAtFirstPosOndisplayContent() {
    if (displayContent == `0`) {
        displayContent = ``
        updateDisplay()
    }
}

function firstset() {
    if (set1 == 0 && set2 == 0 && displayContent != `0`) {
        set1 = parseFloat(displayContent)
    }
    clearDisplay()
}

function secondset() {
    if (set1 != 0 && set2 == 0 && displayContent != `0`) {
        set2 = parseFloat(displayContent)
    }
}

function hadEqualsButtonBeenPressed() {
    if (equalsButtonClicked) {
        displayContent = ``
        set1 = 0
        set2 = 0
        equalsButtonClicked = false
        updateDisplay()
    }
}

function operationButtonPressed(btn) {
    btn.style.backgroundColor = 'white'
    btn.style.color = 'orange'
}

function operationButtonClear() {
    for (let btn of operationsButtons) {
        btn.style.backgroundColor = 'orange'
        btn.style.color = 'white'
        btn.onmouseover = () => {
            btn.style.backgroundColor = 'lightgray'
        }
        btn.onmouseout = () => {
            btn.style.backgroundColor = 'orange'
        }
    }
}