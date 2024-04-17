// Add function
function add(a, b) {
    return a + b;
}

// Subtract function
function subtract(a, b) {
    return a - b;
}

// Multiply function
function multiply(a, b) {
    return a * b;
}

// Divide function
function divide(a, b) {
    return a / b;
}

// Operate function
// Takes in an operator (operate) and two operands (a, b)
function operate(operate, a, b) {
    if (operate === "+") {
        return add(a, b);
    }
    if(operate === "-") {
        return subtract(a, b);
    }
    if(operate === "x") {
        return multiply(a, b);
    }
    if(operate === "%") {
        return divide(a, b);
    }
}