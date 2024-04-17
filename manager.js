// Add function
function add(a, b) {
    return Number(a) + Number(b);
}

// Subtract function
function subtract(a, b) {
    return Number(a) - Number(b);
}

// Multiply function
function multiply(a, b) {
    return Number(a) * Number(b);
}

// Divide function
function divide(a, b) {
    return Number(a) / Number(b);
}

// Operate function
// Takes in an operator (operate) and two operands (a, b)
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "%":
            return divide(a, b);
    }
}


// Accessing and initializing our display
let display = document.querySelector("#display");
display.textContent = "";

// Click event manager for all buttons
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        modDisplay(button.id);
    });
});

function modDisplay(value) {
    if (value === "C") {
        display.textContent = ""; 
    } else if (value === "=") {
        display.textContent = operate(display.textContent.charAt(1), display.textContent.charAt(0), display.textContent.charAt(2));
    } else {
        display.textContent += value;
    }
}

