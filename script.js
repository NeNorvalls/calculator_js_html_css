let display = document.getElementById('display');


document.addEventListener('keydown', function(event) {

    if (event.key.match(/[0-9+\-*/.]/)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

function appendToDisplay(value) {
    if (display.innerHTML === '0' || display.innerHTML === 'Error') {
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
        const result = eval(display.innerHTML);
        display.innerHTML = result;
        console.log('Result calculated:', result);
    } catch {
        display.innerHTML = 'Error';
        console.error('Error occurred during calculation');
    }
}

