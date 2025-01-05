document.getElementById("buttonResult").addEventListener("click", () => {

const digits1 = parseInt(document.getElementById("digits1").value);
const digits2 = parseInt(document.getElementById("digits2").value);

const operators = document.getElementById("operators").value;


let resultPlus;
if (operators == "+") resultPlus = digits1 + digits2;
if (operators == "-") resultPlus = digits1 - digits2;
if (operators == "/") resultPlus = digits1 / digits2;
if (operators == "*") resultPlus = digits1 * digits2;
document.getElementById("result").value = resultPlus;



// if (operators == "+") {
//     let resultplus = digits1 + digits2;
//     document.getElementById("result").value = resultplus;
// }

// if (operators == "-") {
//     let resultplus = digits1 - digits2;
//     document.getElementById("result").value = resultplus;
// }

// if (operators == "/") {
//     let resultplus = digits1 / digits2;
//     document.getElementById("result").value = resultplus;
// }

// if (operators == "*") {
//     let resultplus = digits1 * digits2;
//     document.getElementById("result").value = resultplus;
// }

});