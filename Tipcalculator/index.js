const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const decreaseButton = document.getElementById('decreaseButton');
const increaseButton = document.getElementById('increaseButton');

const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = 1;


billInput.addEventListener("keyup", () => {
    calculateTotal()
})

tipInput.addEventListener("keyup", () => {
    calculateTotal()
})

increaseButton.addEventListener("click", () => {
    if (numberOfPeople < 2) {
        return;
    }
    
    numberOfPeople--
 
    numberOfPeopleDiv.innerHTML = numberOfPeople;

    calculateTotal()

})

decreaseButton.addEventListener("click", () => {
    numberOfPeople++

    numberOfPeopleDiv.innerHTML = numberOfPeople;

    calculateTotal();
    
})


function calculateTotal() {
    const billInputNumber = billInput.value
    
    const tipInputNumber = tipInput.value

    const total = billInputNumber * (tipInputNumber / 100);

    const personTotal = total / numberOfPeople;
    
    perPersonTotalDiv.innerHTML = "$" + personTotal.toFixed(2);
}