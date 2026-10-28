const calculator = document.querySelector(".calculator");

/** Screen
 * display input and output
 * update frequently
 */

const output = calculator.querySelector(".calculator__screen-text");
function updateOutput(currentOutput) {
  output.textContent = currentOutput;
}
