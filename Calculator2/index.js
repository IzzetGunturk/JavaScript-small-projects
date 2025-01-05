const buttons = document.querySelectorAll(".number, .operator");
const resultDisplay = document.getElementById('resultDisplay');
const buttonResult = document.getElementById('buttonResult');
const buttonClear = document.getElementById('buttonClear');

buttons.forEach(button => {
    button.addEventListener("click", function () {
        resultDisplay.value += this.textContent;
    });
});

buttonClear.addEventListener("click", function () {
    resultDisplay.value = "";
});

buttonResult.addEventListener('click', function () {
    calculate();
});

function calculate() {
    const results = eval(resultDisplay.value);

    resultDisplay.value = results;
}