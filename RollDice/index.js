const rollDice = document.querySelector(".rollDice");
const diceResult = document.querySelector(".diceResult");
const diceResultDigits = document.querySelector(".diceResultDigits");
const diceCountInput = document.querySelector(".diceCountInput");

const diceNumbers = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

rollDice.addEventListener("click", () => {

    if (diceCountInput.value <= 0 || diceCountInput.value > 6 || diceCountInput.value == "") {
        alert("Fill in a number");
    } 
    else {

        let result = "";
        let resultDigits = [];

        for (let i = 0; i < diceCountInput.value; i++) {
            const diceRandom = Math.floor(Math.random() * 6);

            result += diceNumbers[diceRandom];
            resultDigits.push(diceRandom + 1)
        }

        diceResult.innerHTML = result;
        diceResultDigits.innerHTML = resultDigits.join(', ');
    }
})