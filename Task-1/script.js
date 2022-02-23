/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");
form.addEventListener("submit", weightConverter);

function weightConverter(event) {
    event.preventDefault();

    const input = document.querySelector("#search");
    const inputValue = Number(input.value);

    const puond = inputValue * 2.2046;
    const grams = inputValue / 0.001;
    const ounce = inputValue * 35.274;

    const output = document.querySelector("#output");
    output.innerText = `Converted to puonds: ${puond} (lb). Converted to grams: ${grams} (g). Convertered to ounce: ${ounce} (oz).`
};