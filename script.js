const btn0 = document.querySelector('#btn0')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const dot = document.querySelector('#dot')
const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const div = document.querySelector('#div')
const mult = document.querySelector('#mult')
const remainder = document.querySelector('#remainder')
const brackets = document.querySelector('#brackets')
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')

const input = document.querySelector('#input')
const output = document.querySelector('#output')
const backspace = document.querySelector('#backspace')

const nums = document.querySelectorAll('.nums')

let operation = ''

function isValidSyntax() {
    switch(operation.slice(-1)){
        case '+':
            return false
        case '-':
            return false
        case '/':
            return false
        case '*':
            return false
        case '%':
            return false
        case '.':
            return false
    }
    return true
}

function checkLength() {
    return operation.length > 13
}

function isInputNull() {
    return operation == ""
}

for (const num of nums) {
    num.addEventListener('click', function () {
        if (checkLength()) {
            return
        }
        input.value += num.innerText
        operation += num.innerText
        console.log(operation)
    })
}

dot.addEventListener('click', function () {
    if (checkLength() || isInputNull() || !isValidSyntax()) {
        return
    }
    input.value += dot.innerText
    operation += dot.innerText
    console.log(operation)
})

add.addEventListener('click', function () {
    if (checkLength() || isInputNull() || !isValidSyntax()) {
        return
    }
    input.value += add.innerText
    operation += add.innerText
    console.log(operation)
})
sub.addEventListener('click', function () {
    if (checkLength() || !isValidSyntax()) {
        return
    }
    input.value += sub.innerText
    operation += sub.innerText
    console.log(operation)
})
div.addEventListener('click', function () {
    if (checkLength() || isInputNull() || !isValidSyntax()) {
        return
    }
    input.value += div.innerText
    operation += '/'
    console.log(operation)
})
mult.addEventListener('click', function () {
    if (checkLength() || isInputNull() || !isValidSyntax()) {
        return
    }
    input.value += mult.innerText
    operation += '*'
    console.log(operation)
})

equal.addEventListener('click', function () {
    try {
        if (isInputNull()) {
            return
        }
        let res = eval(operation)
        output.innerText = res
        input.value = res
        operation = res.toString()
    } catch (e) {
        console.log('INVALID SYNTAX!', e)
        output.innerText = 'invalid'
    }
})

let bracketOpen = false

brackets.addEventListener('click', function () {
    if (checkLength() || !isValidSyntax()) {
        return
    }
    if (!bracketOpen) {
        input.value += '('
        operation += '('
        console.log(operation)
        bracketOpen = true
    } else {
        input.value += ')'
        operation += ')'
        console.log(operation)
        bracketOpen = false
    }
})

backspace.addEventListener('click', function () {
    input.value = input.value.slice(0, input.value.length - 1)
    operation = operation.slice(0, operation.length - 1)
    console.log(operation)
})

clear.addEventListener('click', function () {
    input.value = ''
    operation = ''
    output.innerText = '0'
    console.log(operation)
})

remainder.addEventListener('click' ,function(){
    if (checkLength() || isInputNull() || !isValidSyntax()) {
        return
    }
    input.value += remainder.innerText
    operation += remainder.innerText
    console.log(operation)
})

