function clearDisplay() {
    document.querySelector('.display').textContent = '0';
}

function calculateResult() {
    const display = document.querySelector('.display');
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

function appendSymbol(symbol) {
    const display = document.querySelector('.display');
    if (display.textContent === '0' && symbol !== '.') {
        display.textContent = symbol;
    } else {
        display.textContent += symbol;
    }
}
