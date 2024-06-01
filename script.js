let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerHTML === '0') {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
    console.log(`Value ${value} appended to display`);
}

function clearDisplay() {
    display.innerHTML = '0';
    console.log('Display cleared');
}

function calculateResult() {
    try {
        display.innerHTML = eval(display.innerHTML);
        console.log('Result calculated:', display.innerHTML);
    } catch {
        display.innerHTML = 'Error';
        console.error('Error occurred during calculation');
    }
}
