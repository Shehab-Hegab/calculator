let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function resetCalculator() {
  displayValue = '0';
  updateDisplay();
}

// Call the updateDisplay function initially to display '0'
updateDisplay();
