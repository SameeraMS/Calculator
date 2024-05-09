var display = document.querySelector('#display');

$('#btn1').on('click', () => {
    display.value = ''
})

$('#btn2').on('click', () => {
    display.value = display.value.toString().slice(0,-1)
})

$('#btn3').on('click', () => {
    display.value += '/'
})

$('#btn4').on('click', () => {
    display.value += '7'
})

$('#btn5').on('click', () => {
    display.value += '8'
})

$('#btn6').on('click', () => {
    display.value += '9'
})

$('#btn7').on('click', () => {
    display.value += '*'
})

$('#btn8').on('click', () => {
    display.value += '4'
})

$('#btn9').on('click', () => {
    display.value += '5'
})

$('#btn10').on('click', () => {
    display.value += '6'
})

$('#btn11').on('click', () => {
    display.value += '-'
})

$('#btn12').on('click', () => {
    display.value += '1'
})

$('#btn13').on('click', () => {
    display.value += '2'
})

$('#btn14').on('click', () => {
    display.value += '3'
})

$('#btn15').on('click', () => {
    display.value += '+'
})

$('#btn16').on('click', () => {
    display.value += '00'
})

$('#btn17').on('click', () => {
    display.value += '0'
})

$('#btn18').on('click', () => {
    display.value += '.'
})

$('#btn19').on('click', () => {
    display.value = eval(display.value)
})

