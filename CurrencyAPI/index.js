const buttonCurrency = document.getElementById("buttonCurrency");
const inputNumber = document.getElementById("inputNumber");
const result = document.getElementById("result");

// https://free.currconv.com/api/v7/convert?q=EUR_TRY&compact=ultra&apiKey=[APIKEY]


buttonCurrency.addEventListener("click", () => {

    const linkStart = "https://free.currconv.com/api/v7/convert?q=";
    const linkEnd = "&compact=ultra&apiKey="
    const apiKey = "[APIKEY]"

    const from = document.getElementById("from");
    const to = document.getElementById("to");

    const searchCurrency = linkStart + from.value + "_" + to.value + linkEnd + apiKey;

    fetch(searchCurrency)
        .then(response => response.json())
        .then(data => {
            const conversionRate = data[from.value + "_" + to.value];
            const resultCurrency = conversionRate * inputNumber.value;
            console.log(resultCurrency)
            result.value = resultCurrency.toFixed(2);
        })
        .catch(error => console.error(error));
})