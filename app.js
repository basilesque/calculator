const input = document.getElementById('inputtext');

const buttons = document.querySelectorAll('button');


document.getElementById("empty").style.cursor = "default";
document.getElementById("inputtext").style.cursor = "default";

document.getElementById("inputtext").disabled = true;

function calculate(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}

function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});


