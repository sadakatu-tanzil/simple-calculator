const calculator = document.querySelector(".calculator");

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
      console.log(this.dataset.buttonValue);
    }

    // operator buttons
    if (this.dataset.buttonType === "operator") {
      console.log(this.dataset.buttonValue);
    }
  });
});
