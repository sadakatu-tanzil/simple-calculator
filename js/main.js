const calculator = document.querySelector(".calculator");
const output = calculator.querySelector(".calculator__screen-text");
const calculatorButtons = calculator.querySelectorAll(".calculator__button");

// state
const calculationState = {
  num1: "",
  num2: "",
  operator: "",
};

function clearState() {
  calculationState.num1 = "";
  calculationState.num2 = "";
  calculationState.operator = "";
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);
  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
    default:
      return "error";
  }
}

function calculation() {
  const { num1, num2, operator } = calculationState;
  const result = calculate(num1, num2, operator);
  const checkedResult = isInt(result) ? result : result.toFixed(5);

  if (isNaN(result)) {
    displayMessage("error");
    clearState();
    return;
  }

  if (!isFinite(result)) {
    displayMessage("bruh! that's illegal");
    clearState();
    return;
  }

  displayMessage(checkedResult);
  clearState();
  calculationState.num1 = checkedResult;
}

// screen
function displayCalculation() {
  const { num1, num2, operator } = calculationState;

  if (num1 === "") {
    output.textContent = "0";
    return;
  }

  const outputString = `${num1}${operator}${num2}`;
  output.textContent = outputString;
}

function displayMessage(message) {
  output.textContent = message;
}

// buttons
calculatorButtons.forEach((calculatorButton) => {
  calculatorButton.addEventListener("click", function () {
    // numeric buttons
    if (this.dataset.buttonType === "numeric") {
      if (calculationState.operator === "") {
        if (this.dataset.buttonValue === "0" && calculationState.num1 === "")
          return;
        calculationState.num1 += this.dataset.buttonValue;
      } else {
        if (this.dataset.buttonValue === "0" && calculationState.num2 === "")
          return;
        calculationState.num2 += this.dataset.buttonValue;
      }
      displayCalculation();
    }

    // operator buttons
    if (this.dataset.buttonType === "operator") {
      // when num1 is empty
      if (calculationState.num1 === "") {
        return;
      }

      // when num2 is empty
      if (calculationState.num2 === "") {
        calculationState.operator = this.dataset.buttonValue;
        displayCalculation();
        return;
      }

      // when both is not empty
      calculation();
      calculationState.operator = this.dataset.buttonValue;
      displayCalculation();
    }

    // equal button
    if (this.dataset.buttonType === "equal") {
      if (calculationState.operator === "" || calculationState.num2 === "") {
        return;
      }

      calculation();
      clearState();
    }

    // clear button
    if (this.dataset.buttonType === "c") {
      if (calculationState.num2 !== "") {
        calculationState.num2 = calculationState.num2.slice(0, -1);
        displayCalculation();
        return;
      }

      if (calculationState.operator !== "") {
        calculationState.operator = calculationState.operator.slice(0, -1);
        displayCalculation();
        return;
      }

      if (calculationState.num1 !== "") {
        calculationState.num1 = "";
        displayCalculation();
        return;
      }
    }

    // clear all button
    if (this.dataset.buttonType === "ce") {
      clearState();
      displayMessage("0");
    }
  });
});

function isInt(num) {
  return num % 1 === 0;
}
