/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const from = document.querySelector("form");
const outputContainer = document.getElementById("output");

const formatOutputValue = (name, value) => {
  return `<dt>${name}:</dt><dd>${value}</dd>`;
};

if (from && output) {
  from.addEventListener(
    "submit",
    function (evt) {
      evt.preventDefault();

      const formData = new FormData(evt.target);
      const kg = formData.get("search");

      if (kg.length === 0 || isNaN(parseFloat(kg))) {
        alert("Įveskite kilogramus");
      } else {
        const lb = kg * 2.2046;
        const g = kg / 0.001;
        const oz = kg * 35.274;

        let output = "<dl>";

        output += formatOutputValue("Svarai (lb)", lb.toFixed(2));
        output += formatOutputValue("Gramai (g)", g.toFixed(2));
        output += formatOutputValue("Uncijos (oz)", oz.toFixed(2));

        output += "</dl>";

        outputContainer.innerHTML = output;
      }
    },
    true
  );
}
