live @ https://nenorvalls.github.io/calculator_js_html_css/

#Coding Explanation:
# Calculator App

This is a simple calculator application implemented in JavaScript.

## How to Use

1. Open the `index.html` file in your web browser.
2. Use the calculator by clicking the buttons or typing on your keyboard.

## Code Overview

### Variables

The `display` variable is used to store the reference to the HTML element responsible for displaying the input and output of the calculator.

### Functions

#### `appendToDisplay(value)`

This function updates the display with the given value, such as a number or operator.

- Parameters: `value` - the character to be added to the display (e.g., '1', '2', '+', '-').
- Logic: If the display currently shows '0', it replaces it with the new value to avoid leading zeros. Otherwise, it appends the new value to the existing content of the display.

#### `clearDisplay()`

This function clears the display, resetting it to '0'.

- Logic: It sets the innerHTML of the display element to '0', effectively clearing any previous input or result.

#### `calculateResult()`

This function evaluates the arithmetic expression currently shown in the display and updates the display with the result.

- Logic: It uses the `eval` function to evaluate the expression in the display's innerHTML. If the evaluation is successful, it sets the display's innerHTML to the result. If an error occurs during the evaluation (e.g., due to an invalid expression), it catches the error and sets the display's innerHTML to 'Error'.

<body>: Contains the visible content of the webpage.
<div class="calculator">: Container for the entire calculator.
<div class="display" id="display">0</div>: Shows the current input or result.
<div class="buttons">: Container for all the calculator buttons.
Buttons (<button class="button" onclick="...">...</button>): Each button is a key on the calculator.
class="button": Assigns a CSS class for styling.
onclick="...": Calls a JavaScript function when the button is clicked.
clearDisplay(): Resets the display to 0.
appendToDisplay('...'): Adds the character (e.g., '7', '+') to the display.
calculateResult(): Calculates and shows the result.