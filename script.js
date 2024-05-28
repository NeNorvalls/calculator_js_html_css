let display = document.getElementById('display');
// This line selects the HTML element with the id attribute set to "display" and assigns it to the display variable. 
// This element is used to show the input and result of the calculator.

function appendToDisplay(value) {
    if (display.innerHTML === '0') {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}

// This function updates the display with the given value (such as a number or operator).
// Parameters: value - the character to be added to the display (e.g., '1', '2', '+', '-').
// Logic:
// If the display currently shows '0':
// Replace the '0' with the new value. This avoids having leading zeros.
// If the display shows any other value:
// Append the new value to the existing content of the display.

function clearDisplay() {
    display.innerHTML = '0';
}

// This function clears the display, resetting it to '0'.
// Logic:
// Simply sets the innerHTML of the display element to '0', 
// effectively clearing any previous input or result.

function calculateResult() {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch {
        display.innerHTML = 'Error';
    }
}

// This function evaluates the arithmetic expression currently shown in the display and updates the display with the result.

// Logic:
// try block:
// Uses the eval function to evaluate the expression in the display's innerHTML. 
// The eval function interprets the string as a JavaScript expression and computes the result.
// If the evaluation is successful, it sets the display's innerHTML to the result.
// catch block:
// If an error occurs during the evaluation (e.g., due to an invalid expression), it catches the error and sets the display's 
// innerHTML to 'Error'.
