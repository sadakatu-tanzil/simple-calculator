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

/** Screen
 * display input and output
 * update frequently
 */

const output = calculator.querySelector(".calculator__screen-text");
function updateOutput(currentOutput = "") {
  const { num1, num2, operator } = calculationState;
  const outputstr = `${num1 || ""}${operator || ""}${num2 || ""}`;
  console.clear();
  console.log(outputstr);
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
      updateOutput();
    }

    // operator buttons
    if (this.dataset.buttonType === "operator") {
      /** when num2 is empty
       * simply add/replace operator
       */
      calculationState.operator = this.dataset.buttonValue;

      /** when num2 is notempty
       * calculate
       * set the result to num1
       * reset num2
       * finally, add/replace operator
       */
      updateOutput();
    }

    // equal button
    if (this.dataset.buttonType === "equal") {
      // todo
    }
  });
});
