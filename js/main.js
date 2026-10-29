const calculator = document.querySelector(".calculator");

/** State
 * this is the key
 */

const calculationState = {
  num1: "",
  num2: "",
  operator: "",
  result: "",
};

function clearState() {
  calculationState.num1 = "";
  calculationState.num2 = "";
  calculationState.operator = "";
  calculationState.result = "";
}

function calculate(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);
  switch (operator) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "*":
      return numA * numB;
    case "/":
      return numA / numB;
    default:
      return "error";
  }
}

function calculation() {
  /**
   * calculate
   * set the result to num1
   * reset num2
   * finally, add/replace operator
   */
  const { num1, num2, operator } = calculationState;
  const result = calculate(num1, num2, operator);

  if (isNaN(result)) {
    displayMessage("error");
    clearState();
    return;
  }

  if (!isFinite(result)) {
    displayMessage("infinity");
    clearState();
    return;
  }

  displayMessage(result);
  clearState();
  calculationState.num1 = result;
}

/** Screen
 * display input and output
 * update frequently
 */

const output = calculator.querySelector(".calculator__screen-text");
function displayCalculation() {
  const { num1, num2, operator } = calculationState;
  const outputstr = `${num1}${operator}${num2}`;
  output.textContent = outputstr;
}

function displayMessage(message) {
  output.textContent = message;
}

/** Buttons
 * dictates functionality
 * handle logic carefully
 */

const calculatorButtons = calculator.querySelectorAll(".calculator__button");
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
      /** when num2 is empty
       * simply add/replace operator
       */
      if (calculationState.num2 === "") {
        calculationState.operator = this.dataset.buttonValue;
        displayCalculation();
        return;
      }

      /** When num2 is not empty
       * calculate
       * set the result to num1
       * reset num2
       * finally, add/replace operator
       */
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
    }
  });
});
