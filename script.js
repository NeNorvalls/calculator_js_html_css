let display = document.getElementById('display');


function appendToDisplay(value) {
    if (display.innerHTML === '0') {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}


function clearDisplay() {
    display.innerHTML = '0';
}


function calculateResult() {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch {
        display.innerHTML = 'Error';
    }
}


