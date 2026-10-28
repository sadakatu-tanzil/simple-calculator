const calculator = document.querySelector(".calculator");

/** State
 * this is the key
 */

const calculationState = {
  num1: 0,
  num2: "",
  operator: "",
  result: "",
};

function clearState() {
  const { num1, num2, operator, result } = calculationState;

  num1 = result;
  num2 = "";
  operator = "";
  result = "";
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

/** Screen
 * display input and output
 * update frequently
 */

const output = calculator.querySelector(".calculator__screen-text");
function updateOutput(currentOutput) {
  output.textContent = currentOutput;
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
      // todo
    }

    // operator buttons
    if (this.dataset.buttonType === "operator") {
      // todo
    }

    // equal button
    if (this.dataset.buttonType === "equal") {
      // todo
    }
  });
});
