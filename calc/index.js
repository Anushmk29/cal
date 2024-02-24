let inputBox = document.getElementById('inputBox')
let buttons = Array.from(document.querySelectorAll('button'))
let string = ''

buttons.forEach(ele => {
    ele.addEventListener('click', (b) => {
        handleInput(b.target.innerText);
    })
})

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const buttonKeys = buttons.map(button => button.innerText);
    if (buttonKeys.includes(key)) {
        handleInput(key);
    }
})

function handleInput(input) {
    if(input == '=') {
        string = String(eval(string))
        inputBox.value = string;
    }
    else if(input == 'AC') {
        string = ''
        inputBox.value = string
    }
    else if(input == 'DEL') {
        string = string.substring(0,string.length-1)
        inputBox.value = string
    }
    else if(input == '±') {
        string = String(-eval(string))
        inputBox.value = string
    }
    else {
        string += input
        inputBox.value = string
    }
}